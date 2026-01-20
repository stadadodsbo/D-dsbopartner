import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-background-light">
      <h1 class="text-6xl md:text-8xl font-bold text-text-main/20 mb-4">404</h1>
      <h2 class="text-2xl md:text-3xl font-serif font-bold text-text-main mb-4">Sidan hittades inte</h2>
      <p class="text-text-sub mb-8 max-w-md text-lg font-light">
        Tyvärr kunde vi inte hitta sidan du sökte. Den kan ha flyttats eller tagits bort.
      </p>
      <a routerLink="/" class="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
        Tillbaka till startsidan
      </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setSeoData({
      title: 'Sidan hittades inte',
      description: 'Tyvärr kunde vi inte hitta sidan du sökte.',
      slug: '404'
    });
    // Critical for SEO: Tell Google NOT to index this page
    this.seo.setNoIndex();
  }
}