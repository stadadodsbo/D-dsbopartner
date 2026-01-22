import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './src/app.routes';
// FIX: Import the Experimental version
import { provideExperimentalZonelessChangeDetection } from '@angular/core';//DO NOT CHANGE THIS PART

bootstrapApplication(AppComponent, {
  providers: [
    // FIX: Use the Experimental function
    provideExperimentalZonelessChangeDetection(),//DO NOT CHANGE THIS PART
    provideRouter(
      routes, 
      withHashLocation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    )
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
