// Language Data
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish (Español)' },
  { code: 'fr', name: 'French (Français)' },
  { code: 'de', name: 'German (Deutsch)' },
  { code: 'it', name: 'Italian (Italiano)' },
  { code: 'pt', name: 'Portuguese (Português)' },
  { code: 'ru', name: 'Russian (Русский)' },
  { code: 'ja', name: 'Japanese (日本語)' },
  { code: 'ko', name: 'Korean (한국어)' },
  { code: 'zh', name: 'Chinese (中文)' },
  { code: 'ar', name: 'Arabic (العربية)' },
  { code: 'hi', name: 'Hindi (हिन्दी)' },
  { code: 'bn', name: 'Bengali (বাংলা)' },
  { code: 'ur', name: 'Urdu (اردو)' },
  { code: 'tr', name: 'Turkish (Türkçe)' },
  { code: 'vi', name: 'Vietnamese (Tiếng Việt)' },
  { code: 'th', name: 'Thai (ไทย)' },
  { code: 'nl', name: 'Dutch (Nederlands)' },
  { code: 'pl', name: 'Polish (Polski)' },
  { code: 'sv', name: 'Swedish (Svenska)' },
  { code: 'da', name: 'Danish (Dansk)' },
  { code: 'no', name: 'Norwegian (Norsk)' },
  { code: 'fi', name: 'Finnish (Suomi)' },
  { code: 'el', name: 'Greek (Ελληνικά)' },
  { code: 'he', name: 'Hebrew (עברית)' },
  { code: 'id', name: 'Indonesian (Bahasa Indonesia)' },
  { code: 'ms', name: 'Malay (Bahasa Melayu)' },
  { code: 'tl', name: 'Filipino (Tagalog)' },
  { code: 'cs', name: 'Czech (Čeština)' },
  { code: 'ro', name: 'Romanian (Română)' },
  { code: 'hu', name: 'Hungarian (Magyar)' },
  { code: 'uk', name: 'Ukrainian (Українська)' }
];

