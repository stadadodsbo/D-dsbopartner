import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-selling',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        
        <div class="lg:col-span-7 xl:col-span-8 space-y-16">
          <section>
             <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span class="material-symbols-outlined text-[16px]">sell</span>
              Sälja Dödsbo
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] mb-6 tracking-tight">
              Att sälja ett dödsbo
            </h1>
             <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              När ni ska sälja eller avveckla ett dödsbo finns det mycket att tänka på. Vi erbjuder en helhetslösning där vi köper upp, tömmer och städar.
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
export class SellingComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Sälja Dödsbo Stockholm | Guide & Hjälp',
      description: 'Ska ni sälja dödsbo? Vi köper upp dödsbon och hjälper till med hela processen från värdering till tömning och städning.',
      slug: 'tjanster/salja-dodsbo'
    });
  }
}