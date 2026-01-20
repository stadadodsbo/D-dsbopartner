# SEO Strategi & Handlingsplan för Dödsbopartner AB

Denna plan syftar till att dominera sökresultaten för nyckelorden relaterade till hantering, uppköp och städning av dödsbon i Stockholm.

## 1. Teknisk SEO (Angular Specific)
Eftersom sidan är byggd som en Single Page Application (SPA) med Angular, måste vi säkerställa att Google kan läsa innehållet korrekt.

*   **Meta-data Optimering (Prioritet: Hög):**
    *   Vi måste uppdatera `SeoService` för att dynamiskt sätta unika `Title` och `Description` för varje undersida baserat på nyckelorden.
    *   *Åtgärd:* Title-taggar ska följa formatet: "Primärt Nyckelord | Företagsnamn".
    *   *Exempel:* "Uppköpare Dödsbo Stockholm | Vi köper hela hem | Dödsbopartner AB".
*   **Canonical Tags:**
    *   Säkerställ att varje sida pekar på sig själv som "canonical" för att undvika problem med duplicerat innehåll om URL-parametrar används.
*   **Strukturerad Data (JSON-LD):**
    *   Implementera `LocalBusiness` schema på startsidan och i footern (Adress, Öppettider, Telefon).
    *   Implementera `Service` schema på tjänstesidorna.
    *   Implementera `FAQPage` schema på `/vanliga-fragor`. Detta ger oss chans att synas direkt i sökresultaten med "People also ask".
*   **Sitemap & Robots.txt:**
    *   Skapa en `sitemap.xml` som listar alla publika rutter (`/`, `/tjanster/tomning`, `/uppkopare-dodsbo`, etc).

## 2. Innehållsstrategi (On-Page)

### A. Dedikerad Landningssida: "Uppköpare Dödsbo"
Du markerade *uppköpare dödsbo* (400 sökningar) som ett viktigt ord.
*   **Strategi:** Skapa en specifik landningssida `/tjanster/uppkopare-dodsbo` istället för att bara ha "Sälja dödsbo".
*   **Innehåll:** Fokusera stenhårt på att ni köper *allt*, inte bara antikviteter (vilket skiljer er från auktionshus). Använd orden "uppköpare av dödsbon" och "dödsbo köpes" flitigt i H1 och H2 rubriker.

### B. Utöka Kunskapsbanken (FAQ)
För att ranka på de informativa orden (*fullmakter dödsbo*, *bouppteckning dödsbo*) som har hög volym (1000 sökningar):
*   **Strategi:** Utöka FAQ-sidan till att bli en "Guider & Artiklar"-sektion.
*   **Skapa undersidor:** Istället för att bara ha en dropdown i FAQ, skapa separata URL:er för djupgående artiklar, t.ex:
    *   `/guider/fullmakt-dodsbo-mall` (Erbjud en gratis mall => driver trafik).
    *   `/guider/bouppteckning-steg-for-steg`.
*   Detta bygger auktoritet (E-E-A-T) och gör att Google litar mer på er sajt.

### C. Lokal SEO (Stockholm/Uppsala)
*   Integrera geografiska nyckelord i löptexten. Skriv inte bara "Flyttstädning dödsbo", skriv "Flyttstädning dödsbo i Stockholm och Uppsala".

## 3. URL Struktur Förslag
Förslagen strukturändring för att matcha nyckelorden bättre:

| Nuvarande Rutt | Föreslagen Rutt (SEO-vänlig) | Primärt Nyckelord |
| :--- | :--- | :--- |
| `/tjanster/tomning` | `/tjanster/tomning-dodsbo-stockholm` | Tömning dödsbo |
| `/tjanster/flyttstadning` | `/tjanster/flyttstadning-dodsbo` | Flyttstädning dödsbo |
| `/tjanster/salja-dodsbo` | `/tjanster/uppkopare-dodsbo` | Uppköpare dödsbo, Dödsbo köpes |
| (Ny Sida) | `/guider/fullmakt-dodsbo` | Fullmakter dödsbo |
| (Ny Sida) | `/guider/bouppteckning-hjalp` | Bouppteckning dödsbo |

## 4. Nästa steg (Implementation)
1.  **Skapa sidadresser:** Skapa de nya komponenterna för "Uppköpare" och "Guider".
2.  **Uppdatera Copy:** Klistra in texterna från `seo-keyword-content.md` i HTML-mallarna.
3.  **H1/H2 Optimering:** Gå igenom alla `<h1>` och `<h2>` taggar och säkerställ att nyckelorden finns där.
4.  **Alt-texter:** Lägg till beskrivande alt-texter på alla bilder som inkluderar nyckelord (t.ex. `alt="Flyttstädning av dödsbo i Stockholm kök"`).

---

## 5. Meta Data Master Sheet
Här är de exakta titlarna och beskrivningarna vi ska implementera för varje sida för att maximera klickfrekvens (CTR) och ranking.