// Country Data with SEO info and language associations
const countries = [
  { code: 'US', name: 'United States', region: 'North America', languages: ['en'] },
  { code: 'GB', name: 'United Kingdom', region: 'Europe', languages: ['en'] },
  { code: 'CA', name: 'Canada', region: 'North America', languages: ['en', 'fr'] },
  { code: 'AU', name: 'Australia', region: 'Oceania', languages: ['en'] },
  { code: 'DE', name: 'Germany', region: 'Europe', languages: ['de'] },
  { code: 'FR', name: 'France', region: 'Europe', languages: ['fr'] },
  { code: 'ES', name: 'Spain', region: 'Europe', languages: ['es'] },
  { code: 'IT', name: 'Italy', region: 'Europe', languages: ['it'] },
  { code: 'NL', name: 'Netherlands', region: 'Europe', languages: ['nl'] },
  { code: 'BE', name: 'Belgium', region: 'Europe', languages: ['nl', 'fr', 'de'] },
  { code: 'CH', name: 'Switzerland', region: 'Europe', languages: ['de', 'fr', 'it'] },
  { code: 'AT', name: 'Austria', region: 'Europe', languages: ['de'] },
  { code: 'SE', name: 'Sweden', region: 'Europe', languages: ['sv'] },
  { code: 'NO', name: 'Norway', region: 'Europe', languages: ['no'] },
  { code: 'DK', name: 'Denmark', region: 'Europe', languages: ['da'] },
  { code: 'FI', name: 'Finland', region: 'Europe', languages: ['fi', 'sv'] },
  { code: 'PL', name: 'Poland', region: 'Europe', languages: ['pl'] },
  { code: 'PT', name: 'Portugal', region: 'Europe', languages: ['pt'] },
  { code: 'IE', name: 'Ireland', region: 'Europe', languages: ['en'] },
  { code: 'NZ', name: 'New Zealand', region: 'Oceania', languages: ['en'] },
  { code: 'JP', name: 'Japan', region: 'Asia', languages: ['ja'] },
  { code: 'KR', name: 'South Korea', region: 'Asia', languages: ['ko'] },
  { code: 'CN', name: 'China', region: 'Asia', languages: ['zh'] },
  { code: 'IN', name: 'India', region: 'Asia', languages: ['hi', 'en', 'bn'] },
  { code: 'SG', name: 'Singapore', region: 'Asia', languages: ['en', 'zh', 'ms'] },
  { code: 'MY', name: 'Malaysia', region: 'Asia', languages: ['ms', 'en', 'zh'] },
  { code: 'TH', name: 'Thailand', region: 'Asia', languages: ['th'] },
  { code: 'PH', name: 'Philippines', region: 'Asia', languages: ['tl', 'en'] },
  { code: 'ID', name: 'Indonesia', region: 'Asia', languages: ['id'] },
  { code: 'VN', name: 'Vietnam', region: 'Asia', languages: ['vi'] },
  { code: 'BR', name: 'Brazil', region: 'South America', languages: ['pt'] },
  { code: 'MX', name: 'Mexico', region: 'North America', languages: ['es'] },
  { code: 'AR', name: 'Argentina', region: 'South America', languages: ['es'] },
  { code: 'CL', name: 'Chile', region: 'South America', languages: ['es'] },
  { code: 'CO', name: 'Colombia', region: 'South America', languages: ['es'] },
  { code: 'PE', name: 'Peru', region: 'South America', languages: ['es'] },
  { code: 'VE', name: 'Venezuela', region: 'South America', languages: ['es'] },
  { code: 'EC', name: 'Ecuador', region: 'South America', languages: ['es'] },
  { code: 'BO', name: 'Bolivia', region: 'South America', languages: ['es'] },
  { code: 'PY', name: 'Paraguay', region: 'South America', languages: ['es'] },
  { code: 'UY', name: 'Uruguay', region: 'South America', languages: ['es'] },
  { code: 'CR', name: 'Costa Rica', region: 'Central America', languages: ['es'] },
  { code: 'PA', name: 'Panama', region: 'Central America', languages: ['es'] },
  { code: 'GT', name: 'Guatemala', region: 'Central America', languages: ['es'] },
  { code: 'CU', name: 'Cuba', region: 'Caribbean', languages: ['es'] },
  { code: 'DO', name: 'Dominican Republic', region: 'Caribbean', languages: ['es'] },
  { code: 'PR', name: 'Puerto Rico', region: 'Caribbean', languages: ['es', 'en'] },
  { code: 'AE', name: 'UAE', region: 'Middle East', languages: ['ar', 'en'] },
  { code: 'SA', name: 'Saudi Arabia', region: 'Middle East', languages: ['ar'] },
  { code: 'IL', name: 'Israel', region: 'Middle East', languages: ['he', 'ar'] },
  { code: 'TR', name: 'Turkey', region: 'Middle East', languages: ['tr'] },
  { code: 'EG', name: 'Egypt', region: 'Africa', languages: ['ar'] },
  { code: 'MA', name: 'Morocco', region: 'Africa', languages: ['ar', 'fr'] },
  { code: 'DZ', name: 'Algeria', region: 'Africa', languages: ['ar', 'fr'] },
  { code: 'TN', name: 'Tunisia', region: 'Africa', languages: ['ar', 'fr'] },
  { code: 'JO', name: 'Jordan', region: 'Middle East', languages: ['ar'] },
  { code: 'LB', name: 'Lebanon', region: 'Middle East', languages: ['ar', 'fr'] },
  { code: 'KW', name: 'Kuwait', region: 'Middle East', languages: ['ar'] },
  { code: 'QA', name: 'Qatar', region: 'Middle East', languages: ['ar', 'en'] },
  { code: 'BH', name: 'Bahrain', region: 'Middle East', languages: ['ar'] },
  { code: 'OM', name: 'Oman', region: 'Middle East', languages: ['ar'] },
  { code: 'ZA', name: 'South Africa', region: 'Africa', languages: ['en'] },
  { code: 'NG', name: 'Nigeria', region: 'Africa', languages: ['en'] },
  { code: 'KE', name: 'Kenya', region: 'Africa', languages: ['en'] },
  { code: 'GH', name: 'Ghana', region: 'Africa', languages: ['en'] },
  { code: 'RU', name: 'Russia', region: 'Europe', languages: ['ru'] },
  { code: 'UA', name: 'Ukraine', region: 'Europe', languages: ['uk', 'ru'] },
  { code: 'BY', name: 'Belarus', region: 'Europe', languages: ['ru'] },
  { code: 'KZ', name: 'Kazakhstan', region: 'Asia', languages: ['ru'] },
  { code: 'PK', name: 'Pakistan', region: 'Asia', languages: ['ur', 'en'] },
  { code: 'BD', name: 'Bangladesh', region: 'Asia', languages: ['bn'] },
  { code: 'GR', name: 'Greece', region: 'Europe', languages: ['el'] },
  { code: 'CY', name: 'Cyprus', region: 'Europe', languages: ['el', 'tr'] },
  { code: 'CZ', name: 'Czech Republic', region: 'Europe', languages: ['cs'] },
  { code: 'SK', name: 'Slovakia', region: 'Europe', languages: ['cs'] },
  { code: 'RO', name: 'Romania', region: 'Europe', languages: ['ro'] },
  { code: 'MD', name: 'Moldova', region: 'Europe', languages: ['ro', 'ru'] },
  { code: 'HU', name: 'Hungary', region: 'Europe', languages: ['hu'] },
  { code: 'TW', name: 'Taiwan', region: 'Asia', languages: ['zh'] },
  { code: 'HK', name: 'Hong Kong', region: 'Asia', languages: ['zh', 'en'] }
];

