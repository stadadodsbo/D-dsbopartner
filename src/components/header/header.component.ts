import { Component, ChangeDetectionStrategy, signal, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 50;
      width: 100%;
    }
  `],
  template: `
    <!-- Mobile Top Bar (Visible only on mobile) -->
    <div 
      class="lg:hidden relative z-[60] w-full flex justify-center items-center transition-all duration-300 ease-in-out border-primary/10 bg-white/95 backdrop-blur-sm dark:bg-surface-dark/95 border-b"
      [class.py-4]="isPhoneExpanded()"
      [class.py-2]="!isPhoneExpanded()"
      [class.shadow-lg]="isPhoneExpanded()"
    >
        <a href="tel:081234567" class="inline-flex items-center gap-2 font-bold text-primary transition-all duration-300"
           [class.text-xl]="isPhoneExpanded()"
           [class.text-sm]="!isPhoneExpanded()">
            <span class="material-symbols-outlined transition-all duration-300" 
                  [class.text-[26px]]="isPhoneExpanded()"
                  [class.text-[18px]]="!isPhoneExpanded()"
                  style="font-variation-settings: 'FILL' 1">call</span>
            08-123 45 67
        </a>
    </div>

    <!-- Main Header -->
    <header 
      class="relative z-50 bg-white/95 backdrop-blur-sm dark:bg-background-dark/95 border-b border-[#EBE5DE] dark:border-gray-800 h-20 transition-all duration-300"
      [class.-translate-y-full]="isNavHidden()"
      [class.translate-y-0]="!isNavHidden()"
      [class.lg:translate-y-0]="true"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="flex items-center justify-between h-full">
          <!-- Logo Section -->
          <div class="flex items-center gap-3">
            <a routerLink="/" class="flex items-center gap-3 group">
              <div class="size-10 text-primary transition-transform group-hover:scale-105">
                <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <path d="M50 15L75 28V50C75 65 64 78 50 85C36 78 25 65 25 50V28L50 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                  <path d="M50 80C50 80 40 70 40 55C40 45 45 40 50 35C55 40 60 45 60 55C60 65 55 70 50 80Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                  <path d="M50 35C50 35 48 45 55 52" stroke="currentColor" stroke-linecap="round" stroke-width="3"></path>
                </svg>
              </div>
              <div class="flex flex-col items-center">
                <h1 class="text-text-main dark:text-white text-xl font-bold tracking-widest uppercase leading-none">
                  Dödsbopartner
                </h1>
                <span class="text-[10px] text-text-sub dark:text-gray-400 font-bold tracking-[0.7em] uppercase leading-none mt-1.5 ml-1 whitespace-nowrap">
                  Stockholm AB
                </span>
              </div>
            </a>
          </div>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-8 h-full">
            <a routerLink="/" fragment="home" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Start</a>
            
            <!-- Dropdown for Tjänster -->
            <div class="relative group h-full flex items-center">
              <button class="flex items-center gap-1 text-sm font-bold text-text-main group-hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide focus:outline-none">
                Tjänster
                <span class="material-symbols-outlined text-lg transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              
              <!-- Dropdown Content -->
              <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                <div class="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden py-2">
                  <a routerLink="/tjanster/tomning" class="block px-4 py-3 text-sm font-medium text-text-main dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary text-lg">inventory_2</span>
                      Tömning
                    </div>
                  </a>
                  <a routerLink="/tjanster/flyttstadning" class="block px-4 py-3 text-sm font-medium text-text-main dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                     <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary text-lg">cleaning_services</span>
                      Flyttstädning
                    </div>
                  </a>
                  <a routerLink="/tjanster/salja-dodsbo" class="block px-4 py-3 text-sm font-medium text-text-main dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                     <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary text-lg">sell</span>
                      Sälja Dödsbo
                    </div>
                  </a>
                  <a routerLink="/tjanster/sanering" class="block px-4 py-3 text-sm font-medium text-text-main dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                     <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary text-lg">sanitizer</span>
                      Sanering
                    </div>
                  </a>
                  <a routerLink="/tjanster/grovsopor" class="block px-4 py-3 text-sm font-medium text-text-main dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                     <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary text-lg">delete_sweep</span>
                      Grovsopor
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a routerLink="/vanliga-fragor" routerLinkActive="text-primary" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Vanliga Frågor</a>
            <a routerLink="/" fragment="kontakt" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Kontakt</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-4">
            <!-- Login Button (Desktop) -->
            @if (supabase.currentUser()) {
              <div class="hidden sm:flex items-center gap-3">
                 <button (click)="supabase.signOut()" class="text-sm font-bold text-text-main hover:text-primary uppercase tracking-wide">Logga ut</button>
                 <div class="size-9 bg-primary/10 rounded-full flex items-center justify-center text-primary" title="Inloggad">
                    <span class="material-symbols-outlined">person</span>
                 </div>
              </div>
            } @else {
               <a routerLink="/login" class="hidden sm:flex items-center gap-1 text-sm font-bold text-text-main hover:text-primary dark:text-white transition-colors uppercase tracking-wide">
                  Logga in
              </a>
            }

            <a href="tel:081234567" class="hidden xl:flex items-center gap-2 text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors border-l border-gray-200 pl-4 ml-2">
              <span class="material-symbols-outlined text-primary text-[22px]">call</span>
              08-123 45 67
            </a>
            <a routerLink="/tjanster/salja-dodsbo" class="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hidden sm:block">
              Boka tid
            </a>
             <!-- Mobile Menu Button -->
            <div (click)="toggleMenu()" class="lg:hidden text-text-main dark:text-white cursor-pointer p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span class="material-symbols-outlined text-3xl">{{ isMenuOpen() ? 'close' : 'menu' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
        <div class="lg:hidden absolute top-20 sm:top-24 left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-xl animate-in slide-in-from-top-2 z-40 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div class="flex flex-col p-6 gap-2">
            <a routerLink="/" fragment="home" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3 border-b border-gray-50 dark:border-gray-800">Start</a>
            
            <div class="py-2 border-b border-gray-50 dark:border-gray-800">
               <span class="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Tjänster</span>
               <div class="pl-4 flex flex-col gap-3">
                 <a routerLink="/tjanster/tomning" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary">Tömning</a>
                 <a routerLink="/tjanster/flyttstadning" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary">Flyttstädning</a>
                 <a routerLink="/tjanster/salja-dodsbo" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary">Sälja Dödsbo</a>
                 <a routerLink="/tjanster/sanering" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary">Sanering</a>
                 <a routerLink="/tjanster/grovsopor" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary">Grovsopor</a>
               </div>
            </div>

            <a routerLink="/vanliga-fragor" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3 border-b border-gray-50 dark:border-gray-800">Vanliga Frågor</a>
            <a routerLink="/" fragment="kontakt" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3">Kontakt</a>
            
            <!-- Mobile Auth -->
            <div class="py-3 border-b border-gray-50 dark:border-gray-800">
                @if (supabase.currentUser()) {
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-gray-500">Inloggad som {{ supabase.currentUser()?.email }}</span>
                        <button (click)="supabase.signOut(); closeMenu()" class="text-primary font-bold">Logga ut</button>
                    </div>
                } @else {
                    <a routerLink="/login" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary flex items-center gap-2">
                        <span class="material-symbols-outlined">login</span> Logga in
                    </a>
                }
            </div>

            <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a href="tel:081234567" class="flex items-center gap-3 justify-center text-text-main hover:text-primary transition-colors mb-4">
                <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1">call</span>
                <span class="font-bold text-lg">08-123 45 67</span>
                </a>

                <a routerLink="/tjanster/salja-dodsbo" (click)="closeMenu()" class="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-4 px-5 rounded-lg shadow-md uppercase tracking-wide">
                Boka tid
                </a>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isNavHidden = signal(false);
  isPhoneExpanded = signal(false);
  private lastScrollY = 0;
  public supabase = inject(SupabaseService);

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY;
    
    // Reset at top
    if (currentScroll < 10) {
      this.isNavHidden.set(false);
      this.isPhoneExpanded.set(false);
      this.lastScrollY = currentScroll;
      return;
    }

    // Determine direction
    if (currentScroll > this.lastScrollY) {
       // Scrolling Down: Hide Nav, Expand Phone
       this.isNavHidden.set(true);
       this.isPhoneExpanded.set(true);
    } else {
       // Scrolling Up: Show Nav, Original Phone Size
       this.isNavHidden.set(false);
       this.isPhoneExpanded.set(false);
    }
    
    this.lastScrollY = currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}