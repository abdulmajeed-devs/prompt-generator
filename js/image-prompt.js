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
