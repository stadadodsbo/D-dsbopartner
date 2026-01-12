import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="flex-grow">
      
      <!-- === SECTION 1: FAQ HERO & ACCORDIONS === -->
      <section class="bg-gray-50 dark:bg-surface-dark py-12 lg:py-20 border-b border-gray-100 dark:border-gray-800 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div class="flex items-center gap-2 text-sm">
              <a class="text-gray-500 hover:text-primary transition-colors font-medium" routerLink="/">Hem</a>
              <span class="text-gray-400 material-symbols-outlined text-base">chevron_right</span>
              <span class="text-text-main dark:text-white font-medium">Vanliga frågor</span>
            </div>
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
                <div class="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" role="img" aria-label="Calm living room" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGxyQclR5r3XstKWO1yaIJvqWcS7qwRrGzS35CEFqTUf4pafO7ivOYa1X-SlnMjTyIaL3QqYu6Gya8uw7OuI34ejM5o5SGaPwDnQTlPeTECrSZ7qVpg_ufHazkiHM9sU3yaY06FGR0IJknM5XZvKW7s2MUCphZChFA3fyKGawEUC2yxXntwXP3MmMD2y63kRbJ_pJWwtypo6WgUxqwg45N4x-FbRWY8_SnQsf7HIdBjR7lC7kMEvwbiv0geZrguoUqd0b--wzD0TYc');">
                </div>
                <div class="absolute bottom-6 left-6 z-20">
                  <span class="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Mest läst just nu</span>
                  <h3 class="text-white text-xl font-bold">Checklista vid dödsfall – Steg för steg</h3>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="lg:col-span-8 flex flex-col gap-10">
                    <!-- Filters -->
                    <div class="flex flex-wrap gap-3 pb-4 border-b border-border-light dark:border-gray-800">
                        <button class="flex h-9 items-center justify-center px-5 rounded-full bg-text-main text-white text-sm font-medium transition-transform active:scale-95">Alla</button>
                        <button class="flex h-9 items-center justify-center px-5 rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary text-sm font-medium transition-colors active:scale-95">Juridik</button>
                        <button class="flex h-9 items-center justify-center px-5 rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary text-sm font-medium transition-colors active:scale-95">Praktiskt</button>
                        <button class="flex h-9 items-center justify-center px-5 rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-secondary dark:text-gray-300 hover:border-primary hover:text-primary text-sm font-medium transition-colors active:scale-95">Ekonomi</button>
                    </div>

                    <!-- Featured Guide -->
                    <section>
                         <div class="flex items-center gap-2 mb-6">
                          <span class="material-symbols-outlined text-primary">star</span>
                          <h2 class="text-2xl font-bold text-text-main dark:text-white">Utvalda Guider</h2>
                        </div>
                        <div class="bg-gray-50 dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            <div class="grid md:grid-cols-2 gap-0">
                                <div class="bg-cover bg-center min-h-[240px] w-full" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4i2nscgYfOiS_BLoFn0DJbBS4aOPFqIxUj8GPcUxz7a74ricXYAzSQt149pEOcg4FT4aXYd1O4OHezn4jM2tSPiAIJ1FGIxxP87AicALxh272eJyhmEEZ0o6v_J-YZ6X7rZxbjrNAKiCmqp1mbgkEZTAfJb-xz0P5CCs5hqPWoUVcd8JIz50lQkwo3ffZVeF-FCq3BFIkLHVP0xmmT_Rc36tuW2bG0yJrSPpBROH59KbBGoeIAdcZmGr3EFPVZvQX0AC0lRAuCnEJ');"></div>
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
                        </div>
                        <div class="grid sm:grid-cols-2 gap-8">
                            <!-- Article 1 -->
                            <article class="flex flex-col gap-4 group">
                                <div class="relative overflow-hidden rounded-xl aspect-[4/3] w-full">
                                    <div class="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvIRCX4gX7tPOiDQv9rBrhnIuWoav4viCqjBtNsZIbtogGJY-QA89R5gcF0lCS2jTGveb4j5GsL7TEQqXX4FyzQ-yIIkEOSzmVtSUlYfyxty_P0PwmU9eWlBLm4p76SlX_vRLSPjc0WHpxmI_sBFf8QZ8pqnP9h4P8AoiS-Cc01ycrzzTuwIB_fFLcYRWhHi48Pld_VKGM_7EWptQYKSReNxAGu9EOEaYUfnMFlhK0cYJE-oSz3uiU5MYUdd4QmrbalhPqY_bdJHRW');"></div>
                                    <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary border border-gray-100 shadow-sm">EKONOMI</div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors mb-2">
                                        <a href="#">Allt om bouppteckning</a>
                                    </h3>
                                    <p class="text-text-secondary dark:text-gray-400 text-sm line-clamp-2">Regler, tidslinje och kostnader du behöver ha koll på.</p>
                                </div>
                            </article>
                            <!-- Article 2 -->
                             <article class="flex flex-col gap-4 group">
                                <div class="relative overflow-hidden rounded-xl aspect-[4/3] w-full">
                                    <div class="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA--YJBoleo0hxh_Po7FmsY0fwJ6ORSInV6R6MBJPG7YUv2MvfbJRHLgWVyKYfHLbK-EDvZiKQ-0DhcjGCUDe5nlL4lv9Qog2VF2PavaAGoUr8qbdFXcA9c_WlAbjA4L0obGlacQV8pwAU_xae1ByTnnWMATTTRBItfzV3Nl1fpc65MdtM0dBQ6PAXnaQBGyxQZF847oaN3hQL7FuRPr65lcbULj0i-JP1GTeX8FwGNZxJ99_It0vMwE59KPF4hxDMZ2fh5sUmsW3Nb');"></div>
                                    <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary border border-gray-100 shadow-sm">PRAKTISKT</div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors mb-2">
                                        <a href="#">Tömma dödsbo själv?</a>
                                    </h3>
                                    <p class="text-text-secondary dark:text-gray-400 text-sm line-clamp-2">Vi jämför tidsåtgång och kostnader för att göra det själv vs anlita firma.</p>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>

                <!-- Guides Sidebar -->
                <aside class="lg:col-span-4 space-y-8">
                     <div class="bg-gray-50 dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 class="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                          <span class="material-symbols-outlined text-primary">handshake</span>
                          Våra Tjänster
                        </h3>
                        <nav class="flex flex-col gap-2">
                           <a class="group flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200" routerLink="/tjanster/tomning">
                             <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">inventory_2</span>
                                <span class="text-text-main dark:text-white font-medium text-sm">Tömning av dödsbo</span>
                             </div>
                             <span class="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                           </a>
                           <a class="group flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200" routerLink="/tjanster/flyttstadning">
                             <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">cleaning_services</span>
                                <span class="text-text-main dark:text-white font-medium text-sm">Dödsbostädning</span>
                             </div>
                             <span class="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                           </a>
                           <a class="group flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200" routerLink="/tjanster/salja-dodsbo">
                             <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">currency_exchange</span>
                                <span class="text-text-main dark:text-white font-medium text-sm">Värdering & Uppköp</span>
                             </div>
                             <span class="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                           </a>
                           <a class="group flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200" routerLink="/tjanster/sanering">
                             <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">recycling</span>
                                <span class="text-text-main dark:text-white font-medium text-sm">Återvinning</span>
                             </div>
                             <span class="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                           </a>
                        </nav>
                     </div>

                     <div class="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                        <h4 class="font-bold text-text-main dark:text-white mb-2">Prenumerera på våra tips</h4>
                        <p class="text-text-secondary dark:text-gray-400 text-sm mb-4">Få juridiska råd och checklistor direkt i mejlkorgen.</p>
                        <div class="flex gap-2">
                            <input class="flex-1 rounded-lg border-gray-200 bg-white px-3 py-2 text-sm" placeholder="Din e-post" type="email"/>
                            <button class="bg-primary text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-primary-dark">OK</button>
                        </div>
                     </div>
                </aside>
            </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    details[open] summary .expand-icon {
        transform: rotate(180deg);
    }
    details summary::-webkit-details-marker {
        display: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Vanliga Frågor & Svar | Dödsbopartner AB',
      description: 'Här hittar du svar på vanliga frågor om dödsbo, tömning, värdering och flyttstädning. Vi hjälper dig med hela processen.',
      slug: 'vanliga-fragor'
    });
  }
}