import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
          <li><a routerLink="/" class="hover:text-primary transition-colors">Start</a></li>
          <li><span class="material-symbols-outlined text-base select-none">chevron_right</span></li>
          <li><span class="text-text-main font-medium dark:text-white" aria-current="page">Sanering</span></li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <article class="lg:col-span-7 xl:col-span-8 space-y-16">
          <!-- Hero Section -->
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">sanitizer</span>
              Sanering & Specialstädning
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Professionell sanering av bostad
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Ibland räcker det inte med en vanlig städning. Vi utför avancerad <strong>sanering av dödsbo</strong>, inklusive luktsanering, nikotinsanering och grovstädning vid svåra förhållanden (misär). Vi arbetar alltid med största diskretion och respekt.
            </p>
          </section>

          <!-- Service Grid -->
          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Våra saneringstjänster</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Service 1 -->
              <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-orange-200 transition-colors">
                <div class="size-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined">air</span>
                </div>
                <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Luktsanering</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Vi använder effektiv ozonbehandling för att permanent ta bort dålig lukt från rökning, husdjur eller avfall. Metoden är miljövänlig och skonsam.
                </p>
              </div>

              <!-- Service 2 -->
              <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-orange-200 transition-colors">
                <div class="size-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined">cleaning_services</span>
                </div>
                <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Grovsanering (Misär)</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Vid socialsanering eller misärstädning hanterar vi bostäder med stora mängder avfall eller kraftig nedsmutsning. Vi återställer bostaden till beboeligt skick.
                </p>
              </div>

              <!-- Service 3 -->
              <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-orange-200 transition-colors">
                <div class="size-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined">smoking_rooms</span>
                </div>
                <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Nikotinsanering</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Gula väggar och inrökt lukt kräver specialbehandling. Vi tvättar väggar och tak med specialmedel och spärrmålar vid behov.
                </p>
              </div>

              <!-- Service 4 -->
              <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-orange-200 transition-colors">
                <div class="size-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined">pest_control</span>
                </div>
                <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Desinficering</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Säkerställ en hygienisk miljö inför försäljning eller överlämning. Vi desinficerar alla ytor noggrant.
                </p>
              </div>
            </div>
          </section>

          <!-- Process Section -->
          <section>
             <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Så går det till</h2>
             <div class="space-y-4">
               <div class="flex gap-4">
                 <div class="flex-shrink-0 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                 <div>
                   <h4 class="font-bold text-text-main dark:text-white">Besiktning</h4>
                   <p class="text-sm text-gray-600 dark:text-gray-400">Vi gör en bedömning på plats för att avgöra vilken typ av sanering som krävs.</p>
                 </div>
               </div>
               <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 ml-4"></div>
               <div class="flex gap-4">
                 <div class="flex-shrink-0 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                 <div>
                   <h4 class="font-bold text-text-main dark:text-white">Åtgärdsplan & Offert</h4>
                   <p class="text-sm text-gray-600 dark:text-gray-400">Ni får en tydlig offert med fast pris. Vi förklarar vilka metoder vi kommer använda.</p>
                 </div>
               </div>
               <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 ml-4"></div>
               <div class="flex gap-4">
                 <div class="flex-shrink-0 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                 <div>
                   <h4 class="font-bold text-text-main dark:text-white">Utförande</h4>
                   <p class="text-sm text-gray-600 dark:text-gray-400">Våra specialister utför arbetet effektivt. Vid ozonbehandling får ingen vistas i bostaden under processen.</p>
                 </div>
               </div>
             </div>
          </section>

          <!-- Trust Box -->
          <section class="bg-primary/5 border border-primary/20 rounded-xl p-6 flex gap-4 items-start">
            <span class="material-symbols-outlined text-primary text-3xl">security</span>
            <div>
              <h3 class="font-bold text-lg text-primary mb-1">Diskretion är en självklarhet</h3>
              <p class="text-sm text-gray-700 dark:text-gray-300">
                Saneringsuppdrag kan vara känsliga. Vi arbetar alltid diskret och med stor respekt för de anhöriga och grannar. Våra fordon kan vara omärkta vid önskemål.
              </p>
            </div>
          </section>

        </article>

        <aside class="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
          <div class="sticky top-24">
            <div class="mb-6 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30 rounded-xl flex items-center gap-3">
              <span class="material-symbols-outlined text-orange-600">info</span>
              <p class="text-xs font-medium text-orange-800 dark:text-orange-200">
                Vi kan ofta kombinera sanering med <a routerLink="/tjanster/tomning" class="underline hover:text-orange-900">tömning</a> för en smidigare process.
              </p>
            </div>
            <app-contact-form />
            
            <div class="mt-8 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                 <img [ngSrc]="images.get('remediation')" fill class="object-cover" alt="Sanering och städning av bostad">
            </div>
          </div>
        </aside>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemediationComponent implements OnInit {
  private seo = inject(SeoService);
  protected images = inject(ImageService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Sanering Dödsbo Stockholm | Luktsanering & Grovstäd',
      description: 'Professionell sanering av dödsbo. Vi hjälper till med luktsanering, misärsanering och grovstädning i Stockholm & Uppsala. Diskret hantering.',
      slug: 'tjanster/sanering'
    });
  }
}