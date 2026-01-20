import { Component, ChangeDetectionStrategy, signal, inject, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Toggle Button -->
    <button 
      (click)="toggleChat()"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
      [class.bg-primary]="!isOpen()"
      [class.bg-surface-dark]="isOpen()"
      [class.rotate-90]="isOpen()"
    >
      @if (isOpen()) {
        <span class="material-symbols-outlined text-white text-2xl">close</span>
      } @else {
        <span class="material-symbols-outlined text-white text-3xl">smart_toy</span>
      }
    </button>

    <!-- Chat Window -->
    <div 
      class="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[380px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden"
      [class.scale-0]="!isOpen()"
      [class.opacity-0]="!isOpen()"
      [class.scale-100]="isOpen()"
      [class.opacity-100]="isOpen()"
      style="height: 500px; max-height: 80vh;"
    >
      <!-- Header -->
      <div class="bg-primary p-4 flex items-center gap-3">
        <div class="size-10 bg-white/20 rounded-full flex items-center justify-center text-white">
           <span class="material-symbols-outlined">smart_toy</span>
        </div>
        <div>
          <h3 class="font-bold text-white text-base">Dödsbopartner Assistent</h3>
          <p class="text-white/80 text-xs flex items-center gap-1">
            <span class="size-2 bg-green-400 rounded-full animate-pulse"></span> Online
          </p>
        </div>
      </div>

      <!-- Messages Area -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/20" #scrollContainer>
        @for (msg of messages(); track $index) {
          <div class="flex gap-2" [class.justify-end]="msg.role === 'user'">
            @if (msg.role === 'assistant') {
              <div class="size-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary self-end mb-1">
                <span class="material-symbols-outlined text-sm">smart_toy</span>
              </div>
            }
            
            <div 
              class="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
              [class.bg-primary]="msg.role === 'user'"
              [class.text-white]="msg.role === 'user'"
              [class.rounded-br-none]="msg.role === 'user'"
              [class.bg-white]="msg.role === 'assistant'"
              [class.dark:bg-gray-800]="msg.role === 'assistant'"
              [class.text-text-main]="msg.role === 'assistant'"
              [class.dark:text-white]="msg.role === 'assistant'"
              [class.shadow-sm]="msg.role === 'assistant'"
              [class.rounded-bl-none]="msg.role === 'assistant'"
            >
              {{ msg.text }}
            </div>
          </div>
        }

        @if (isThinking()) {
          <div class="flex gap-2">
             <div class="size-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary self-end mb-1">
                <span class="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div class="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1.5 items-center">
                <span class="size-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span class="size-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                <span class="size-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              </div>
          </div>
        }
      </div>

      <!-- Input Area -->
      <div class="p-3 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <form (ngSubmit)="sendMessage()" class="flex items-center gap-2">
          <input 
            type="text" 
            [(ngModel)]="userInput" 
            name="userInput"
            placeholder="Skriv din fråga här..." 
            class="flex-1 bg-gray-100 dark:bg-background-dark border-none rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white"
            [disabled]="isThinking()"
            autocomplete="off"
          />
          <button 
            type="submit" 
            [disabled]="!userInput() || isThinking()"
            class="size-11 bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
          >
            <span class="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWidgetComponent {
  isOpen = signal(false);
  messages = signal<ChatMessage[]>([
    { role: 'assistant', text: 'Hej! Jag är Dödsbopartner ABs AI-assistent. Hur kan jag hjälpa dig idag?' }
  ]);
  userInput = signal('');
  isThinking = signal(false);

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  private gemini = inject(GeminiService);

  constructor() {
    effect(() => {
      // Auto-scroll to bottom when messages change
      const _ = this.messages(); 
      setTimeout(() => this.scrollToBottom(), 100);
    });
  }

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  async sendMessage() {
    const text = this.userInput().trim();
    if (!text) return;

    // Add User Message
    this.messages.update(prev => [...prev, { role: 'user', text }]);
    this.userInput.set('');
    this.isThinking.set(true);
    this.scrollToBottom();

    try {
      // Get AI Response
      const response = await this.gemini.sendMessage(text);
      
      // Add AI Message
      this.messages.update(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      this.messages.update(prev => [...prev, { role: 'assistant', text: 'Ursäkta, jag fick problem att svara. Försök igen.' }]);
    } finally {
      this.isThinking.set(false);
    }
  }

  private scrollToBottom() {
    if (this.scrollContainer) {
      const el = this.scrollContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}