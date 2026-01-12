import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-valuation',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <!-- Main Content Column -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          
          <!-- Hero Section -->
          <section>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">verified</span>
              Stockholm & Uppsala
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Vi köper och värderar dödsbon i Stockholm
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Sälj hela eller delar av dödsboet. Vi erbjuder en rättvis värdering där vi kvittar värdet av föremål mot kostnaden för tömning och städning. En trygg affär med transparent prissättning.
            </p>
            <div class="flex flex-wrap gap-4 mt-8">
              <div class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span class="material-symbols-outlined text-primary">check_circle</span> Fri värdering
              </div>
              <div class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span class="material-symbols-outlined text-primary">check_circle</span> Helhetslösning
              </div>
              <div class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span class="material-symbols-outlined text-primary">check_circle</span> Ansvarsförsäkrad
              </div>
            </div>
          </section>

          <!-- Trust Logos -->
          <section class="border-y border-gray-100 dark:border-gray-800 py-8">
            <div class="flex flex-wrap items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <div class="h-8 flex items-center font-bold text-gray-400 dark:text-gray-500 text-xl">TRUSTPILOT</div>
              <div class="h-8 flex items-center font-bold text-gray-400 dark:text-gray-500 text-xl">RECO</div>
              <div class="h-8 flex items-center font-bold text-gray-400 dark:text-gray-500 text-xl">IF FÖRSÄKRING</div>
            </div>
          </section>

          <!-- How it works / Process -->
          <section id="process" class="scroll-mt-24">
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Hur fungerar värderingen?</h2>
            <div class="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
              <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div class="flex-1">
                  <div class="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 mx-auto md:mx-0">
                    <span class="material-symbols-outlined">inventory_2</span>
                  </div>
                  <h3 class="font-bold text-lg mb-1 text-text-main dark:text-white">Godsets värde</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Vi värderar säljbara föremål som möbler, konst och antikviteter.</p>
                </div>
                <div class="hidden md:block text-gray-300 dark:text-gray-600">
                  <span class="material-symbols-outlined text-3xl">remove</span>
                </div>
                <div class="flex-1">
                  <div class="size-12 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3 mx-auto md:mx-0">
                    <span class="material-symbols-outlined">cleaning_services</span>
                  </div>
                  <h3 class="font-bold text-lg mb-1 text-text-main dark:text-white">Arbetskostnad</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Kostnaden för tömning, transport och eventuell flyttstädning.</p>
                </div>
                <div class="hidden md:block text-gray-300 dark:text-gray-600">
                  <span class="material-symbols-outlined text-3xl">equal</span>
                </div>
                <div class="flex-1 bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div class="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span class="material-symbols-outlined text-primary">payments</span>
                    <h3 class="font-bold text-lg text-primary">Resultat</h3>
                  </div>
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Antingen betalar vi er mellanskillnaden, eller så får ni en faktura på resterande belopp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- What we buy / Gallery -->
          <section id="tjanster" class="scroll-mt-24">
            <div class="flex items-baseline justify-between mb-6">
              <h2 class="text-2xl font-bold text-text-main dark:text-white">Vad vi köper</h2>
              <span class="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline-block">Vi söker alltid efter kvalitet</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div class="group relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                <img alt="Antique wooden mid-century modern chair" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJxtBlCeyTOXJt0YrvWOot4vkFYLaOWpbnxwB_kjo5fx1cF7zV0ZNlJavS7_hBE-geStUHi2-2y0V4jkdibeHaZhQKyd6K7tlMKJfkyQBAu4sFPvmmfHUoQ5TxFObIS6Mg2p8xeqqUrtKnWTcvgeFZK7Vm0GDw77R9fL1Ljy04DSUXLOctwFIvkPNj-1EPUPpZcl4Q16Oducq6TI7fmm3Fl0FCy45Yoll1pVZm5eXoULT9Z4Cs1yooA73gS2aEJMHnd7SzSMQ6ghm"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <p class="text-white font-bold text-lg">Skandinavisk Design</p>
                  <p class="text-white/80 text-sm">Möbler, lampor & glas</p>
                </div>
              </div>
              <div class="group relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                <img alt="Stack of vintage oil paintings" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9z4JKxeWBIyu65wShgr_vrgiitSwuaWTsDpgu_o88pxfVcocvSjRor30cSxT6r86a3w2VfKYok6SvK-_RvjFg3Oy7qhdd-bkeDpfuf5r_8Vcl2m34XguR92424SaqkiU41J08TovVpjpHXl0U9HS7llPI5w6OCoCkVlgoHJOpkealkZKcZkRvrUU2pcVTKwaE1A77ivItkjG9M0cY2IWBbBSEhaVW4Hjb-hyoW3uDRbz8axAi2LdSLULMtxBbsdG0kFOnRNH2LymZ"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <p class="text-white font-bold text-lg">Konst & Tavlor</p>
                  <p class="text-white/80 text-sm">Oljemålningar & litografier</p>
                </div>
              </div>
              <div class="group relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                <img alt="Silver cutlery and antique ceramic plates" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPcrXLkPduAY0-ylCQDs4hqu9Sn0NqzSlYCMOLZpwOey21U576E0-1hL71oklFUwqGAGvhf7m66ndPeGPCcKP3FEl8aRhkNjii2m4S3JK4Ed76cjgB5v9Kan2qskLuQkcEcBqIQyuIgx9bjz1qdIvObQ4yrkbGaXalueRzo27gXCeKkdnS5SFltU7_hzuTjQ659JRR38fpQ5wHWQLw2zg1eGqtUQVc76vjGEa8dCratChpV_uGWQlBO-bzUacP8lldhaAvJKMKWtl"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <p class="text-white font-bold text-lg">Silver & Keramik</p>
                  <p class="text-white/80 text-sm">Matsilver & porslin</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Comparison Table -->
          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Dödsbopartner vs. Pantbank</h2>
            <div class="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
              <table class="w-full text-sm text-left">
                <thead class="bg-gray-50 dark:bg-surface-dark text-gray-700 dark:text-gray-300">
                  <tr>
                    <th class="px-6 py-4 font-semibold text-text-main dark:text-white">Tjänst</th>
                    <th class="px-6 py-4 font-bold text-primary">Dödsbopartner AB</th>
                    <th class="px-6 py-4 font-medium text-gray-500">Vanlig Pantbank</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-background-dark">
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Hämtning på plats</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Ingår</td>
                    <td class="px-6 py-4 text-gray-500">Oftast ej</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Köper hela bohag</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Ja, allt av värde</td>
                    <td class="px-6 py-4 text-gray-500">Nej, endast enstaka föremål</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Städtjänster</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Ja, paketlösning</td>
                    <td class="px-6 py-4 text-gray-500">Nej</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Värdering</td>
                    <td class="px-6 py-4 text-primary">Kostnadsfritt hembesök</td>
                    <td class="px-6 py-4 text-gray-500">Kräver besök i butik</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Reviews -->
          <section class="bg-gray-50 dark:bg-surface-dark rounded-2xl p-6 md:p-8" id="omdomen">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-text-main dark:text-white">Vad säger kunderna?</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Vi är stolta över våra omdömen och strävar alltid efter 100% nöjda kunder i varje uppdrag.</p>
                <div class="flex items-center gap-1 mb-1">
                  <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="text-sm font-bold text-text-main dark:text-white">4.8 av 5 baserat på 120 omdömen</p>
              </div>
              <div class="w-full md:w-1/2 bg-white dark:bg-black/20 p-4 rounded-xl">
                <div class="space-y-2">
                  <div class="flex items-center text-xs gap-3">
                    <span class="w-3 font-medium text-text-main dark:text-gray-300">5</span>
                    <div class="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center text-xs gap-3">
                    <span class="w-3 font-medium text-text-main dark:text-gray-300">4</span>
                    <div class="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full bg-primary w-[12%] rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center text-xs gap-3">
                    <span class="w-3 font-medium text-text-main dark:text-gray-300">3</span>
                    <div class="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full bg-primary w-[3%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <!-- Sticky Sidebar Column -->
        <div class="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0" id="kontakt">
          <div class="sticky top-24">
            <app-contact-form />
            
            <!-- Support Card -->
            <div class="mt-6 bg-white dark:bg-surface-dark rounded-xl p-5 border border-gray-100 dark:border-gray-800 flex items-center gap-4">
              <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Kundtjänst</p>
                <p class="font-bold text-text-main dark:text-white">08-123 45 67</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuationComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Värdering av Dödsbo | Gratis Hembesök',
      description: 'Professionell värdering av dödsbon. Vi köper upp säljbara föremål och sköter resten. Få en kostnadsfri värdering idag.',
      slug: 'vardering'
    });
  }
}