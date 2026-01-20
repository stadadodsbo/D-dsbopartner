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
      <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 pb-12 lg:py-20">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-8">
          
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left space-y-8 px-4 sm:px-0 lg:pr-12 relative z-10 mt-8 lg:mt-0">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif text-text-main dark:text-white leading-tight tracking-tight">
              Tömning, Städning & Uppköp av Dödsbo Stockholm
            </h1>
            <p class="text-lg text-text-sub dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Vi skapar trygghet i en svår stund. Helhetslösning för tömning, flyttstädning och värdering i Stockholm med fokus på omtanke och respekt. Vi är din trygga uppköpare av dödsbo.
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
          <div class="w-full lg:flex-1 relative">
            <div class="hidden lg:block absolute inset-0 bg-primary/20 blur-2xl transform translate-x-4 translate-y-4 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-50"></div>
            
            <div class="relative w-full aspect-[16/10] sm:aspect-video lg:aspect-[4/3] overflow-hidden
                        lg:rounded-[54%_46%_25%_75%_/_55%_44%_56%_45%] lg:shadow-2xl">
              
              <div class="hidden lg:block absolute inset-0 bg-[#C69C55] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
              
              <img [ngSrc]="images.get('hero')" fill priority 
                   class="object-cover transition-transform duration-1000 hover:scale-105" 
                   alt="Vardagsrum i Stockholm redo för tömning och värdering av dödsbo" 
                   style="filter: sepia(0.15) saturate(1.1);">
              
              <div class="absolute bottom-[-1px] left-0 w-full lg:hidden z-20 leading-[0]">
                 <svg viewBox="0 0 100 12" preserveAspectRatio="none" class="w-full h-4 sm:h-6 block">
                    <defs>
                      <filter id="shadow-blur" x="-50%" y="-50%" width="200%" height="200%">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                      </filter>
                      <clipPath id="hill-clip">
                         <path d="M0,12 L0,12 L0,10 Q50,0 100,10 L100,12 Z" />
                      </clipPath>
                    </defs>
                    <path d="M0,12 L0,12 L0,10 Q50,0 100,10 L100,12 Z" class="fill-background-light dark:fill-background-dark" />
                    <g clip-path="url(#hill-clip)">
                       <path d="M-5,10 Q50,0 105,10" 
                             fill="none" 
                             stroke="black" 
                             stroke-width="2" 
                             opacity="0.15" 
                             filter="url(#shadow-blur)" />
                    </g>
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
            <h4 class="text-xl font-bold text-text-main dark:text-white mb-3">Uppköpare Dödsbo</h4>
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
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-background-light dark:bg-background-dark relative" id="process">
        <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4A3C31_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-primary font-bold tracking-widest uppercase text-xs mb-3 border-b border-primary/20 inline-block pb-1">Processen</h2>
                <h3 class="text-3xl md:text-4xl font-serif text-text-main dark:text-white mb-4">Så går det till</h3>
                <p class="text-text-sub dark:text-gray-300 text-lg font-light">Från första kontakten till avslutad städning – vi gör det enkelt för dig.</p>
            </div>
            <div class="relative">
                <div class="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-[#D8D0C5] dark:bg-gray-700 z-0"></div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    <div class="text-center group">
                        <div class="w-20 h-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-lg ring-4 ring-white dark:ring-background-dark group-hover:scale-110 transition-transform relative z-10">1</div>
                        <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Hembesök</h4>
                        <p class="text-text-sub dark:text-gray-400 text-sm px-4">Vi kommer ut på ett kostnadsfritt besök för att titta på omfattningen och värdera.</p>
                    </div>
                    <div class="text-center group">
                        <div class="w-20 h-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">2</div>
                        <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Offert</h4>
                        <p class="text-text-sub dark:text-gray-400 text-sm px-4">Du får en tydlig offert med fast pris där eventuellt uppköp av dödsboet är avdraget.</p>
                    </div>
                    <div class="text-center group">
                        <div class="w-20 h-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">3</div>
                        <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Utförande</h4>
                        <p class="text-text-sub dark:text-gray-400 text-sm px-4">Vi tömmer, sorterar och städar enligt överenskommelse på utsatt tid.</p>
                    </div>
                    <div class="text-center group">
                        <div class="w-20 h-20 mx-auto bg-white dark:bg-surface-dark border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-md ring-4 ring-background-light dark:ring-background-dark group-hover:bg-primary group-hover:text-white transition-colors relative z-10">4</div>
                        <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">Klart!</h4>
                        <p class="text-text-sub dark:text-gray-400 text-sm px-4">Nycklarna återlämnas och ni får ett intyg på städgarantin.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Important Info Section -->
    <section class="bg-white dark:bg-background-dark py-20 border-y border-[#F0EBE5] dark:border-gray-800" id="faq">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-1/2">
            <div class="sticky top-24">
              <h2 class="text-primary font-bold tracking-widest uppercase text-xs mb-3">Viktig information</h2>
              <h3 class="text-3xl font-serif text-text-main dark:text-white mb-6">Att tänka på vid dödsbohantering</h3>
              <p class="text-text-sub dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
                  Att hantera ett dödsbo innebär många praktiska och juridiska frågor. Vi på Dödsbopartner AB hjälper dig att navigera genom processen, men här är några begrepp som är bra att känna till.
              </p>
              <div class="relative rounded-lg overflow-hidden shadow-lg aspect-video mb-6 border border-[#F0EBE5] dark:border-gray-800">
                <img [ngSrc]="images.get('documents')" fill class="object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Juridiska dokument för bouppteckning och fullmakter vid dödsfall">
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 flex flex-col gap-6">
            <!-- Card 1 -->
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">gavel</span>
                Vad innebär en bouppteckning?
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                  Bouppteckningen är en legitimationshandling för dödsboet. Den visar vem som har rätt att företräda boet och vilka tillgångar och skulder som finns. Det är ett viktigt dokument som krävs för att avsluta bankkonton och sälja fastigheter.
              </p>
            </div>
            <!-- Card 2 -->
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">assignment_ind</span>
                Behövs en fullmakt?
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                  Om ni är flera dödsbodelägare men bara en ska sköta kontakten med oss, behövs ofta en fullmakt. Detta säkerställer att tömning och försäljning sker korrekt enligt alla delägares vilja.
              </p>
            </div>
            <!-- Card 3 -->
            <div class="bg-background-light dark:bg-surface-dark rounded-xl p-8 border border-[#F0EBE5] dark:border-gray-800 shadow-sm hover:border-primary/20 transition-colors">
              <h4 class="text-lg font-bold text-text-main dark:text-white mb-3 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">recycling</span>
                Miljö & Hållbarhet
              </h4>
              <p class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">
                  Vi strävar efter att så lite som möjligt ska hamna på tippen. Kläder, möbler och husgeråd som inte köps upp skänks i första hand till våra samarbetspartners inom välgörenhet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white dark:bg-background-dark" id="kontakt">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-[#F0EBE5] dark:border-gray-800 flex flex-col md:flex-row">
                <div class="bg-text-main dark:bg-black text-[#F2E8D5] p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                    <div class="relative z-10">
                        <div>
                            <h3 class="text-2xl font-serif font-bold mb-6 text-white">Kontakta oss</h3>
                            <p class="text-[#D8D0C5] mb-8 font-light">Vi finns här för att svara på dina frågor och boka in ett kostnadsfritt hembesök.</p>
                            <div class="space-y-8">
                                <div class="flex items-start gap-4">
                                    <span class="material-symbols-outlined text-primary mt-1">call</span>
                                    <div>
                                        <p class="text-sm text-[#A89F95] font-medium uppercase tracking-wider mb-1">Telefon</p>
                                        <p class="text-lg font-medium text-white">08-123 45 67</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <span class="material-symbols-outlined text-primary mt-1">mail</span>
                                    <div>
                                        <p class="text-sm text-[#A89F95] font-medium uppercase tracking-wider mb-1">E-post</p>
                                        <p class="text-lg font-medium text-white">info&#64;dodsbopartner.se</p>
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
                <div class="p-10 md:w-3/5 bg-white dark:bg-surface-dark">
                    <h3 class="text-2xl font-serif font-bold text-text-main dark:text-white mb-6">Skicka en förfrågan</h3>
                    <app-contact-form [embedded]="true" />
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
      title: 'Dödsbopartner AB | Tömning, Städning & Uppköp av Dödsbo Stockholm',
      description: 'Vi erbjuder helhetslösning för dödsbon. Vi är uppköpare av dödsbo och utför tömning samt flyttstädning med garanti i Stockholm & Uppsala. Fri värdering.',
      slug: ''
    });

    // Add LocalBusiness Schema
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dödsbopartner AB",
      "image": this.images.get('hero'),
      "telephone": "08-123 45 67",
      "email": "info@dodsbopartner.se",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Drottninggatan 12",
        "addressLocality": "Stockholm",
        "postalCode": "111 51",
        "addressCountry": "SE"
      },
      "url": "https://www.dodsbopartner.se",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    });
  }
}