// Theme Pages Configuration
const themePages = {
  blog: ['Home', 'About Us', 'Blog', 'Contact Us', 'Privacy Policy', 'Author Page'],
  business: ['Home', 'About Us', 'Services', 'Our Team', 'Testimonials', 'Contact Us', 'Privacy Policy'],
  service: ['Home', 'About Us', 'Services', 'How It Works', 'Pricing', 'FAQ', 'Contact Us', 'Privacy Policy'],
  ecommerce: ['Home', 'Products', 'Categories', 'About Us', 'Contact Us', 'Shipping Info', 'Return Policy', 'Privacy Policy'],
  portfolio: ['Home', 'About Me', 'Portfolio', 'Services', 'Testimonials', 'Contact', 'Privacy Policy'],
  landing: ['Home (Landing)', 'Features', 'Pricing', 'FAQ', 'Contact', 'Privacy Policy']
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initLanguageDropdown();
  initCountryGrid();
});

function initLanguageDropdown() {
  const listEl = document.getElementById('languageList');
  listEl.innerHTML = languages.map(lang => 
    `<div class="language-option ${lang.code === 'en' ? 'selected' : ''}" data-code="${lang.code}" onclick="selectLanguage('${lang.code}', '${lang.name}')">${lang.name}</div>`
  ).join('');
  document.getElementById('languageSearch').value = 'English';
}

function initCountryGrid() {
  const gridEl = document.getElementById('countryGrid');
  gridEl.innerHTML = countries.map(country => 
    `<label class="country-checkbox" data-languages="${country.languages.join(',')}" data-code="${country.code}">
      <input type="checkbox" value="${country.code}" data-name="${country.name}"> ${country.name}
    </label>`
  ).join('');
  // Apply initial filter for English
  filterCountriesByLanguage('en');
}

function toggleLanguageDropdown() {
  document.getElementById('languageList').classList.toggle('show');
}

function filterLanguages() {
  const search = document.getElementById('languageSearch').value.toLowerCase();
  const options = document.querySelectorAll('.language-option');
  options.forEach(opt => {
    opt.style.display = opt.textContent.toLowerCase().includes(search) ? 'block' : 'none';
  });
  document.getElementById('languageList').classList.add('show');
}

function selectLanguage(code, name) {
  document.getElementById('languageSearch').value = name;
  document.getElementById('selectedLanguage').value = code;
  document.getElementById('languageCode').value = code;
  document.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('selected'));
  document.querySelector(`.language-option[data-code="${code}"]`).classList.add('selected');
  document.getElementById('languageList').classList.remove('show');
  
  // Auto-filter countries based on selected language
  filterCountriesByLanguage(code);
}

function filterCountriesByLanguage(langCode) {
  const checkboxes = document.querySelectorAll('.country-checkbox');
  const filterInfo = document.getElementById('countryFilterInfo');
  const filterInfoText = document.getElementById('filterInfoText');
  
  // Get language name
  const langObj = languages.find(l => l.code === langCode);
  const langName = langObj ? langObj.name.split(' ')[0] : langCode.toUpperCase();
  
  let matchCount = 0;
  
  checkboxes.forEach(cb => {
    const countryLangs = cb.dataset.languages.split(',');
    const isMatch = countryLangs.includes(langCode);
    
    if (isMatch) {
      cb.classList.add('language-match');
      cb.style.display = 'flex';
      matchCount++;
    } else {
      cb.classList.remove('language-match');
      cb.style.display = 'none';
    }
  });
  
  // Show filter info
  if (matchCount > 0) {
    filterInfoText.textContent = `Showing ${matchCount} countries where ${langName} is spoken`;
    filterInfo.classList.add('show');
  } else {
    filterInfoText.textContent = `No countries found for ${langName}. Showing all countries.`;
    filterInfo.classList.add('show');
    // Show all if no matches
    checkboxes.forEach(cb => {
      cb.style.display = 'flex';
      cb.classList.remove('language-match');
    });
  }
  
  // Clear search input
  document.getElementById('countrySearch').value = '';
}

function clearLanguageFilter() {
  const checkboxes = document.querySelectorAll('.country-checkbox');
  checkboxes.forEach(cb => {
    cb.style.display = 'flex';
    cb.classList.remove('language-match');
  });
  document.getElementById('countryFilterInfo').classList.remove('show');
  document.getElementById('countrySearch').value = '';
}

function filterCountries() {
  const search = document.getElementById('countrySearch').value.toLowerCase();
  const checkboxes = document.querySelectorAll('.country-checkbox');
  const filterInfo = document.getElementById('countryFilterInfo');
  
  if (search) {
    // When searching, show all matching countries regardless of language filter
    filterInfo.classList.remove('show');
    checkboxes.forEach(cb => {
      const countryName = cb.textContent.toLowerCase();
      cb.style.display = countryName.includes(search) ? 'flex' : 'none';
    });
  } else {
    // When search is cleared, reapply language filter
    const currentLang = document.getElementById('selectedLanguage').value;
    filterCountriesByLanguage(currentLang);
  }
}

