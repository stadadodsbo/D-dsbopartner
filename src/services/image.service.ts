import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // When you upload your images to Supabase Storage, update this base URL
  // e.g., https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/website-images/
  private readonly useSupabaseStorage = false;
  private readonly supabaseStorageUrl = 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/website-images/';

  // Current Placeholders (Google/Unsplash)
  private readonly images = {
    hero: 'https://images.unsplash.com/photo-1715249891485-4b8e66b584dc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    documents: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACEZc6AtQb6lROt9ADV8xGO3KOpNnzIz-sFtuDwBRnXlKSMK64s1TZFK7NyvMgCXo97ZuDtm4f0JOshHSA733JC9PdgqGd9OCMQrILjPzY0rZZQqQsATIMW4HtlxxYcY9Fm1s5wa2URq2yCtvH_si9VxfliPtav-ZOCBrYulnzNleY5PlEVl_4r6LfysAYNAVXzjKHnEsypHO6XOlPYG1lwRZEVno0BN5StJN9UQbuwazJKVvDpR_aIzgxoECnRvQMWmjZY-ctjYdM',
    chair: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJxtBlCeyTOXJt0YrvWOot4vkFYLaOWpbnxwB_kjo5fx1cF7zV0ZNlJavS7_hBE-geStUHi2-2y0V4jkdibeHaZhQKyd6K7tlMKJfkyQBAu4sFPvmmfHUoQ5TxFObIS6Mg2p8xeqqUrtKnWTcvgeFZK7Vm0GDw77R9fL1Ljy04DSUXLOctwFIvkPNj-1EPUPpZcl4Q16Oducq6TI7fmm3Fl0FCy45Yoll1pVZm5eXoULT9Z4Cs1yooA73gS2aEJMHnd7SzSMQ6ghm',
    paintings: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9z4JKxeWBIyu65wShgr_vrgiitSwuaWTsDpgu_o88pxfVcocvSjRor30cSxT6r86a3w2VfKYok6SvK-_RvjFg3Oy7qhdd-bkeDpfuf5r_8Vcl2m34XguR92424SaqkiU41J08TovVpjpHXl0U9HS7llPI5w6OCoCkVlgoHJOpkealkZKcZkRvrUU2pcVTKwaE1A77ivItkjG9M0cY2IWBbBSEhaVW4Hjb-hyoW3uDRbz8axAi2LdSLULMtxBbsdG0kFOnRNH2LymZ',
    silver: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjPcrXLkPduAY0-ylCQDs4hqu9Sn0NqzSlYCMOLZpwOey21U576E0-1hL71oklFUwqGAGvhf7m66ndPeGPCcKP3FEl8aRhkNjii2m4S3JK4Ed76cjgB5v9Kan2qskLuQkcEcBqIQyuIgx9bjz1qdIvObQ4yrkbGaXalueRzo27gXCeKkdnS5SFltU7_hzuTjQ659JRR38fpQ5wHWQLw2zg1eGqtUQVc76vjGEa8dCratChpV_uGWQlBO-bzUacP8lldhaAvJKMKWtl',
    
    // Service Specific Images
    waste: 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/images/dodsbopartner-stockholm-tjanster-grovsopor.jpg',
    emptying: 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/images/dodsbopartner-stockholm-flytthjalp.jpg',
    buying: 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/images/dodsbopartner-stockholm-salja-dodsbo.jpg',
    remediation: 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/images/dodsbopartner-stockholm-sanering.jpg',
    cleaning: 'https://zpevjmmribzjvtmaxghl.supabase.co/storage/v1/object/public/images/dodsbopartner-stockholm-flyttstadning.jpg',

    // Blog/Guide Images
    guideFullmakt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4i2nscgYfOiS_BLoFn0DJbBS4aOPFqIxUj8GPcUxz7a74ricXYAzSQt149pEOcg4FT4aXYd1O4OHezn4jM2tSPiAIJ1FGIxxP87AicALxh272eJyhmEEZ0o6v_J-YZ6X7rZxbjrNAKiCmqp1mbgkEZTAfJb-xz0P5CCs5hqPWoUVcd8JIz50lQkwo3ffZVeF-FCq3BFIkLHVP0xmmT_Rc36tuW2bG0yJrSPpBROH59KbBGoeIAdcZmGr3EFPVZvQX0AC0lRAuCnEJ',
    articleBouppteckning: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvIRCX4gX7tPOiDQv9rBrhnIuWoav4viCqjBtNsZIbtogGJY-QA89R5gcF0lCS2jTGveb4j5GsL7TEQqXX4FyzQ-yIIkEOSzmVtSUlYfyxty_P0PwmU9eWlBLm4p76SlX_vRLSPjc0WHpxmI_sBFf8QZ8pqnP9h4P8AoiS-Cc01ycrzzTuwIB_fFLcYRWhHi48Pld_VKGM_7EWptQYKSReNxAGu9EOEaYUfnMFlhK0cYJE-oSz3uiU5MYUdd4QmrbalhPqY_bdJHRW',
    articleEmptying: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA--YJBoleo0hxh_Po7FmsY0fwJ6ORSInV6R6MBJPG7YUv2MvfbJRHLgWVyKYfHLbK-EDvZiKQ-0DhcjGCUDe5nlL4lv9Qog2VF2PavaAGoUr8qbdFXcA9c_WlAbjA4L0obGlacQV8pwAU_xae1ByTnnWMATTTRBItfzV3Nl1fpc65MdtM0dBQ6PAXnaQBGyxQZF847oaN3hQL7FuRPr65lcbULj0i-JP1GTeX8FwGNZxJ99_It0vMwE59KPF4hxDMZ2fh5sUmsW3Nb',
    guideHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGxyQclR5r3XstKWO1yaIJvqWcS7qwRrGzS35CEFqTUf4pafO7ivOYa1X-SlnMjTyIaL3QqYu6Gya8uw7OuI34ejM5o5SGaPwDnQTlPeTECrSZ7qVpg_ufHazkiHM9sU3yaY06FGR0IJknM5XZvKW7s2MUCphZChFA3fyKGawEUC2yxXntwXP3MmMD2y63kRbJ_pJWwtypo6WgUxqwg45N4x-FbRWY8_SnQsf7HIdBjR7lC7kMEvwbiv0geZrguoUqd0b--wzD0TYc'
  };

  get(key: keyof typeof this.images): string {
    if (this.useSupabaseStorage) {
      // Assumes files are named same as keys but with .jpg extension or similar
      return `${this.supabaseStorageUrl}${key}.jpg`;
    }
    return this.images[key];
  }
  
  getDefault(): string {
    return this.images.hero;
  }
}