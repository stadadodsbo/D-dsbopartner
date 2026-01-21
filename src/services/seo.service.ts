import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ImageService } from './image.service';

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
  private images = inject(ImageService);
  private dom = inject(DOCUMENT);
  private rendererFactory = inject(RendererFactory2);
  private renderer = this.rendererFactory.createRenderer(null, null);

  private readonly siteName = 'Dödsbopartner Stockholm AB';
  private readonly baseUrl = 'https://www.dodsbopartner.se';

  setSeoData(config: SeoConfig) {
    // 0. Reset Robots (in case we came from 404)
    this.metaService.removeTag('name="robots"');
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // 1. Set the Browser Title
    const finalTitle = config.slug === '' 
      ? `${this.siteName} | ${config.title}`
      : `${config.title} | ${this.siteName}`;
    
    this.titleService.setTitle(finalTitle);

    // 2. Set Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'title', content: finalTitle });

    // 3. Set Open Graph (Facebook/LinkedIn)
    const imageUrl = config.image || this.images.getDefault();
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

  setNoIndex() {
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  setJsonLd(data: any) {
    // Remove old schema if exists
    const oldScript = this.dom.querySelector('script[type="application/ld+json"]');
    if (oldScript) {
      oldScript.remove();
    }

    // Inject new schema
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.dom.head, script);
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