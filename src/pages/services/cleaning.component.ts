import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">cleaning_services</span>
              Städgaranti
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Flyttstädning av dödsbo
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Vi utför noggrann flyttstädning enligt mäklarstandard. Vi lämnar alltid garanti på att städningen blir godkänd av hyresvärd eller nya ägare.
            </p>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
export class CleaningComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Flyttstädning Dödsbo Stockholm | Städgaranti',
      description: 'Vi hjälper er med flyttstädning av dödsbo i Stockholm. Noggrann städning med garanti. Godkänd för RUT-avdrag vid behov.',
      slug: 'tjanster/flyttstadning'
    });
  }
}