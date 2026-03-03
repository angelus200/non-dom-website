# NON DOM GROUP Website - Translation Analysis

## Files Containing German Text Content

### 1. App Pages (app/*)
- **app/page.tsx** - Homepage (Hero, Stats, Platforms, Features, Why section, Targets)
- **app/loesungen/page.tsx** - Solutions page (Platform details)
- **app/zielgruppen/page.tsx** - Target groups page
- **app/webinare/page.tsx** - Webinars page
- **app/kontakt/page.tsx** - Contact page
- **app/impressum/page.tsx** - Imprint/Legal notice
- **app/agb/page.tsx** - Terms & Conditions
- **app/datenschutz/page.tsx** - Privacy policy
- **app/layout.tsx** - Metadata (title, description, OpenGraph)

### 2. Components
- **components/Navbar.tsx** - Navigation links
- **components/Footer.tsx** - Footer sections and links

## Translation Strategy

### Option 1: Next.js i18n with next-intl (Recommended)
- Install next-intl package
- Create messages/de.json and messages/en.json
- Add locale routing
- Language switcher in navbar

### Option 2: Simple dictionary approach
- Create lib/translations.ts with DE/EN mappings
- Use React Context for language state
- Manual translation lookup

### Recommended Approach: next-intl
- Industry standard for Next.js i18n
- SEO-friendly with locale routing
- Type-safe translations
- Easy to maintain

## Next Steps
1. Install next-intl
2. Create translation JSON files
3. Update all pages to use translations
4. Add language switcher to navbar
5. Test and deploy

