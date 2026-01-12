import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">sanitizer</span>
              Sanering
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Sanering av bostad
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Ibland räcker det inte med en vanlig städning. Vi utför sanering av dödsbo, inklusive luktsanering och grovstädning, med diskretion och professionalism.
            </p>
          </section>

          <section class="space-y-8">
            <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
               <h3 class="font-bold text-xl mb-3">Luktsanering</h3>
               <p class="text-gray-600 dark:text-gray-400 mb-4">Vi använder ozonbehandling och andra metoder för att effektivt ta bort dålig lukt (t.ex. rök) permanent.</p>
            </div>
            <div class="bg-gray-50 dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800">
               <h3 class="font-bold text-xl mb-3">Grovsanering</h3>
               <p class="text-gray-600 dark:text-gray-400 mb-4">Vid behov hanterar vi bostäder som är i behov av kraftig rengöring eller röjning av stora mängder avfall (misärsanering).</p>
            </div>
          </section>
        </div>

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
export class RemediationComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Sanering Dödsbo Stockholm | Luktsanering & Grovstäd',
      description: 'Professionell sanering av dödsbo. Vi hjälper till med luktsanering, misärsanering och grovstädning i Stockholm & Uppsala.',
      slug: 'tjanster/sanering'
    });
  }
}