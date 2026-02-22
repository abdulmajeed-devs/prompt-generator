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

function getSelectedCountries() {
  const checked = document.querySelectorAll('#countryGrid input:checked');
  return Array.from(checked).map(cb => ({
    code: cb.value,
    name: cb.dataset.name
  }));
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
