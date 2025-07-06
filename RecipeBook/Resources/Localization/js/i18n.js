function setLang(lang) {
  console.log("Setting language to:", lang); // для перевірки

  fetch(`/RecipeBook/Resources/Localization/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) el.textContent = data[key];
      });
      document.documentElement.lang = lang;
    })
    .catch(err => console.error("i18n error:", err));
}

window.addEventListener("DOMContentLoaded", () => setLang("en"));