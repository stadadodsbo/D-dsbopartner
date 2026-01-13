import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <!-- Organic Hero Section -->
    <section class="relative bg-background-light dark:bg-background-dark overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left space-y-8 lg:pr-12 relative z-10">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif text-text-main dark:text-white leading-tight tracking-tight">
              Din partner vid hantering av dödsbo
            </h1>
            <p class="text-lg text-text-sub dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Vi skapar trygghet i en svår stund. Helhetslösning för tömning, städning och värdering i Stockholm med fokus på omtanke och respekt.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a routerLink="/tjanster/tomning" class="bg-primary hover:bg-primary-dark text-white text-base font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Boka hembesök
              </a>
              <a href="#tjanster" class="bg-transparent hover:bg-white dark:hover:bg-white/5 text-text-main dark:text-white text-base font-medium py-3 px-8 rounded-lg border border-text-main/20 dark:border-white/20 hover:border-primary/50 transition-colors shadow-sm">
                Se våra tjänster
              </a>
            </div>
            <div class="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-sub dark:text-gray-400 font-medium">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span>Ansvarsförsäkring</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span>Nöjd kund-garanti</span>
              </div>
            </div>
          </div>
          
          <!-- Organic Image -->
          <div class="w-full lg:flex-1 relative mt-8 lg:mt-0">
            <div class="absolute inset-0 bg-primary/20 blur-2xl transform translate-x-4 translate-y-4 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-50"></div>
            
            <!-- Padding Hack Container for Aspect Ratio -->
            <div class="relative w-full pb-[100%] lg:pb-[75%]">
              <div class="absolute inset-0 w-full h-full overflow-hidden shadow-2xl" 
                   style="border-radius: 54% 46% 25% 75% / 55% 44% 56% 45%; box-shadow: -15px 15px 40px rgba(74, 60, 49, 0.15);">
                <div class="absolute inset-0 bg-[#C69C55] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img [ngSrc]="images.get('hero')" fill priority class="object-cover transition-transform duration-1000 hover:scale-105" 
                     alt="Warm interior apartment in Stockholm" 
                     style="filter: sepia(0.15) saturate(1.1);">
              </div>
              
              <!-- Floating Icon (Hidden on mobile) -->
              <div class="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-4 rounded-full shadow-xl border border-primary/10 dark:border-gray-700 hidden lg:block animate-bounce" style="animation-duration: 3s;">
                <div class="bg-primary/10 rounded-full p-3 text-primary">
                  <span class="material-symbols-outlined text-3xl">home</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg class="relative block w-[calc(100%+1.3px)] h-[60px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-white dark:fill-surface-light dark:opacity-5" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-white dark:bg-background-dark py-20" id="tjanster">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-primary font-bold tracking-widest uppercase text-xs mb-3 border-b border-primary/20 inline-block pb-1">Våra Tjänster</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-text-main dark:text-white mb-4">Helhetslösningar för dödsbo</h3>
          <p class="text-text-sub dark:text-gray-300 text-lg font-light">Vi anpassar oss efter dina behov. Oavsett om du behöver hjälp med enstaka delar eller hela processen finns vi här.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1: Tömning -->
          <a routerLink="/tjanster/tomning" class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md cursor-pointer">
            <div class="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-2xl">inventory_2</span>
            </div>
            <h4 class="text-xl font-bold text-text-main dark:text-white mb-3">Tömning</h4>
            <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed mb-4">
               Vi tömmer bostaden effektivt och respektfullt. Allt sorteras noggrant för återvinning.
            </p>
            <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Läs mer <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
          </a>
          <!-- Card 2: Sälja Dödsbo -->
          <a routerLink="/tjanster/salja-dodsbo" class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md cursor-pointer">
            <div class="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-2xl">sell</span>
            </div>
            <h4 class="text-xl font-bold text-text-main dark:text-white mb-3">Sälja Dödsbo</h4>
            <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed mb-4">
               Vi köper upp säljbara föremål och drar av summan direkt på fakturan.
            </p>
            <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Läs mer <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
          </a>
          <!-- Card 3: Flyttstädning -->
          <a routerLink="/tjanster/flyttstadning" class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md cursor-pointer">
            <div class="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-2xl">clean_hands</span>
            </div>
            <h4 class="text-xl font-bold text-text-main dark:text-white mb-3">Flyttstädning</h4>
            <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed mb-4">
               Noggrann flyttstädning med garanti. Godkänd av hyresvärd och nya ägare.
            </p>
            <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Läs mer <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
          </a>
          <!-- Card 4: Sanering -->
          <a routerLink="/tjanster/sanering" class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md cursor-pointer">
            <div class="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-2xl">sanitizer</span>
            </div>
            <h4 class="text-xl font-bold text-text-main dark:text-white mb-3">Sanering</h4>
            <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed mb-4">
               Luktsanering och grovstädning vid svåra förhållanden. Vi hanterar det med diskretion.
            </p>
            <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Läs mer <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
          </a>
        </div>

        <!-- Contact Form Section (Integrated) -->
        <div class="mt-24 max-w-4xl mx-auto" id="kontakt">
           <div class="text-center mb-10">
              <h3 class="text-2xl font-bold text-text-main dark:text-white">Kontakta oss för en kostnadsfri offert</h3>
              <p class="text-text-sub dark:text-gray-300 mt-2">Vi återkommer oftast inom 2 timmar.</p>
           </div>
           <app-contact-form />
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Tömning & Värdering av Dödsbo',
      description: 'Dödsbopartner AB hjälper er med helheten. Vi köper, tömmer och städar dödsbon i Stockholm och Uppsala. Kontakta oss för en kostnadsfri värdering.',
      slug: ''
    });
  }
}