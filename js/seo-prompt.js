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

function generatePrompt() {
  const pk = document.getElementById("primaryKeyword").value || "[Primary Keyword]";
  const sn = document.getElementById("siteName").value || "[Site Name]";
  const cu = document.getElementById("canonicalUrl").value || "[Canonical URL]";
  const tu = document.getElementById("targetUrl").value || "[Target URL]";
  const ta = document.getElementById("targetAnchor").value || "[Target Anchor]";
  const an = document.getElementById("authorName").value || "[Author Name]";
  const ab = document.getElementById("authorBio").value || "[Author Bio]";
  
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
${ta}
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
