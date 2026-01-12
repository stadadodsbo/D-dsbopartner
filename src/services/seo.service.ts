import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  slug?: string; // e.g., 'tjanster' or '' for home
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  // We use string typing for document to support SSR/SSG environments safely
  private dom = inject(DOCUMENT);

  private readonly defaultImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjuwbfALO8DRiXvfwVIjeCGgsj60Ea8SBgZFsAG8ra0jGrO_TYdDoJ7I9MvsR2NP6gmzyVc-rfKB7WwI07fxgFqUGm2bBsVPB83kUe77gCPgMOxOTbX4jLbs6ZiJXrbtuKFdDKP2kjHLUHAEKNT_VgSpUT6rRtA100HebeGZp1xCzLbQRBynja4SxGXTAm_pWGTnzImGXKqYMBSSI-BxQa52Yy_vxJmh2S0ic7a4luAggqBdjQiYaamNWwsNu3OIwrzXLdKj_ld9be';
  private readonly siteName = 'Dödsbopartner AB';
  private readonly baseUrl = 'https://www.dodsbopartner.se';

  setSeoData(config: SeoConfig) {
    // 1. Set the Browser Title
    const finalTitle = config.slug === '' 
      ? `${this.siteName} | ${config.title}`
      : `${config.title} | ${this.siteName}`;
    
    this.titleService.setTitle(finalTitle);

    // 2. Set Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'title', content: finalTitle });

    // 3. Set Open Graph (Facebook/LinkedIn)
    const imageUrl = config.image || this.defaultImage;
    const url = `${this.baseUrl}/${config.slug || ''}`;

    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });
    this.metaService.updateTag({ property: 'og:title', content: finalTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:url', content: url });

    // 4. Set Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: finalTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });

    // 5. Update Canonical URL
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.dom.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}