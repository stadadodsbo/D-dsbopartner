import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="w-full">
      
      <!-- === SECTION 1: FAQ HERO & ACCORDIONS === -->
      <section class="bg-gray-50 dark:bg-surface-dark py-12 lg:py-20 border-b border-gray-100 dark:border-gray-800 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <nav aria-label="Breadcrumb">
              <ol class="flex items-center gap-2 text-sm">
                <li><a class="text-gray-500 hover:text-primary transition-colors font-medium" routerLink="/">Hem</a></li>
                <li><span class="text-gray-400 material-symbols-outlined text-base select-none">chevron_right</span></li>
                <li><span class="text-text-main dark:text-white font-medium" aria-current="page">Vanliga frågor</span></li>
              </ol>
            </nav>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
             Support &amp; Svar
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white mb-6 tracking-tight">
            Vanliga frågor
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Här har vi samlat svar på de vanligaste frågorna vi får gällande hantering av dödsbon, värdering och praktiska detaljer.
          </p>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <!-- FAQ List -->
            <div class="lg:col-span-2 space-y-4">
              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Vad är en Bouppteckning?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  En bouppteckning är en skriftlig sammanställning över samtliga tillgångar och skulder som fanns i ett dödsbo vid tidpunkten för dödsfallet. Den fungerar som dödsboets legitimationshandling och krävs för att kunna avsluta konton eller sälja fastigheter. Vi kan guida er vidare till juridisk expertis om ni behöver hjälp med själva upprättandet.
                </div>
              </details>

              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Hur fungerar Fullmakt för dödsbo?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  För att en person ska kunna företräda dödsboet och skriva under avtal krävs oftast en fullmakt från samtliga dödsbodelägare. Detta är särskilt viktigt vid försäljning av bohag eller när vi ska hämta ut nycklar. Vi kan tillhandahålla mallar för de fullmakter som behövs för vår hantering.
                </div>
              </details>

              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Hur går en Värdering av dödsbo till?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Vid ett hembesök går vi igenom allt bohag. Vi tittar på möbler, konst, antikviteter, elektronik och annat av värde. Vi baserar vår värdering på marknadspriser och vad som är säljbart. Värdet dras sedan av från kostnaden för tömning och städning, vilket ofta resulterar i en lägre totalkostnad för er.
                </div>
              </details>

              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Vad innebär er Städningsgaranti?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Vår städningsgaranti innebär att vi garanterar att flyttstädningen godkänns av nästa hyresgäst eller köpare. Om det mot förmodan skulle finnas anmärkningar åtgärdar vi dessa kostnadsfritt inom 24-48 timmar. Vi följer Mäklarsamfundets strikta riktlinjer för flyttstädning.
                </div>
              </details>

              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Kan jag använda RUT-avdrag?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ja, för de tjänster som innefattar flytt och städning kan dödsboet i vissa fall nyttja RUT-avdrag, förutsatt att skattereduktionen inte redan nyttjats av den avlidne under året. Vi hjälper er att reda ut vad som gäller i just ert fall och sköter administrationen mot Skatteverket.
                </div>
              </details>

              <details class="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Hur lång tid tar en tömning?</h3>
                  <span class="expand-icon material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  En normalstor lägenhet tar oftast 1-2 dagar att tömma och sortera. En större villa kan ta 2-4 dagar. Vi anpassar vårt team efter uppdragets storlek för att säkerställa en snabb och effektiv process.
                </div>
              </details>
            </div>

            <!-- FAQ Sidebar -->
            <div class="space-y-6">
              <div class="bg-primary p-8 rounded-2xl text-white shadow-xl sticky top-24">
                <h4 class="text-2xl font-bold mb-4 leading-tight">Hittar du inte svaret du letar efter?</h4>
                <p class="text-white/90 mb-8 leading-relaxed">
                  Ingen fråga är för liten eller för stor. Kontakta oss direkt så hjälper vi dig personligen.
                </p>
                <div class="space-y-4">
                  <a routerLink="/tjanster/salja-dodsbo" class="block w-full bg-white text-primary hover:bg-gray-50 text-center font-bold py-4 rounded-lg transition-colors shadow-sm">
                    Boka hembesök
                  </a>
                  <a href="tel:081234567" class="flex items-center justify-center gap-2 w-full border-2 border-white/30 hover:bg-white/10 text-center font-bold py-3.5 rounded-lg transition-colors">
                    <span class="material-symbols-outlined text-[20px]">call</span>
                    08-123 45 67
                  </a>
                </div>
                <div class="mt-8 pt-8 border-t border-white/20">
                  <p class="text-sm text-white/80 italic text-center">
                    "Vi erbjuder alltid kostnadsfri rådgivning och värdering på plats."
                  </p>
                </div>
              </div>
              
              <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                <div class="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h5 class="font-bold text-text-main dark:text-white">Certifierade</h5>
                  <p class="text-xs text-gray-500">Trygg hantering sedan 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- === SECTION 2: KNOWLEDGE BANK / GUIDES === -->
      <section class="bg-white dark:bg-background-dark py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Knowledge Bank Header -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div class="flex flex-col gap-6">
                <h2 class="text-text-main dark:text-white text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Guider &amp; Kunskapsbank
                </h2>
                <h3 class="text-text-secondary dark:text-gray-300 text-lg font-normal leading-relaxed max-w-xl">
                  Din kompletta resurs för att hantera dödsbon i Stockholm. Här hittar du juridiska guider och praktiska tips.
                </h3>
                <div class="w-full max-w-lg mt-2">
                  <label class="relative flex w-full items-stretch rounded-lg h-14 shadow-sm group focus-within:ring-2 ring-primary/20">
                    <div class="absolute left-0 top-0 h-full w-14 flex items-center justify-center text-text-secondary">
                      <span class="material-symbols-outlined">search</span>
                    </div>
                    <input class="w-full h-full pl-12 pr-28 rounded-lg border border-border-medium dark:border-gray-700 bg-white dark:bg-surface-dark text-text-main dark:text-white placeholder:text-text-secondary/70 focus:outline-none focus:border-primary text-base transition-colors" placeholder="Sök efter guider..."/>
                    <div class="absolute right-2 top-2 bottom-2">
                      <button class="h-full px-5 rounded-md bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        Sök
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div class="hidden lg:block relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg group">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img [ngSrc]="images.get('guideHero')" fill class="object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Calm living room">
                <div class="absolute bottom-6 left-6 z-20">
                  <span class="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Mest läst just nu</span>
                  <h3 class="text-white text-xl font-bold">Checklista vid dödsfall – Steg för steg</h3>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="lg:col-span-8 flex flex-col gap-10">
                    <!-- Featured Guide -->
                    <section>
                         <div class="flex items-center gap-2 mb-6">
                          <span class="material-symbols-outlined text-primary">star</span>
                          <h2 class="text-2xl font-bold text-text-main dark:text-white">Utvalda Guider</h2>
                        </div>
                        <div class="bg-gray-50 dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            <div class="grid md:grid-cols-2 gap-0">
                                <div class="relative min-h-[240px] w-full">
                                   <img [ngSrc]="images.get('guideFullmakt')" fill class="object-cover" alt="Writing a contract">
                                </div>
                                <div class="p-8 flex flex-col justify-center gap-4">
                                     <div class="flex gap-2">
                                        <span class="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">JURIDIK</span>
                                        <span class="text-xs font-medium text-text-secondary flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> 5 min</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Guide: Fullmakt för dödsbo</h3>
                                    <p class="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">
                                        Hur fungerar fullmakter när det finns flera dödsbodelägare? Vi reder ut begreppen och ger dig gratis mallar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Latest Articles -->
                    <section>
                         <div class="flex items-center justify-between mb-6">
                          <h2 class="text-2xl font-bold text-text-main dark:text-white">Senaste artiklarna</h2>
                          <a routerLink="/" class="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1">Visa alla <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Article 1 -->
                            <a routerLink="/tjanster/tomning" class="group flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                                <div class="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                     <img [ngSrc]="images.get('articleEmptying')" fill class="object-cover group-hover:scale-110 transition-transform duration-500" alt="Moving boxes">
                                </div>
                                <div>
                                     <span class="text-[10px] font-bold tracking-wider text-primary uppercase mb-1 block">Praktiskt</span>
                                     <h4 class="font-bold text-text-main dark:text-white mb-1 group-hover:text-primary transition-colors">Tömning av dödsbo – checklista</h4>
                                     <p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2">Vad ska man tänka på innan tömningen påbörjas?</p>
                                </div>
                            </a>

                             <!-- Article 2 -->
                            <a routerLink="/tjanster/salja-dodsbo" class="group flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                                <div class="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                     <img [ngSrc]="images.get('articleBouppteckning')" fill class="object-cover group-hover:scale-110 transition-transform duration-500" alt="Legal documents">
                                </div>
                                <div>
                                     <span class="text-[10px] font-bold tracking-wider text-primary uppercase mb-1 block">Juridik</span>
                                     <h4 class="font-bold text-text-main dark:text-white mb-1 group-hover:text-primary transition-colors">Bouppteckning för nybörjare</h4>
                                     <p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2">En enkel guide genom byråkratin vid ett dödsfall.</p>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>

                <!-- Sidebar (Tags/Newsletter) -->
                <div class="lg:col-span-4 space-y-8">
                    <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                        <h4 class="font-bold text-text-main dark:text-white mb-4">Populära ämnen</h4>
                        <div class="flex flex-wrap gap-2">
                             <a routerLink="/vanliga-fragor" class="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">Bouppteckning</a>
                             <a routerLink="/vanliga-fragor" class="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">Skatteregler</a>
                             <a routerLink="/tjanster/flyttstadning" class="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">RUT-avdrag</a>
                             <a routerLink="/tjanster/salja-dodsbo" class="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">Värdering</a>
                        </div>
                    </div>

                    <div class="bg-text-main dark:bg-black p-8 rounded-xl text-white text-center">
                        <span class="material-symbols-outlined text-4xl text-primary mb-3">mail</span>
                        <h4 class="font-bold text-lg mb-2">Prenumerera på nyhetsbrevet</h4>
                        <p class="text-sm text-gray-300 mb-6">Få tips och råd om dödsbohantering direkt i inkorgen.</p>
                        <input type="email" placeholder="Din e-postadress" class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary mb-3" />
                        <button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors text-sm">Gå med</button>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Vanliga frågor & svar | Dödsbopartner Stockholm AB',
      description: 'Här hittar du svar på vanliga frågor om tömning, värdering och städning av dödsbo. Läs våra guider och checklistor.',
      slug: 'vanliga-fragor'
    });
  }
}