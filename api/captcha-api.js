// captcha-api.js

let language = "en";

const translations = {
  es: { verify: "Verificar" },
  ko: { verify: "확인" },
  jp: { verify: "確認" },
  pt: { verify: "Verificar" },
  ch: { verify: "验证" },
  fr: { verify: "Vérifier" }
};

// Function to create and insert CAPTCHA widget
function createWidgetCaptcha(type, property) {
  if (type === "cloudflare" || type === 1) {
    // Create form and CAPTCHA widget for Cloudflare Turnstile
    const form = document.createElement("form");
    form.id = property.id || "verification-form"; // Use property.id or default to "verification-form"

    const captchaDiv = document.createElement("div");
    captchaDiv.className = "cf-turnstile";
    captchaDiv.setAttribute("data-sitekey", property.siteKey || "your-site-key"); // Use property.siteKey or default key
    form.appendChild(captchaDiv);

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "button";
    button.textContent = translations[language]?.verify || "Verify";
    form.appendChild(button);

    document.body.appendChild(form);

    // Load Cloudflare Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/script.js";
    script.onload = () => {
      console.log("Cloudflare Turnstile CAPTCHA loaded");
    };
    document.body.appendChild(script);

  } else if (type === "google" || type === 2) {
    // Create and configure Google reCAPTCHA widget
    const widget = document.createElement("div");
    widget.className = "g-recaptcha";
    widget.setAttribute("data-sitekey", property.siteKey || "your-site-key"); // Use property.siteKey or default key
    document.body.appendChild(widget);

    // Load Google reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.onload = () => {
      console.log("Google reCAPTCHA loaded");
    };
    document.body.appendChild(script);

  } else {
    console.log("Type is required: 'cloudflare' or 'google'");
  }
}

// Function to set language for CAPTCHA
function setLanguage(lang) {
  if (translations[lang]) {
    language = lang;
  } else {
    console.log("Language not supported. Falling back to default.");
  }
}

/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/captcha-api.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io@main/api/captcha-api.js"></script>
*/
