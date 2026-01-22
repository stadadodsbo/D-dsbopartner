import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-buying',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <!-- Main Content -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">shopping_cart</span>
              Dödsbo Köpes
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Vi köper dödsbo och värderar föremål
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Har ni föremål ni vill sälja? Vi köper hela eller delar av dödsbon. Värdet dras av direkt på kostnaden för tömning och städning, eller betalas ut till er.
            </p>
          </section>

          <!-- What we buy -->
           <section>
            <h2 class="text-2xl font-bold text-text-main dark:text-white mb-6">Vad vi letar efter</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="text-primary mb-3">
                     <span class="material-symbols-outlined text-4xl">chair</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Designmöbler</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Skandinavisk design, teak, och märkesmöbler.</p>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="text-primary mb-3">
                     <span class="material-symbols-outlined text-4xl">palette</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Konst & Antikt</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Oljemålningar, litografier, och äldre antikviteter.</p>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="text-primary mb-3">
                     <span class="material-symbols-outlined text-4xl">diamond</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Silver & Smycken</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Matsilver, guld, smycken och klockor.</p>
               </div>
            </div>
          </section>
          
           <!-- Comparison Table -->
          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Dödsbopartner vs. Auktionshus</h2>
            <div class="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
              <table class="w-full text-sm text-left">
                <thead class="bg-gray-50 dark:bg-surface-dark text-gray-700 dark:text-gray-300">
                  <tr>
                    <th class="px-6 py-4 font-semibold text-text-main dark:text-white">Fördel</th>
                    <th class="px-6 py-4 font-bold text-primary">Dödsbopartner Stockholm AB</th>
                    <th class="px-6 py-4 font-medium text-gray-500">Auktionshus</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-background-dark">
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Hämtning</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Ingår oftast</td>
                    <td class="px-6 py-4 text-gray-500">Dyr transportkostnad</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Provision</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> 0% (Vi köper direkt)</td>
                    <td class="px-6 py-4 text-gray-500">20-25% + slagavgift</td>
                  </tr>
                   <tr>
                    <td class="px-6 py-4 font-medium text-text-main dark:text-gray-200">Utbetalning</td>
                    <td class="px-6 py-4 text-primary"><span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Direkt</td>
                    <td class="px-6 py-4 text-gray-500">Efter försäljning (1-2 mån)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
          <div class="sticky top-24">
             <div class="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 class="font-bold text-lg text-primary mb-2">Kostnadsfri Värdering</h3>
                <p class="text-sm text-gray-600 mb-4">Vi kommer hem till er och gör en bedömning på plats. Helt utan förbindelser.</p>
            </div>
            <app-contact-form />
            
            <div class="mt-8 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                 <img [ngSrc]="images.get('buying')" fill class="object-cover" alt="Uppköp av dödsbo i Stockholm - vi köper antika möbler och hela bohag">
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyingComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Dödsbo Köpes Stockholm | Vi köper hela dödsbon',
      description: 'Vi köper upp dödsbo och säljbara föremål i Stockholm. Rättvis värdering och direkt betalning eller avdrag på tömning.',
      slug: 'tjanster/dodsbo-kopes'
    });
  }
}