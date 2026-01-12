import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm dark:bg-background-dark/95 border-b border-[#EBE5DE] dark:border-gray-800 h-20 transition-all duration-300">
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
              <div class="flex flex-col md:flex-row md:items-baseline">
                <h1 class="text-text-main dark:text-white text-xl font-bold tracking-widest uppercase">
                  Dödsbo<span class="text-primary font-normal">Partner</span>
                </h1>
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
                </div>
              </div>
            </div>

            <a routerLink="/vanliga-fragor" routerLinkActive="text-primary" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Vanliga Frågor</a>
            <a routerLink="/" fragment="process" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Process</a>
            <a routerLink="/" fragment="om-oss" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Om oss</a>
            <a routerLink="/" fragment="kontakt" class="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 transition-colors uppercase tracking-wide">Kontakt</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-4">
            <a href="tel:081234567" class="hidden xl:flex items-center gap-2 text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors">
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
               </div>
            </div>

            <a routerLink="/vanliga-fragor" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3 border-b border-gray-50 dark:border-gray-800">Vanliga Frågor</a>
            <a routerLink="/" fragment="process" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3 border-b border-gray-50 dark:border-gray-800">Process</a>
            <a routerLink="/" fragment="om-oss" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3 border-b border-gray-50 dark:border-gray-800">Om oss</a>
            <a routerLink="/" fragment="kontakt" (click)="closeMenu()" class="text-lg font-bold text-text-main hover:text-primary py-3">Kontakt</a>
            
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

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}