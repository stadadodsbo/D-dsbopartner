import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-waste',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
          <li><a routerLink="/" class="hover:text-primary transition-colors">Start</a></li>
          <li><span class="material-symbols-outlined text-base select-none">chevron_right</span></li>
          <li><span class="text-text-main font-medium dark:text-white" aria-current="page">Grovsopor</span></li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <article class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">delete_sweep</span>
              Hämtning & Tippen
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Hämtning av Grovsopor
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Vi hämtar och forslar bort dina grovsopor i Stockholm och Uppsala. Slipp hyra släp, bära tungt och köa på återvinningscentralen. Vi gör jobbet åt dig.
            </p>

            <!-- Image inserted here as part of content -->
            <div class="mt-8 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                 <img [ngSrc]="images.get('waste')" fill class="object-cover" alt="Hämtning av grovsopor och gamla möbler för återvinning i Stockholm">
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Vi hämtar allt från enstaka möbler till hela förråd</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Har ni rensat källaren, vinden eller behöver bli av med gamla möbler i samband med ett dödsbo eller flytt? Vi kommer med lastbil och personal som bär ut och kör bort skräpet direkt till sortering.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary">check</span>
                      Detta hämtar vi
                  </h3>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Gamla möbler & sängar</li>
                      <li>• Elektronik & vitvaror</li>
                      <li>• Trädgårdsavfall</li>
                      <li>• Byggavfall (i säck)</li>
                      <li>• Förrådsrensningar</li>
                  </ul>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary">thumb_up</span>
                      Så fungerar det
                  </h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-300 list-decimal list-inside marker:text-primary marker:font-bold">
                      <li>Boka tid för hämtning</li>
                      <li>Vi kommer och bär ut allt</li>
                      <li>Vi sorterar och återvinner</li>
                      <li>Du får en faktura (RUT-avdrag kan gälla för vissa moment)</li>
                  </ol>
               </div>
            </div>
          </section>
        </article>

        <aside class="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
          <div class="sticky top-24">
            <app-contact-form />
          </div>
        </aside>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WasteComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Hämtning av Grovsopor Stockholm | Vi kör till tippen',
      description: 'Behöver du hjälp med grovsopor? Vi hämtar möbler, skräp och trädgårdsavfall i Stockholm. Vi bär och kör till återvinningen åt dig.',
      slug: 'tjanster/grovsopor'
    });
  }
}