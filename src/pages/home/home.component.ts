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
          <div class="flex-1 w-full relative">
            <div class="absolute inset-0 bg-primary/20 blur-2xl transform translate-x-4 translate-y-4 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-50"></div>
            <div class="relative w-full aspect-[1/1] lg:aspect-[4/3]">
              <div class="w-full h-full relative overflow-hidden shadow-2xl" 
                   style="border-radius: 54% 46% 25% 75% / 55% 44% 56% 45%; box-shadow: -15px 15px 40px rgba(74, 60, 49, 0.15);">
                <div class="absolute inset-0 bg-[#C69C55] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img [ngSrc]="images.get('hero')" fill priority class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                     alt="Warm interior apartment in Stockholm" 
                     style="filter: sepia(0.15) saturate(1.1);">
              </div>
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
          <!-- Card 2: Sälja Dödsbo (Updated Title) -->
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
               Professionell sanering och luktborttagning vid behov.
            </p>
            <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Läs mer <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
          </a>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-background-light dark:bg-background-dark relative" id="process">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4A3C31_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-primary font-bold tracking-widest uppercase text-xs mb-3 border-b border-primary/20 inline-block pb-1">Processen</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-text-main dark:text-white mb-4">Så går det till</h3>
          <p class="text-text-sub dark:text-gray-300 text-lg font-light">Från första kontakten till avslutad städning – vi gör det enkelt för dig.</p>
        </div>
        
        <div class="relative">
          <div class="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-[#D8D0C5] dark:bg-gray-700 z-0"></div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <!-- Step 1 -->
            <div class="text-center group">
              <div class="size-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-lg ring-4 ring-white dark:ring-background-dark group-hover:scale-110 transition-transform relative z-10">1</div>
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Hembesök</h4>
              <p class="text-text-sub dark:text-gray-400 text-sm px-4">Vi kommer ut på ett kostnadsfritt besök för att titta på omfattningen.</p>
            </div>
            <!-- Step 2 -->
            <div class="text-center group">
              <div class="size-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">2</div>
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Offert</h4>
              <p class="text-text-sub dark:text-gray-400 text-sm px-4">Du får en tydlig offert med fast pris där eventuellt uppköp är avdraget.</p>
            </div>
            <!-- Step 3 -->
            <div class="text-center group">
              <div class="size-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">3</div>
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Utförande</h4>
              <p class="text-text-sub dark:text-gray-400 text-sm px-4">Vi tömmer, sorterar och städar enligt överenskommelse på utsatt tid.</p>
            </div>
            <!-- Step 4 -->
            <div class="text-center group">
              <div class="size-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">4</div>
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Klart!</h4>
              <p class="text-text-sub dark:text-gray-400 text-sm px-4">Nycklarna återlämnas och ni får ett intyg på städgarantin.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Info Section -->
    <section class="py-20 bg-white dark:bg-background-dark border-y border-[#F0EBE5] dark:border-gray-800" id="faq">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-1/2">
            <div class="sticky top-24">
              <h2 class="text-primary font-bold tracking-widest uppercase text-xs mb-3">Viktig information</h2>
              <h3 class="text-3xl font-serif text-text-main dark:text-white mb-6">Att tänka på vid dödsbohantering</h3>
              <p class="text-text-sub dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
                Att hantera ett dödsbo innebär många praktiska och juridiska frågor. Vi på Dödsbopartner AB hjälper dig att navigera genom processen, men här är några begrepp som är bra att känna till.
              </p>
              <div class="relative rounded-lg overflow-hidden shadow-lg aspect-video mb-6 border border-[#F0EBE5] dark:border-gray-800">
                <img [ngSrc]="images.get('documents')" fill class="object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Documents on a table">
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2 flex flex-col gap-6">
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">gavel</span>
                Vad innebär en bouppteckning?
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                Bouppteckningen är en legitimationshandling för dödsboet. Den visar vem som har rätt att företräda boet och vilka tillgångar och skulder som finns. Det är ett viktigt dokument som krävs för att avsluta bankkonton och sälja fastigheter. Vi kan guida er till rätt partners om ni behöver juridisk hjälp.
              </p>
            </div>
            
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">assignment_ind</span>
                Behövs en fullmakt?
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                Om ni är flera dödsbodelägare men bara en ska sköta kontakten med oss, behövs ofta en fullmakt. Detta säkerställer att tömning och försäljning sker korrekt enligt alla delägares vilja. Vi tillhandahåller enkla mallar för detta vid behov.
              </p>
            </div>
            
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">recycling</span>
                Miljö & Hållbarhet
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                Vi strävar efter att så lite som möjligt ska hamna på tippen. Kläder, möbler och husgeråd som inte köps upp skänks i första hand till våra samarbetspartners inom välgörenhet. Det som återstår källsorteras noggrant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Charity Section -->
    <section class="bg-primary-light/30 dark:bg-surface-dark/50 py-16 border-b border-[#F0EBE5] dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="flex-1">
            <h2 class="text-2xl md:text-3xl font-serif text-text-main dark:text-white mb-4">Välgörenhet & Återvinning</h2>
            <p class="text-text-sub dark:text-gray-300 text-lg mb-8 font-light max-w-xl">
              Dina saker kan göra nytta för andra. Vi samarbetar med flera hjälporganisationer i Stockholm för att säkerställa att funktionsdugliga föremål får ett nytt liv.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="bg-white dark:bg-background-dark px-5 py-3 rounded-full text-sm font-semibold text-text-main dark:text-white shadow-sm border border-[#EBE5DE] dark:border-gray-700 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-sm">volunteer_activism</span> Stadsmissionen
              </div>
              <div class="bg-white dark:bg-background-dark px-5 py-3 rounded-full text-sm font-semibold text-text-main dark:text-white shadow-sm border border-[#EBE5DE] dark:border-gray-700 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-sm">volunteer_activism</span> Röda Korset
              </div>
              <div class="bg-white dark:bg-background-dark px-5 py-3 rounded-full text-sm font-semibold text-text-main dark:text-white shadow-sm border border-[#EBE5DE] dark:border-gray-700 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-sm">eco</span> 100% Återvinning
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 flex justify-center">
            <span class="material-symbols-outlined text-[140px] text-primary/30">spa</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white dark:bg-background-dark scroll-mt-24" id="kontakt">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-[#F0EBE5] dark:border-gray-800 flex flex-col md:flex-row">
          
          <!-- Left: Info Panel with Wood Pattern Style -->
          <div class="bg-text-main dark:bg-black text-[#F2E8D5] p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             <!-- Pattern Overlay imitation -->
            <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat z-0" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+');"></div>
            
            <div class="relative z-10">
              <div>
                <h3 class="text-2xl font-serif font-bold mb-6 text-white">Kontakta oss</h3>
                <p class="text-[#D8D0C5] mb-8 font-light">Vi finns här för att svara på dina frågor och boka in ett kostnadsfritt hembesök.</p>
                <div class="space-y-8">
                  <div class="flex items-start gap-4">
                    <span class="material-symbols-outlined text-primary mt-1">call</span>
                    <div>
                      <p class="text-sm text-[#A89F95] font-medium uppercase tracking-wider mb-1">Telefon</p>
                      <a href="tel:081234567" class="text-lg font-medium text-white hover:text-primary transition-colors">08-123 45 67</a>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <span class="material-symbols-outlined text-primary mt-1">mail</span>
                    <div>
                      <p class="text-sm text-[#A89F95] font-medium uppercase tracking-wider mb-1">E-post</p>
                      <a href="mailto:info@dodsbopartner.se" class="text-lg font-medium text-white hover:text-primary transition-colors">info&#64;dodsbopartner.se</a>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <span class="material-symbols-outlined text-primary mt-1">location_on</span>
                    <div>
                      <p class="text-sm text-[#A89F95] font-medium uppercase tracking-wider mb-1">Adress</p>
                      <p class="text-base font-light text-white">Drottninggatan 12<br/>111 51 Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="p-6 md:p-10 md:w-3/5 bg-white dark:bg-background-dark">
            <app-contact-form />
          </div>
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
      title: 'Dödsbo Stockholm | Tömning, Städning & Värdering',
      description: 'Dödsbopartner AB erbjuder helhetslösningar för dödsbo i Stockholm & Uppsala. Vi köper, tömmer och städar. Boka kostnadsfri värdering idag.',
      slug: ''
    });
  }
}