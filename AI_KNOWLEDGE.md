# AI Knowledge & Project Constraints

This file documents recurring issues and strict architectural rules for this specific project to avoid regression loops.

## Critical Angular Configuration
**Version:** Angular 18.2.0
**Status:** Locked. Do not attempt to upgrade to v19/v20 as the runtime environment/importmap is pinned to v18.
**Feature:** Zoneless Change Detection

**Rule:** Use `provideExperimentalZonelessChangeDetection` in `src/main.ts` and `index.tsx`.
**Reason:** The stable `provideZonelessChangeDetection` API is only available in Angular v19+. Since this project uses v18.2.0, attempting to import the stable API results in a runtime syntax error.

**Solution Code:**
```typescript
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    // ... other providers
  ]
});
```

## Image Handling
**Issue:** User uploads images to chat, but they don't appear in the app.
**Cause:** The AI cannot save binary files from the chat interface to the web container's filesystem.
**Rule:** 
1. Use `src/services/image.service.ts` to manage all image URLs.
2. Use high-quality `images.unsplash.com` or `lh3.googleusercontent.com` URLs as placeholders.
3. Do not attempt to reference local files like `./assets/my-upload.jpg` unless they are explicitly known to exist in the `public` folder.

## Styling
**Rule:** Use Tailwind CSS exclusively. Do not generate custom CSS files unless absolutely necessary for animations not supported by Tailwind.

## Routing
**Rule:** Use `withHashLocation()` in `app.config.ts` (or `main.ts`). This is critical for the applet environment to handle navigation correctly.