function selectTheme(theme) {
  document.querySelectorAll('.theme-card').forEach(card => card.classList.remove('selected'));
  document.querySelector(`.theme-card[data-theme="${theme}"]`).classList.add('selected');
  document.getElementById('selectedTheme').value = theme;
}

function toggleSocialMedia() {
  const toggle = document.getElementById('socialToggle');
  const section = document.getElementById('socialMediaSection');
  toggle.classList.toggle('active');
  section.classList.toggle('expanded');
}

function toggleNoFollow() {
  const toggle = document.getElementById('noFollowToggle');
  toggle.classList.toggle('active');
}

function getSelectedCountries() {
  const checked = document.querySelectorAll('#countryGrid input:checked');
  return Array.from(checked).map(cb => ({
    code: cb.value,
    name: cb.dataset.name
  }));
}

function generateCountryMetaTags(selectedCountries, langCode) {
  if (selectedCountries.length === 0) return '';
  
  let metaTags = '\n\nCOUNTRY-BASED SEO META TAGS:\n';
  metaTags += 'Include the following geo-targeting meta tags in the <head> section:\n';
  metaTags += `- <html lang="${langCode}">\n`;
  
  if (selectedCountries.length === 1) {
    const country = selectedCountries[0];
    metaTags += `- <meta name="geo.region" content="${country.code}">\n`;
    metaTags += `- <meta name="geo.placename" content="${country.name}">\n`;
    metaTags += `- <link rel="alternate" hreflang="${langCode}-${country.code.toLowerCase()}" href="[canonical-url]">\n`;
  } else {
    metaTags += '- Add hreflang tags for each target country:\n';
    selectedCountries.forEach(country => {
      metaTags += `  • <link rel="alternate" hreflang="${langCode}-${country.code.toLowerCase()}" href="[canonical-url]">\n`;
    });
    metaTags += `- <link rel="alternate" hreflang="x-default" href="[canonical-url]">\n`;
  }
  
  metaTags += '\nFor multi-country targeting:\n';
  metaTags += '- Use international-friendly content\n';
  metaTags += '- Include currency/measurement variations where relevant\n';
  metaTags += '- Use location-neutral date formats (e.g., 15 January 2024)\n';
  
  return metaTags;
}

function getThemeSpecificInstructions(theme, keyword) {
  const instructions = {
    blog: `
BLOG/CONTENT THEME PAGES:
Generate content-focused pages optimized for readers interested in "${keyword}".
- Homepage: Landing-page style with featured articles, recent posts grid
- Blog: Category listing page with pagination
- Author Page: Detailed author profile with article archive`,

    business: `
BUSINESS THEME PAGES:
Generate professional business pages for a company in the "${keyword}" industry.
- Homepage: Corporate landing with value propositions, client logos, CTA sections
- Services: Detailed service offerings with icons and descriptions
- Our Team: Professional team member profiles with roles and bios
- Testimonials: Client reviews and case study highlights
Business Category: Auto-detected from "${keyword}" - adjust content tone accordingly`,

    service: `
SERVICE THEME PAGES:
Generate service-provider pages for "${keyword}" services.
- Homepage: Service overview with benefits and trust signals
- Services: Individual service pages with detailed descriptions
- How It Works: Step-by-step process explanation
- Pricing: Service tiers or quote request form placeholder
- FAQ: Service-specific frequently asked questions`,

    ecommerce: `
E-COMMERCE THEME PAGES:
Generate product-focused pages for "${keyword}" products/store.
- Homepage: Hero banner, featured products, category highlights
- Products: Product listing grid with filter placeholders
- Categories: Category navigation page
- Shipping Info: Shipping policies and delivery information
- Return Policy: Return and refund policies`,

    portfolio: `
PORTFOLIO THEME PAGES:
Generate personal/creative portfolio for "${keyword}" work.
- Homepage: Hero section with name, tagline, featured work
- About Me: Personal story, skills, achievements
- Portfolio: Project gallery with case study format
- Services: Offered services with pricing indicators
- Testimonials: Client feedback and recommendations`,

    landing: `
LANDING PAGE THEME:
Generate a high-conversion landing page for "${keyword}".
- Homepage: Hero with CTA, features, social proof, final CTA
- Features: Detailed feature breakdown with benefits
- Pricing: Pricing tiers comparison table
- FAQ: Common questions and objections addressed`
  };
  
  return instructions[theme] || instructions.blog;
}

// Tab switching function
function switchTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  if (tab === 'seo') {
    document.querySelector('.tab-btn:first-child').classList.add('active');
    document.getElementById('seo-tab').classList.add('active');
  } else if (tab === 'image') {
    document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
    document.getElementById('image-tab').classList.add('active');
  } else if (tab === 'medium') {
    document.querySelector('.tab-btn:nth-child(3)').classList.add('active');
    document.getElementById('medium-tab').classList.add('active');
  }
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.language-dropdown')) {
    document.getElementById('languageList').classList.remove('show');
  }
});

