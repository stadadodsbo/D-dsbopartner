import { Component, ChangeDetectionStrategy, signal, inject, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="embedded() ? '' : 'bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8'">
      
      @if (!embedded()) {
        <div class="mb-6">
          <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">Kostnadsfri värdering</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">Fyll i formuläret så återkommer vi med ett prisförslag eller bokar in ett hembesök.</p>
        </div>
      }
      
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <!-- Success Message -->
        @if (submitted()) {
          <div class="bg-green-50 text-green-800 p-6 rounded-lg border border-green-100 animate-in fade-in flex flex-col items-center text-center">
            <span class="material-symbols-outlined text-4xl mb-2 text-green-600">check_circle</span>
            <p class="font-bold text-lg">Tack för din förfrågan!</p>
            <p class="text-sm mt-1">Vi har tagit emot ditt meddelande och återkommer så snart vi kan.</p>
            <button type="button" (click)="resetForm()" class="mt-4 text-sm font-medium text-green-700 hover:text-green-900 underline">Skicka nytt meddelande</button>
          </div>
        } @else {
          <!-- Error Message -->
          @if (errorMessage()) {
             <div class="bg-red-50 text-red-800 p-4 rounded-lg border border-red-100 text-sm mb-4">
               {{ errorMessage() }}
             </div>
          }

          <!-- Name -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="name">Namn</label>
            <input 
              class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:border-primary focus:ring-primary dark:focus:border-primary dark:text-white py-3 px-4 text-sm transition-colors"
              [class.border-red-300]="isFieldInvalid('name')"
              id="name" formControlName="name" placeholder="Förnamn Efternamn" type="text"
            />
          </div>

          <!-- Phone & Email -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="phone">Telefon</label>
              <input 
                class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:border-primary focus:ring-primary dark:focus:border-primary dark:text-white py-3 px-4 text-sm transition-colors"
                [class.border-red-300]="isFieldInvalid('phone')"
                id="phone" formControlName="phone" placeholder="070..." type="tel"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="email">E-post</label>
              <input 
                class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:border-primary focus:ring-primary dark:focus:border-primary dark:text-white py-3 px-4 text-sm transition-colors"
                [class.border-red-300]="isFieldInvalid('email')"
                id="email" formControlName="email" placeholder="namn@..." type="email"
              />
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="description">Beskriv vad du vill sälja</label>
            <textarea 
              class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:border-primary focus:ring-primary dark:focus:border-primary dark:text-white py-3 px-4 text-sm transition-colors resize-none"
              [class.border-red-300]="isFieldInvalid('description')"
              id="description" formControlName="description" placeholder="T.ex. Hela dödsboet, möbler från 50-talet, silverbestick..." rows="4"
            ></textarea>
          </div>

          <!-- File Upload -->
          <div class="pt-2">
            <label class="flex items-center justify-center w-full h-12 px-4 transition bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 border-dashed rounded-lg appearance-none cursor-pointer hover:border-primary dark:hover:border-primary focus:outline-none overflow-hidden">
              <span class="flex items-center space-x-2 truncate">
                <span class="material-symbols-outlined text-gray-400">add_a_photo</span>
                <span class="text-sm text-gray-500 font-medium truncate">
                    @if (selectedFile()) {
                        {{ selectedFile()?.name }}
                    } @else {
                        Bifoga bilder (valfritt)
                    }
                </span>
              </span>
              <input class="hidden" name="file_upload" type="file" (change)="onFileSelected($event)" accept="image/*" />
            </label>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            [disabled]="contactForm.invalid || isSubmitting()"
            class="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
          >
            @if (isSubmitting()) {
              <span class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Skickar...</span>
            } @else {
              <span>Skicka förfrågan</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            }
          </button>
          
          <p class="text-xs text-center text-gray-400 mt-4">
              Genom att skicka godkänner du vår <a class="underline hover:text-primary" href="#">integritetspolicy</a>.
          </p>
        }
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  embedded = input(false);
  private fb: FormBuilder = inject(FormBuilder);
  private supabase = inject(SupabaseService);
  
  contactForm: FormGroup;
  submitted = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal<string | null>(null);
  selectedFile = signal<File | null>(null);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile.set(input.files[0]);
    }
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.errorMessage.set(null);

      try {
        let fileUrl: string | undefined = undefined;

        // 1. Upload File if present
        if (this.selectedFile()) {
           try {
             fileUrl = await this.supabase.uploadFile(this.selectedFile()!);
           } catch (err) {
             console.error('File upload failed but continuing with form', err);
             // Optionally handle file upload error specifically, or just continue without the file
           }
        }

        // 2. Submit Data
        await this.supabase.submitContactForm({
          ...this.contactForm.value,
          fileUrl
        });

        this.submitted.set(true);
        this.contactForm.reset();
        this.selectedFile.set(null);
      } catch (err) {
        console.error('Form Submission Error', err);
        this.errorMessage.set('Något gick fel vid sändningen. Försök igen eller kontakta oss på telefon.');
      } finally {
        this.isSubmitting.set(false);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.submitted.set(false);
    this.errorMessage.set(null);
    this.selectedFile.set(null);
  }
}