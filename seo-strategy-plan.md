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
Vi fokuserar på orden **uppköpare dödsbo** (400) och **dödsbo köpes** (400).
*   **Strategi:** Tjänstesidan "Sälja Dödsbo" optimeras hårt för dessa termer.
*   **Innehåll:** Fokusera stenhårt på att ni köper *allt*, inte bara antikviteter (vilket skiljer er från auktionshus). Använd orden "uppköpare av dödsbon" och "dödsbo köpes" flitigt i H1 och H2 rubriker.

### B. Utöka Kunskapsbanken (FAQ)
För att ranka på de mycket tunga orden **bouppteckning dödsbo** (1000) och **fullmakter dödsbo** (1000):
*   **Strategi:** FAQ-sidan är nu optimerad för dessa termer.
*   **Framtida åtgärd:** Skapa separata landningssidor för "Guide: Bouppteckning" om konkurrensen kräver det.
*   Detta bygger auktoritet (E-E-A-T) och gör att Google litar mer på er sajt.

### C. Lokal SEO (Stockholm/Uppsala)
*   Integrera geografiska nyckelord i löptexten. Skriv inte bara "Flyttstädning dödsbo", skriv "Flyttstädning dödsbo i Stockholm och Uppsala".

## 3. URL Struktur & Nyckelords-mapping

| Nuvarande Rutt | Primärt Nyckelord (Volym) | Sekundärt Nyckelord |
| :--- | :--- | :--- |
| `/tjanster/tomning` | Tömning dödsbo | Bortforsling dödsbo |
| `/tjanster/flyttstadning` | **flyttstädning dödsbo** (300) | **dödsbo flyttstädning** (300) |
| `/tjanster/salja-dodsbo` | **uppköpare dödsbo** (400) | **dödsbo köpes** (400), **sälja dödsbon** (300) |
| `/vanliga-fragor` | **bouppteckning dödsbo** (1000) | **fullmakter dödsbo** (1000), **bodelning dödsbo** (200) |
| `/vardering` | **värderingsman dödsbo** (500) | Värdera dödsbo gratis |

---

## 4. Meta Data Master Sheet
Här är de exakta titlarna och beskrivningarna vi implementerat för att matcha dina specifika nyckelord.

| Sida | SEO Titel (Title Tag) | Meta Beskrivning (Description) |
| :--- | :--- | :--- |
| **Start** | **Dödsbopartner AB | Tömning, Städning & Uppköp av Dödsbo** | Vi är din helhetslösning. Vi agerar **uppköpare av dödsbon** och hjälper med **flyttstädning dödsbo** och tömning i Stockholm. |
| **Sälja** | **Uppköpare Dödsbo & Dödsbo Köpes | Vi köper hela hem** | Letar du efter **uppköpare av dödsbon**? Vi erbjuder **dödsbo köpes** tjänster där vi köper säljbara föremål. **Försäljning dödsbo** gjort enkelt. |
| **Städ** | **Flyttstädning Dödsbo Stockholm | Garanti & RUT** | Professionell **flyttstädning dödsbo** i Stockholm. Vi garanterar godkänd besiktning för **dödsbo flyttstädning**. RUT-avdrag gäller. |
| **Värdering** | **Värderingsman Dödsbo | Gratis Värdering & Hembesök** | Boka en erfaren **värderingsman dödsbo** i Stockholm. Vi värderar allt inför **försäljning dödsbo**. Kostnadsfritt hembesök. |
| **FAQ** | **Bouppteckning & Fullmakter Dödsbo | Vanliga Frågor** | Behöver du hjälp med **bouppteckning dödsbo** eller **fullmakter dödsbo**? Vi svarar på frågor om **bodelning dödsbo** och juridik. |

---

## 5. Bild-SEO Strategi (Renaming Plan)
För att ranka på bildsök måste vi använda dina specifika nyckelord i filnamnen.

| Plats i Appen | Nuvarande (Service Key) | **Optimized Filename (Upload as this)** | **Alt-text (Ska innehålla nyckelord)** |
| :--- | :--- | :--- | :--- |
| **Hero (Start)** | `hero` | `uppkopare-dodsbo-stockholm-tomning.jpg` | "Vardagsrum redo för tömning av dödsbo och värdering" |
| **Sälja (Stol)** | `chair` | `dodsbo-kopes-designmobler.jpg` | "Teakstol och designmöbler - dödsbo köpes" |
| **Sälja (Tavlor)** | `paintings` | `varderingsman-dodsbo-konst.jpg` | "Värderingsman dödsbo värderar konst och tavlor" |
| **Sälja (Silver)** | `buying` | `uppkopare-av-dodsbon-silver.jpg` | "Uppköpare av dödsbon köper silver och guld" |
| **Städning** | `cleaning` | `flyttstadning-dodsbo-garanti.jpg` | "Noggrann flyttstädning dödsbo med garanti" |
| **FAQ/Guide** | `documents` | `bouppteckning-dodsbo-fullmakter.jpg` | "Juridiska dokument för bouppteckning dödsbo och fullmakter" |
