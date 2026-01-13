import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  
  // NOTE: In a real production app, use environment variables.
  private readonly supabaseUrl = 'https://zpevjmmribzjvtmaxghl.supabase.co';
  private readonly supabaseKey = 'sb_publishable_DhbRBtn-Nyj8MBtBAjJGBA_2aMkBYiJ';

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  /**
   * Submits the contact form data to the 'contact_requests' table.
   */
  async submitContactForm(data: { name: string; phone: string; email: string; description: string; fileUrl?: string }) {
    const { error } = await this.supabase
      .from('contact_requests')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          description: data.description,
          file_url: data.fileUrl,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Supabase Error:', error);
      throw error;
    }
  }

  /**
   * Uploads a file to the 'contact-uploads' bucket.
   */
  async uploadFile(file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await this.supabase.storage
      .from('contact-uploads')
      .upload(filePath, file);

    if (error) {
      console.error('Upload Error:', error);
      throw error;
    }

    // Get public URL
    const { data } = this.supabase.storage
      .from('contact-uploads')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
}