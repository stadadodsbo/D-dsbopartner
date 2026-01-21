import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
          <li><a routerLink="/" class="hover:text-primary transition-colors">Start</a></li>
          <li><span class="material-symbols-outlined text-base select-none">chevron_right</span></li>
          <li><span class="text-text-main font-medium dark:text-white" aria-current="page">Flyttstädning</span></li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <article class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">cleaning_services</span>
              Städgaranti
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Flyttstädning av dödsbo med garanti
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Vi utför professionell <strong>flyttstädning av dödsbo</strong> med fokus på noggrannhet och respekt. Att städa ur en bostad efter en bortgång är tungt, och kraven från hyresvärdar och köpare är höga.
            </p>

            <!-- Image inserted here as part of content -->
            <div class="mt-8 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                 <img [ngSrc]="images.get('cleaning')" fill class="object-cover" alt="Noggrann flyttstädning av dödsbo i Stockholm kök">
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4 text-text-main dark:text-white">Trygghet i varje steg</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              När du anlitar oss för <strong>dödsbo flyttstädning</strong> ingår alltid vår nöjd-kund-garanti. Det innebär att vi garanterar att städningen blir godkänd vid besiktning. Vi hanterar allt från fönsterputs till rengöring av vitvaror, så att ni kan fokusera på annat. Kombinera gärna städningen med <a routerLink="/tjanster/tomning" class="text-primary hover:underline font-medium">tömning</a> för en komplett lösning.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                      <span class="material-symbols-outlined text-green-600">check_circle</span>
                      Ingår i städningen
                  </h3>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Fönsterputsning (in- och utsida)</li>
                      <li>• Rengöring av kök, vitvaror och ugn</li>
                      <li>• Badrum, golvbrunnar och kakel</li>
                      <li>• Torkning av lister, dörrar och skåp</li>
                      <li>• Element och ventiler</li>
                  </ul>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                      <span class="material-symbols-outlined text-blue-600">verified_user</span>
                      Vår Garanti
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Om det mot förmodan skulle finnas anmärkningar på städningen åtgärdar vi dessa kostnadsfritt.
                  </p>
                  <div class="flex items-center gap-2 text-sm font-bold text-text-main dark:text-white">
                      <span class="material-symbols-outlined text-primary">history</span>
                      7 dagars garanti
                  </div>
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
export class CleaningComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Flyttstädning Dödsbo Stockholm | Garanti & RUT-avdrag',
      description: 'Professionell dödsbo flyttstädning i Stockholm. Vi garanterar godkänd besiktning. Vi hjälper er med RUT-avdrag och grovstädning vid behov.',
      slug: 'tjanster/flyttstadning'
    });

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Flyttstädning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Dödsbopartner Stockholm AB"
      },
      "areaServed": {
        "@type": "City",
        "name": "Stockholm"
      },
      "description": "Professionell flyttstädning av dödsbo med garanti. Vi ser till att bostaden blir godkänd av hyresvärd."
    });
  }
}