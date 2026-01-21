import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-white pt-20 pb-10 border-t border-gray-100 font-sans">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Section: 4 Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <!-- Column 1: Brand -->
          <div class="space-y-6">
            <!-- Logo area -->
            <div class="flex items-center gap-3">
               <div class="text-primary size-8">
                <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <path d="M50 15L75 28V50C75 65 64 78 50 85C36 78 25 65 25 50V28L50 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                  <path d="M50 80C50 80 40 70 40 55C40 45 45 40 50 35C55 40 60 45 60 55C60 65 55 70 50 80Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                  <path d="M50 35C50 35 48 45 55 52" stroke="currentColor" stroke-linecap="round" stroke-width="3"></path>
                </svg>
               </div>
               <div class="flex flex-col">
                  <span class="text-text-main font-bold text-lg uppercase tracking-wide leading-none">Dödsbopartner</span>
                  <span class="text-text-main font-medium text-[9px] uppercase tracking-wider leading-none mt-0.5">Stockholm AB</span>
               </div>
            </div>
            
            <p class="text-text-sub text-sm leading-relaxed max-w-xs text-[#666]">
              Vi hjälper dig med hela processen kring dödsbon i Stockholm och Uppsala med omnejd.
            </p>

            <!-- Social/Extra Icons -->
            <div class="flex gap-4 pt-2">
              <div class="text-[#9CA3AF] hover:text-primary transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-3xl">recycling</span>
              </div>
              <div class="text-[#9CA3AF] hover:text-primary transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-3xl">mail</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Tjänster -->
          <div>
            <h4 class="text-text-main font-bold text-sm uppercase tracking-wider mb-8">Tjänster</h4>
            <ul class="space-y-4">
              <li><a routerLink="/tjanster/salja-dodsbo" class="text-text-sub text-sm hover:text-primary transition-colors">Värdering av dödsbo</a></li>
              <li><a routerLink="/tjanster/tomning" class="text-text-sub text-sm hover:text-primary transition-colors">Tömning av dödsbo</a></li>
              <li><a routerLink="/tjanster/flyttstadning" class="text-text-sub text-sm hover:text-primary transition-colors">Dödsbo flyttstädning</a></li>
              <li><a routerLink="/tjanster/sanering" class="text-text-sub text-sm hover:text-primary transition-colors">Sanering dödsbo</a></li>
              <li><a routerLink="/tjanster/grovsopor" class="text-text-sub text-sm hover:text-primary transition-colors">Hämtning av grovsopor</a></li>
            </ul>
          </div>

          <!-- Column 3: Områden -->
          <div>
            <h4 class="text-text-main font-bold text-sm uppercase tracking-wider mb-8">Områden</h4>
            <ul class="space-y-4">
              <li class="text-text-sub text-sm">Stockholm</li>
              <li class="text-text-sub text-sm">Uppsala</li>
              <li class="text-text-sub text-sm">Södertälje</li>
              <li class="text-text-sub text-sm">Norrtälje</li>
            </ul>
          </div>

          <!-- Column 4: Kontakt -->
          <div>
            <h4 class="text-text-main font-bold text-sm uppercase tracking-wider mb-8">Kontakt</h4>
            <ul class="space-y-5">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary text-[20px] mt-0.5" style="font-variation-settings: 'FILL' 1">location_on</span>
                <span class="text-text-sub text-sm">Storgatan 12<br>111 22 Stockholm</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-[20px]" style="font-variation-settings: 'FILL' 1">call</span>
                <a href="tel:081234567" class="text-text-sub text-sm hover:text-primary transition-colors">08-123 45 67</a>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-[20px]" style="font-variation-settings: 'FILL' 1">mail</span>
                <a href="mailto:info@dodsbopartner.se" class="text-text-sub text-sm hover:text-primary transition-colors">info&#64;dodsbopartner.se</a>
              </li>
            </ul>
          </div>
          
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[#9CA3AF] text-xs">© 2024 Dödsbopartner Stockholm AB. Alla rättigheter reserverade.</p>
          <div class="flex gap-8 text-[#9CA3AF] text-xs">
            <a href="#" class="hover:text-primary transition-colors">Integritetspolicy</a>
            <a href="#" class="hover:text-primary transition-colors">Villkor</a>
            <a href="#" class="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}