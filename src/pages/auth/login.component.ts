import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark py-20 px-4">
      <div class="max-w-md w-full bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10">
        
        <!-- Header -->
        <div class="text-center mb-8">
           <div class="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-4">
              <span class="material-symbols-outlined text-3xl">lock</span>
           </div>
           <h1 class="text-3xl font-serif font-bold text-text-main dark:text-white mb-2">Logga in</h1>
           <p class="text-gray-500 dark:text-gray-400 text-sm">Välkommen tillbaka till Dödsbopartner.</p>
        </div>

        <!-- Error Alert -->
        @if (errorMessage()) {
          <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6 flex items-start gap-2">
            <span class="material-symbols-outlined text-lg mt-0.5">error</span>
            <span>{{ errorMessage() }}</span>
          </div>
        }

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="email">E-postadress</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              class="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
              placeholder="namn@exempel.se"
              [class.border-red-300]="isFieldInvalid('email')"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300" for="password">Lösenord</label>
              <a href="#" class="text-xs font-medium text-primary hover:text-primary-dark">Glömt lösenord?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              formControlName="password"
              class="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
              placeholder="••••••••"
              [class.border-red-300]="isFieldInvalid('password')"
            />
          </div>

          <button 
            type="submit" 
            [disabled]="loginForm.invalid || isLoading()"
            class="w-full h-12 bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold rounded-lg transition-all shadow-md mt-2 flex items-center justify-center gap-2"
          >
            @if (isLoading()) {
              <span class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Loggar in...</span>
            } @else {
              <span>Logga in</span>
              <span class="material-symbols-outlined text-sm">login</span>
            }
          </button>
        </form>
        
        <div class="mt-8 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
           <p class="text-sm text-gray-500 dark:text-gray-400">
             Har du inget konto? <a routerLink="/" class="font-semibold text-primary hover:text-primary-dark">Kontakta kundtjänst</a>
           </p>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  
  private fb: FormBuilder = inject(FormBuilder);
  private supabase = inject(SupabaseService);
  private router = inject(Router);
  private seo = inject(SeoService);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    this.seo.setSeoData({
      title: 'Logga in',
      description: 'Logga in på Dödsbopartner AB.',
      slug: 'login'
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.errorMessage.set(null);
      
      try {
        const { email, password } = this.loginForm.value;
        await this.supabase.signIn(email, password);
        // Navigate to home or dashboard after success
        this.router.navigate(['/']);
      } catch (error: any) {
        this.errorMessage.set(error.message || 'Ett fel uppstod vid inloggningen.');
      } finally {
        this.isLoading.set(false);
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}