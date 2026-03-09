document.addEventListener("DOMContentLoaded", () => {
    const config = window.APP_CONFIG?.contactPage || {};
    const currentLang = document.documentElement.lang?.startsWith("en") ? "en" : "it";
    const text = config.content?.[currentLang] || config.content?.it || {};

    const companyName = config.companyName || "Tre di Picche";
    const website = config.website || "https://tredipicche.com";
    const email = config.email || "info@tredipicche.com";
    const linkedin = config.linkedin || "#";

    // Testi dinamici IT/EN
    document.getElementById("contacts-title").textContent = text.heroTitle || "Contatti";
    document.getElementById("contacts-hero-text").textContent =
      text.heroText || "Qui trovi i miei riferimenti professionali e un form rapido per scrivermi.";

    document.getElementById("business-info-title").textContent =
      text.infoTitle || "Riferimenti aziendali";
    document.getElementById("company-label").textContent =
      (text.companyLabel || "Azienda") + ":";
    document.getElementById("website-label").textContent =
      (text.websiteLabel || "Sito web") + ":";
    document.getElementById("email-label").textContent =
      (text.emailLabel || "Email") + ":";
    document.getElementById("linkedin-label").textContent =
      (text.linkedinLabel || "LinkedIn") + ":";

    document.getElementById("form-title").textContent =
      text.formTitle || "Scrivimi un messaggio";
    document.getElementById("form-text").textContent =
      text.formText ||
      "Compila il form: si aprirà la tua email con il messaggio già pronto da inviare.";

    document.getElementById("name-label").textContent =
      text.nameLabel || "Nome e cognome";
    document.getElementById("email-field-label").textContent =
      text.emailFieldLabel || "La tua email";
    document.getElementById("subject-label").textContent =
      text.subjectLabel || "Oggetto";
    document.getElementById("message-label").textContent =
      text.messageLabel || "Messaggio";
    document.getElementById("submit-label").textContent =
      text.submitLabel || "Invia messaggio";
    document.getElementById("form-note").textContent =
      text.note ||
      "Nota: in questa versione frontend il form apre il client email dell'utente.";

    document.getElementById("contact-name").placeholder =
      text.namePlaceholder || "Inserisci il tuo nome";
    document.getElementById("contact-email").placeholder =
      text.emailPlaceholder || "nome@email.com";
    document.getElementById("contact-subject").placeholder =
      text.subjectPlaceholder || "Scrivimi l'oggetto del messaggio";
    document.getElementById("contact-message").placeholder =
      text.messagePlaceholder || "Scrivi qui il tuo messaggio...";

    // Dati aziendali dinamici
    document.getElementById("company-name").textContent = companyName;

    const websiteLink = document.getElementById("website-link");
    websiteLink.href = website;
    websiteLink.textContent = website.replace(/^https?:\/\//, "");

    const emailLink = document.getElementById("email-link");
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;

    const linkedinLink = document.getElementById("linkedin-link");
    linkedinLink.href = linkedin;
    linkedinLink.textContent = linkedin === "#" ? "LinkedIn" : "Profilo LinkedIn";

    // Gestione form -> mailto
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name = document.getElementById("contact-name").value.trim();
      const senderEmail = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      const body = [
        currentLang === "en" ? "New message from Syllabus website" : "Nuovo messaggio dal sito Syllabus",
        "",
        `${currentLang === "en" ? "Name" : "Nome"}: ${name}`,
        `${currentLang === "en" ? "Email" : "Email"}: ${senderEmail}`,
        "",
        `${currentLang === "en" ? "Message" : "Messaggio"}:`,
        message
      ].join("\n");

      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
    });
  });