| Sida | Primärt Nyckelord | SEO Titel (Title Tag) | Meta Beskrivning (Description) |
| :--- | :--- | :--- | :--- |
| **Start** | Dödsbo Stockholm | **Dödsbopartner AB | Tömning, Städning & Uppköp av Dödsbo Stockholm** | Vi erbjuder helhetslösning för dödsbon. Vi är uppköpare av dödsbo och utför tömning samt flyttstädning med garanti i Stockholm & Uppsala. Fri värdering. |
| **Sälja** | Uppköpare dödsbo | **Uppköpare Dödsbo & Dödsbo Köpes | Vi köper hela hem** | Söker du uppköpare av dödsbon? Vi köper säljbara föremål och kvittar värdet mot tömning. Rättvis värdering av möbler och bohag. Kontakta oss. |
| **Städ** | Flyttstädning dödsbo | **Flyttstädning Dödsbo Stockholm | Garanti & RUT-avdrag** | Professionell dödsbo flyttstädning i Stockholm. Vi garanterar godkänd besiktning. Vi hjälper er med RUT-avdrag och grovstädning vid behov. |
| **Tömning** | Tömning dödsbo | **Tömning Dödsbo Stockholm | Bortforsling & Återvinning** | Vi tömmer dödsbon effektivt och miljöriktigt. Sortering, packning och bortforsling till återvinning eller välgörenhet. Boka kostnadsfri offert. |
| **Värdering** | Värderingsman dödsbo | **Värderingsman Dödsbo | Gratis Hembesök & Värdering** | Boka en erfaren värderingsman för dödsbo. Vi värderar antikviteter, konst och möbler på plats. Få ett prisförslag direkt. |
| **FAQ** | Bouppteckning/Fullmakt | **Frågor om Bouppteckning & Fullmakter Dödsbo | Guider** | Vad gäller vid bouppteckning av dödsbo? Behövs fullmakt? Här hittar du svar på vanliga frågor och juridisk vägledning kring dödsbohantering. |

---

## 6. Bild-SEO Strategi (Image Strategy)
Bilder är en ofta förbisedd källa till trafik. För att ranka på bildsök måste vi döpa om filerna innan de laddas upp och sätta korrekta `alt`-taggar.

### Filnamns-struktur
Filnamn ska vara beskrivande, gemena bokstäver, och använda bindestreck (`-`) istället för mellanslag. Inga `IMG_1234.jpg`.

*   **Format:** `nyckelord-plats-beskrivning.jpg`

### Bild-mappning för Applikationen

| Plats i Appen | Nuvarande (Exempel) | **Nytt Filnamn (Optimized)** | **Alt-text (Ska innehålla nyckelord)** |
| :--- | :--- | :--- | :--- |
| **Hero (Start)** | `hero.jpg` | `tomning-vardering-dodsbo-stockholm.jpg` | "Vardagsrum i Stockholm redo för tömning och värdering av dödsbo" |
| **Sälja (Stol)** | `chair.jpg` | `uppkopare-dodsbo-designmobler.jpg` | "Teakstol och designmöbler som vi köper upp från dödsbon" |
| **Sälja (Tavlor)** | `paintings.jpg` | `vardering-konst-dodsbo.jpg` | "Värdering av oljemålningar och konst i dödsbo" |
| **Sälja (Silver)** | `silver.jpg` | `salja-silver-guld-dodsbo.jpg` | "Matsilver och porslin som köpes av uppköpare av dödsbon" |
| **Städning** | (Städikon/Bild) | `flyttstadning-dodsbo-kok.jpg` | "Noggrann flyttstädning av dödsbo i kök" |
| **Sanering** | (Saneringikon/Bild)| `sanering-dodsbo-luktsanering.jpg` | "Sanering och luktsanering av lägenhet" |
| **FAQ/Guide** | `documents.jpg` | `bouppteckning-fullmakt-dodsbo.jpg` | "Juridiska dokument för bouppteckning och fullmakter vid dödsfall" |

---

## 7. Strategi för Rich Results (FAQ & Bild)
För att få sökresultatet att se ut exakt som önskat (bildthumbnail bredvid texten + frågor under) krävs specifika tekniska åtgärder i Angular-koden.

### A. Bild i Sökresultatet (Thumbnail)
För att Google ska visa en bild bredvid din länk måste vi göra följande:
1.  **Högkvalitativ Bild:** Bilden måste vara unik, relevant och högupplöst.
2.  **Schema.org Property:** Vi måste ange `primaryImageOfPage` i vår JSON-LD.
3.  **Open Graph (OG):** Bilden ska även vara definierad i `og:image` (detta är redan gjort i `SeoService`, men vi ska se till att bilden är relevant för just den undersidan).

### B. Frågor & Svar i Sökresultatet (FAQ Rich Result)
För att få "dragspels-menyn" med frågor under sökresultatet måste vi implementera `FAQPage` Schema.

**Regel:** Frågorna och svaren i koden MÅSTE finnas synliga för användaren på sidan. Man får inte dölja dem helt.

**Exempel på JSON-LD kod som vi ska generera dynamiskt i Angular:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hur mycket kostar det att tömma ett dödsbo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priset varierar beroende på storlek och mängd bohag. Vi erbjuder alltid en kostnadsfri värdering där vi ger ett fast pris. Ofta kan värdet av föremål kvittas mot arbetskostnaden."
      }
    },
    {
      "@type": "Question",
      "name": "Utför ni flyttstädning av dödsbo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vi utför professionell flyttstädning av dödsbo med garanti. Vi ser till att bostaden blir godkänd av hyresvärd eller nya ägare."
      }
    }
  ]
}
```

### Implementation i Angular
Vi kommer uppdatera `SeoService` för att ta emot en lista med frågor (FAQs) för varje sida och automatiskt injicera detta script i `<head>`.

**Resultat:**
När Google indexerar om sidan kommer de se denna struktur och belöna sidan med "Rich Results" som tar mer plats på skärmen och ökar klickfrekvensen (CTR).