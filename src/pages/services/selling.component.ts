import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-selling',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
          <li><a routerLink="/" class="hover:text-primary transition-colors">Start</a></li>
          <li><span class="material-symbols-outlined text-base select-none">chevron_right</span></li>
          <li><span class="text-text-main font-medium dark:text-white" aria-current="page">Sälja Dödsbo</span></li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <article class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">sell</span>
              Sälja Dödsbo
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Uppköpare av dödsbo i Stockholm
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Letar du efter en seriös <strong>uppköpare av dödsbon</strong>? På Dödsbopartner AB är vi experter på <strong>dödsbo köpes</strong> i hela Stockholmsregionen. Vi vet att försäljning av dödsbo kan vara en känslomässig process, och därför erbjuder vi en smidig helhetslösning.
            </p>
          </section>

          <section>
             <h2 class="text-2xl font-bold text-text-main dark:text-white mb-6">Din värderingsman för dödsbo</h2>
             <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
               Som din värderingsman för dödsbo kommer vi ut kostnadsfritt och värderar allt från möbler och konst till porslin och guld. Många väljer att sälja dödsbon privat, men genom att anlita oss som uppköpare slipper ni krånglet med auktionshus och annonsering. Vi ger er ett rättvist pris direkt och kan kvitta värdet mot kostnaden för <a routerLink="/tjanster/tomning" class="text-primary hover:underline font-medium">tömning</a> och <a routerLink="/tjanster/flyttstadning" class="text-primary hover:underline font-medium">städning</a>.
             </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Steg för steg</h2>
            <div class="space-y-6">
                <div class="flex gap-4">
                    <div class="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">1</div>
                    <div>
                        <h3 class="font-bold text-lg">Ta vara på personliga minnen</h3>
                        <p class="text-gray-600 dark:text-gray-400">Innan vi kommer rekommenderar vi att ni går igenom och sparar fotografier, brev och personliga minnessaker.</p>
                    </div>
                </div>
                 <div class="flex gap-4">
                    <div class="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">2</div>
                    <div>
                        <h3 class="font-bold text-lg">Värdering</h3>
                        <p class="text-gray-600 dark:text-gray-400">Boka ett kostnadsfritt möte med oss. Vi går igenom bohag, möbler och konst för att ge er en rättvis offert.</p>
                    </div>
                </div>
                 <div class="flex gap-4">
                    <div class="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">3</div>
                    <div>
                        <h3 class="font-bold text-lg">Försäljning & Tömning</h3>
                        <p class="text-gray-600 dark:text-gray-400">Vi köper det som går att sälja. Resten skänks till välgörenhet eller återvinns. Ni slipper allt bärande och transporterande.</p>
                    </div>
                </div>
            </div>
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
export class SellingComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Uppköpare Dödsbo & Dödsbo Köpes | Vi köper hela hem',
      description: 'Söker du uppköpare av dödsbon? Vi köper säljbara föremål och kvittar värdet mot tömning. Rättvis värdering av möbler och bohag. Kontakta oss.',
      slug: 'tjanster/salja-dodsbo'
    });

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Uppköpare av Dödsbo",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Dödsbopartner AB"
      },
      "areaServed": {
        "@type": "City",
        "name": "Stockholm"
      },
      "description": "Vi köper upp hela eller delar av dödsbon i Stockholm. Rättvis värdering och helhetslösning med tömning."
    });
  }
}