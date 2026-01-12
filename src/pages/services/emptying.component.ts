import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-emptying',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <!-- Main Content -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">inventory_2</span>
              Tömning & Bortforsling
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Tömning av dödsbo
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Vi tar hand om hela processen med att tömma bostaden. Oavsett om det gäller en lägenhet, villa eller ett förråd sköter vi sortering, packning och bortforsling.
            </p>
          </section>

          <!-- How it works -->
           <section>
            <h2 class="text-2xl font-bold text-text-main dark:text-white mb-6">Hur går en tömning till?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                     <span class="material-symbols-outlined text-2xl">category</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Sortering</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Vi sorterar allt bohag noggrant. Det som kan återanvändas går till välgörenhet.</p>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                     <span class="material-symbols-outlined text-2xl">local_shipping</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Bortforsling</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Vi transporterar bort allt. Skräp och avfall körs till återvinningscentralen.</p>
               </div>
               <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                     <span class="material-symbols-outlined text-2xl">recycling</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2 text-text-main dark:text-white">Återvinning</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Vi följer miljökrav strikt och ser till att farligt avfall hanteras korrekt.</p>
               </div>
            </div>
          </section>
          
           <!-- Why choose us -->
          <section>
            <h2 class="text-2xl font-bold mb-6 text-text-main dark:text-white">Varför anlita oss för tömning?</h2>
            <ul class="space-y-4">
              <li class="flex gap-4 items-start">
                 <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                 <div>
                    <h4 class="font-bold text-text-main dark:text-white">Miljöansvar</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Vi samarbetar med hjälporganisationer för att minska svinnet.</p>
                 </div>
              </li>
              <li class="flex gap-4 items-start">
                 <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                 <div>
                    <h4 class="font-bold text-text-main dark:text-white">Helhetslösning</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Vi kan kombinera tömningen med städning och sanering.</p>
                 </div>
              </li>
              <li class="flex gap-4 items-start">
                 <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                 <div>
                    <h4 class="font-bold text-text-main dark:text-white">Tunga lyft</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Ni slipper bära tungt. Vår personal är van vid pianon, kassaskåp och tunga möbler.</p>
                 </div>
              </li>
            </ul>
          </section>

        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
          <div class="sticky top-24">
            <app-contact-form />
          </div>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyingComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Tömning av Dödsbo Stockholm | Bortforsling & Återvinning',
      description: 'Vi hjälper er med tömning av dödsbo i Stockholm. Vi sorterar, skänker till välgörenhet och kör till återvinning. Boka fri offert.',
      slug: 'tjanster/tomning'
    });
  }
}