function generatePrompt() {
  const pk = document.getElementById("primaryKeyword").value || "[Primary Keyword]";
  const sn = document.getElementById("siteName").value || "[Site Name]";
  const cu = document.getElementById("canonicalUrl").value || "[Canonical URL]";
  const tu = document.getElementById("targetUrl").value || "[Target URL]";
  const ta = document.getElementById("targetAnchor").value || "[Target Anchor]";
  const an = document.getElementById("authorName").value || "[Author Name]";
  const ab = document.getElementById("authorBio").value || "[Author Bio]";
  
  // NoFollow attribute
  const noFollowEnabled = document.getElementById("noFollowToggle").classList.contains('active');
  
  // New fields
  const selectedTheme = document.getElementById("selectedTheme").value;
  const langCode = document.getElementById("selectedLanguage").value;
  const langName = document.getElementById("languageSearch").value;
  const authorTitle = document.getElementById("authorTitle").value || "[Author Title]";
  const authorExpertise = document.getElementById("authorExpertise").value || "[Area of Expertise]";
  const authorExperience = document.getElementById("authorExperience").value || "";
  const authorCredentials = document.getElementById("authorCredentials").value || "";
  const blogFolderName = document.getElementById("blogFolderName").value || "blog";
  const postsPerPage = document.getElementById("postsPerPage").value;
  const includeCategoryPage = document.getElementById("includeCategoryPage").checked;
  
  // Get selected countries
  const selectedCountries = getSelectedCountries();
  const countryNames = selectedCountries.map(c => c.name).join(', ') || 'Global';
  
  // Social Media (only if toggle is active)
  const socialEnabled = document.getElementById("socialToggle").classList.contains('active');
  let socialString = "";
  
  if (socialEnabled) {
    const sMedium = document.getElementById("socialMedium").value;
    const sPinterest = document.getElementById("socialPinterest").value;
    const sX = document.getElementById("socialX").value;
    const sLinktree = document.getElementById("socialLinktree").value;
    const sLinkedin = document.getElementById("socialLinkedin").value;
    const sFacebook = document.getElementById("socialFacebook").value;

    if (sMedium || sPinterest || sX || sLinktree || sLinkedin || sFacebook) {
      socialString = "\n\nSOCIAL MEDIA INTEGRATION:\nInclude social media icons in the header and footer with links to:\n";
      if (sMedium) socialString += `- Medium: ${sMedium}\n`;
      if (sPinterest) socialString += `- Pinterest: ${sPinterest}\n`;
      if (sX) socialString += `- X (Twitter): ${sX}\n`;
      if (sLinktree) socialString += `- Linktree: ${sLinktree}\n`;
      if (sLinkedin) socialString += `- LinkedIn: ${sLinkedin}\n`;
      if (sFacebook) socialString += `- Facebook: ${sFacebook}\n`;
    }
  }

  // Map Embedding
  const mapPosition = document.getElementById("mapPosition").value;
  const mapEmbedCode = document.getElementById("mapEmbedCode").value;
  let mapEmbeddingInstructions = "";
  
  if (mapPosition !== "none" && mapEmbedCode.trim()) {
    const locationText = mapPosition === "body" ? "main content area (body section)" : "footer section at the bottom of the page";
    mapEmbeddingInstructions = `

MAP EMBEDDING:
Embed the following map code in the ${locationText}:

${mapEmbedCode}

Implementation instructions:
- Place the map in the ${mapPosition === "body" ? "main content area, typically in a dedicated section with proper heading" : "footer, in a styled container before or after other footer content"}
- Add a wrapper div with appropriate styling (max-width, centering, padding)
- Ensure the map is responsive and works well on mobile devices
- Add a heading/label if placed in body section (e.g., "Find Us", "Our Location", "Visit Us")
- Make sure the iframe has proper attributes: loading="lazy" for performance
- Add appropriate CSS to make the map container responsive`;
  }

  // Generate theme-specific instructions
  const themeInstructions = getThemeSpecificInstructions(selectedTheme, pk);
  const themePageList = themePages[selectedTheme].join('\n- ');
  
  // Generate country meta tags
  const countryMetaTags = generateCountryMetaTags(selectedCountries, langCode);

  // Author bio section
  let authorBioSection = `
AUTHOR BIO SECTION:
Add a comprehensive author bio section at the end of every content page with:
- Author Name: ${an}
- Title/Role: ${authorTitle}
- Area of Expertise: ${authorExpertise}`;
  
  if (authorExperience) {
    authorBioSection += `\n- Years of Experience: ${authorExperience}+ years`;
  }
  if (authorCredentials) {
    authorBioSection += `\n- Credentials: ${authorCredentials}`;
  }
  authorBioSection += `\n- Bio: ${ab}`;
  authorBioSection += `\n- Include author avatar placeholder
- Add "Written by" byline on articles
- Include author schema markup (Person schema)`;

  // Category page instructions
  let categoryPageInstructions = "";
  if (includeCategoryPage) {
    categoryPageInstructions = `

CATEGORY/BLOG LISTING PAGE:
Create a dedicated page that behaves as a category listing page with:

1. AUTO-FETCH BLOG SYSTEM:
   - Create a folder named "/${blogFolderName}/" for storing blog HTML files
   - The category page should be designed to display posts from this folder
   - Include placeholder JavaScript that would scan the folder for HTML files
   - Display ${postsPerPage} posts per page with pagination

2. BLOG POST CARD STRUCTURE:
   Each post card should display:
   - Featured image thumbnail
   - Post title (linked to full article)
   - Short excerpt (first 150 characters)
   - Author name and date
   - Category tags (if applicable)

3. SORTING & FILTERING:
   - Sort by newest first (based on filename convention: YYYY-MM-DD-title.html)
   - Include category filter buttons
   - Add search functionality placeholder

4. PAGINATION:
   - Show ${postsPerPage} posts per page
   - Include Previous/Next navigation
   - Display page numbers

5. MULTI-PAGE ANCHOR INSTRUCTIONS:
   Include a comment block in the code explaining:
   - How to add new blog posts (save HTML files to /${blogFolderName}/ folder)
   - Filename convention: YYYY-MM-DD-post-title.html
   - Required frontmatter/meta tags in each blog file
   - How the auto-fetch system works

6. SAMPLE BLOG TEMPLATE:
   Create a sample blog post template file (blog-template.html) with:
   - Proper heading structure
   - Meta tags for SEO
   - Author bio integration
   - Related posts placeholder
   - Social sharing buttons placeholder`;
  }

  const prompt = `
ROLE
You are a professional web developer and SEO specialist.

Your task is to generate a fully static, production-ready HTML website using clean semantic HTML5 and minimal CSS.

LANGUAGE & LOCALIZATION
Website Language: ${langName}
Language Code: ${langCode}
Target Countries: ${countryNames}
- All content must be written in ${langName}
- Use appropriate cultural references and terminology for the target region
- Format dates, numbers, and currency according to regional standards
${countryMetaTags}

WEBSITE THEME: ${selectedTheme.toUpperCase()}
${themeInstructions}

SITE DATA
Primary Keyword: ${pk}
Site Name: ${sn}
Canonical Homepage URL: ${cu}
Target External URL: ${tu}
Target Anchor Text: ${ta}
Author Name: ${an}
Author Bio: ${ab}

BUSINESS CATEGORY DETECTION:
Analyze the primary keyword "${pk}" to determine the business category.
Adjust content tone, terminology, and page structure based on detected category.
Examples:
- "Manga" keywords → Entertainment/Media content style
- "Agency" or "Services" → Professional B2B tone
- "Shop" or "Store" → E-commerce product focus
- "Consulting" or "Law" → Professional services authority tone

SITE STRUCTURE
Create the following pages as separate HTML files based on ${selectedTheme.toUpperCase()} theme:
- ${themePageList}

Each page must include:
- Header with navigation (logo + menu)
- Main content area
- Author bio section (on content pages)
- Footer with copyright and links
${socialString}
${mapEmbeddingInstructions}

DESIGN RULES
- Clean, modern, professional layout appropriate for ${selectedTheme} theme
- No sticky elements
- No blue or purple colors
- Use warm or neutral tones that match the ${selectedTheme} aesthetic
- Mobile responsive (CSS only, no JavaScript for layout)
- Consistent design language across all pages

HOMEPAGE SEO REQUIREMENTS
- Minimum 1000 words of valuable content
- Use "${pk}" once in H1 and once in one H2 only
- Do not repeat exact keyword in other headings
- Natural keyword variations in body content
- Proper heading hierarchy (H1 → H2 → H3)
- Include: title tag, meta description (155–160 chars), canonical, viewport, charset
- Add Open Graph tags for social sharing
- Include JSON-LD structured data appropriate for ${selectedTheme} theme

INTERNAL LINKING
Create one internal content piece related to the primary keyword (not exact match URL).
Link it naturally from the homepage.
Ensure proper internal link architecture between pages.

EXTERNAL LINKING
On the homepage, add one contextual link to:
${tu}
Using anchor text:
${ta}${noFollowEnabled ? '\nAdd rel="nofollow" attribute to this link' : ''}
Do not repeat this anchor elsewhere.
${authorBioSection}
${categoryPageInstructions}

FAQ + SCHEMA
- Minimum 5 FAQs related to "${pk}"
- HTML dropdown/accordion format
- Add valid FAQPage JSON-LD schema

TECHNICAL FILES
Generate:
- robots.txt with proper crawl directives
- sitemap.xml using canonical base URL
- .htaccess with basic optimizations (if applicable)

CODE QUALITY
- Semantic HTML5 elements (header, nav, main, article, section, aside, footer)
- Clean, readable indentation
- Minimal, well-organized CSS
- CSS custom properties (variables) for theming
- No external libraries or frameworks
- No placeholder text - generate real, valuable content
- All content must be in ${langName}
`;

  document.getElementById("result").value = prompt.trim();
}

