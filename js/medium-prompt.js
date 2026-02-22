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