function copyToClipboard() {
  const resultTextArea = document.getElementById("result");
  if (!resultTextArea.value) return;

  resultTextArea.select();
  resultTextArea.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(resultTextArea.value).then(function() {
    const btn = document.getElementById("copyBtn");
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.classList.add("copied");
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove("copied");
    }, 2000);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

// Image Prompt Generator Function
function generateImagePrompt() {
  const brandDomain = document.getElementById("imgBrandDomain").value || "[your-domain.com]";
  const headline = document.getElementById("imgHeadline").value || "[Your headline text here]";
  const aspectRatio = document.getElementById("imgAspectRatio").value;
  const resolution = document.getElementById("imgResolution").value;
  const outputStyle = document.getElementById("imgStyle").value;
  const logoPosition = document.getElementById("imgLogoPosition").value;
  const domainPosition = document.getElementById("imgDomainPosition").value;
  const overlayOpacity = document.getElementById("imgOverlayOpacity").value;
  const overlayHeight = document.getElementById("imgOverlayHeight").value;
  const accentColor = document.getElementById("imgAccentColor").value;
  const fontStyle = document.getElementById("imgFontStyle").value;
  const mapOverlay = document.getElementById("imgMapOverlay").value;
  const mapOpacity = document.getElementById("imgMapOpacity").value;
  const subjectPosition = document.getElementById("imgSubjectPosition").value;
  
  // Get selected social icons
  const socialIcons = [];
  if (document.getElementById("iconFacebook").checked) socialIcons.push("Facebook");
  if (document.getElementById("iconInstagram").checked) socialIcons.push("Instagram");
  if (document.getElementById("iconLinkedIn").checked) socialIcons.push("LinkedIn");
  if (document.getElementById("iconX").checked) socialIcons.push("X");
  const socialIconsText = socialIcons.length > 0 ? socialIcons.join(", ") : "None";

  // Build world map section based on selection
  let worldMapSection = "";
  if (mapOverlay === "yes") {
    worldMapSection = `
- Add a subtle world map silhouette behind the subjects:
  • Flat design
  • Monochrome
  • Opacity: ${mapOpacity}
  • Very subtle, non-distracting`;
  }

  const imagePrompt = `TASK:
Recreate the exact DESIGN, LAYOUT, and VISUAL STRUCTURE of the reference social media image.
Do NOT copy any existing brand identity from the reference.
Only replicate the composition, hierarchy, and styling.

The background image and logo will be uploaded directly in the AI interface.

BRANDING:
- Brand domain to display: ${brandDomain}
- Use this domain text for all visible branding.
- No other brand names, logos, or watermarks are allowed.

CANVAS:
- Aspect ratio: ${aspectRatio}
- Resolution: ${resolution}
- Output style: ${outputStyle}

BACKGROUND & IMAGE TREATMENT:
- Use the uploaded background image as the main visual.
- Subjects must be positioned ${subjectPosition}.
- Maintain realistic lighting and natural skin tones.${worldMapSection}

TOP SECTION (BRANDING):
- Place the uploaded logo in the ${logoPosition} corner.
  • Padding from edges: approx 6–8%
  • Balanced size, visible but not dominant
- Place the text "${brandDomain}" in the ${domainPosition} corner.
  • Color: white
  • Font: clean modern sans-serif
  • Weight: semi-bold

LOWER TEXT CONTAINER:
- Create a wide rounded rectangle across the LOWER THIRD of the image.
- Width: nearly full width with safe margins.
- Height: approximately ${overlayHeight} of the canvas.
- Background: black with transparency (${overlayOpacity} opacity).
- Corner radius: soft rounded edges.
- Add a subtle drop shadow for depth.

HEADLINE TEXT:
- Insert the following main caption text:
"${headline}"
- Font family: ${fontStyle}.
- Font weight: extra bold.
- Text color: white.
- Line spacing: tight but readable.
- Allow multi-line wrapping if needed.

HIGHLIGHT ACCENT:
- Automatically highlight the FINAL KEY WORD or PHRASE of the headline.
- Use a rounded pill shape behind the highlighted text.
- Pill background color: ${accentColor}
- Highlighted text color: white.
- Padding: balanced and modern.

BOTTOM DETAILS:
- Add small white social media icons (${socialIconsText}).
- Position: centered near the bottom of the text container.
- Icons must be minimal and evenly spaced.

COLOR RULES (STRICT):
- Primary text: white
- Accent / highlight: ${accentColor.split(" ")[0].toLowerCase()}
- Overlay container: black (transparent)
- No yellow
- No green
- No extra accent colors

QUALITY & CONSTRAINTS:
- Design must remain sharp and readable on mobile.
- No heavy filters, illustration effects, or stylization.
- No additional text beyond the headline and domain.
- No watermarks.
- Final output must feel premium and editorial.

NEGATIVE INSTRUCTIONS:
- Do NOT reference any real-world brand from the sample image.
- Do NOT add extra slogans, captions, or UI elements.
- Do NOT change layout hierarchy or proportions.`;

  document.getElementById("imageResult").value = imagePrompt.trim();
}

function copyImageToClipboard() {
  const resultTextArea = document.getElementById("imageResult");
  if (!resultTextArea.value) return;

  resultTextArea.select();
  resultTextArea.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(resultTextArea.value).then(function() {
    const btn = document.getElementById("copyImageBtn");
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.classList.add("copied");
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove("copied");
    }, 2000);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

// Medium Prompt Generator Function
function generateMediumPrompt() {
  const mainTitle = document.getElementById("mediumTitle").value || "[Your Article Title]";
  const mainKeyword = document.getElementById("mediumKeyword").value || "[Main Keyword]";
  const referenceInfo = document.getElementById("mediumReference").value || "[Reference information not provided]";
  const tone = document.getElementById("mediumTone").value;
  const length = document.getElementById("mediumLength").value;
  const audience = document.getElementById("mediumAudience").value;
  const focus = document.getElementById("mediumFocus").value;

  const mediumPrompt = `ROLE:
You are an expert Medium content writer trained in Google's Helpful Content Framework.
Your job is to write content for real users first, not for search engines.

OBJECTIVE:
Generate a high-quality Medium article using ONLY the provided inputs.
The article must be original, helpful, easy to read, and structured correctly.

INPUT PARAMETERS:
1. MAIN_POST_TITLE: ${mainTitle}
2. MAIN_KEYWORD: ${mainKeyword}
3. REFERENCE_INFORMATION: ${referenceInfo}

ADDITIONAL PREFERENCES:
- Writing Tone: ${tone}
- Target Length: ${length}
- Target Audience: ${audience}
- Content Focus: ${focus}

CONTENT RULES (STRICT — NO EXCEPTIONS):

STRUCTURE & FORMATTING:
- Use proper HTML-style headings:
  • One H1 (for the main title only)
  • Multiple H2 sections
  • H3 and H4 only when logically required
- Every paragraph MUST be under a heading.
- Do NOT write large paragraphs.
- Each paragraph should be concise, focused, and readable.
- Do NOT use bullet points, numbered lists, or separators.

KEYWORD RULES:
- Do NOT use "${mainKeyword}" in the introduction paragraph.
- Use "${mainKeyword}" ONLY ONCE.
- The keyword must appear naturally under a clearly relevant H2 heading.
- Do NOT repeat or stuff the keyword anywhere else.

HELPFUL CONTENT FRAMEWORK (MANDATORY):
Follow these principles strictly:
- Write for humans, not algorithms.
- Explain concepts clearly as if the reader is learning for the first time.
- Add context, reasoning, and clarity — not filler.
- Avoid generic statements, fluff, or SEO-style padding.
- Every section must answer a real user question or remove confusion.
- Do not exaggerate, speculate, or add unverified claims.
- If something is uncertain, explain it clearly instead of guessing.

CONTENT QUALITY RULES:
- Use natural, conversational, and informative language.
- Avoid robotic tone or promotional wording.
- Do not repeat the same idea in different words.
- Do not introduce information that is not supported by the reference input.
- Expand the reference information logically, but do not invent facts.

INTRODUCTION RULES:
- The introduction must explain the topic contextually.
- It must NOT contain the main keyword.
- Keep it short, clear, and curiosity-driven.

SECTION RULES:
- Each H2 should cover ONE clear subtopic.
- H3/H4 should only be used to clarify or expand a complex point.
- No section should feel bloated or stretched.

ENDING RULES:
- The conclusion should summarize understanding, not repeat headings.
- Do not add calls-to-action, promotions, or external links.
- End naturally and informatively.

OUTPUT REQUIREMENTS:
- Medium-ready formatting.
- Clean heading hierarchy.
- No bullet points.
- No long paragraphs.
- Fully compliant with Helpful Content principles.`;

  document.getElementById("mediumResult").value = mediumPrompt.trim();
}

function copyMediumToClipboard() {
  const resultTextArea = document.getElementById("mediumResult");
  if (!resultTextArea.value) return;

  resultTextArea.select();
  resultTextArea.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(resultTextArea.value).then(function() {
    const btn = document.getElementById("copyMediumBtn");
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.classList.add("copied");
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove("copied");
    }, 2000);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
