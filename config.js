/* =============================================================================
   config.js — THIS is the only file you edit. No coding required.
   Change any value below, save, commit. The card + vCard update automatically.
   Prefer a form? Open setup.html in a browser to fill this out visually.
   ========================================================================== */
window.CARD_CONFIG = {
  // Your live URL (used for the QR target, SEO, and the vCard's website field)
  url: "https://colbyadams.com/",

  // Identity
  name: "Colby Adams",
  initials: "CA",              // avatar text; leave "" to auto-use your initials
  title: "Technical Director",
  org: "Stockbridge Theatre",
  footer: "COLBYADAMS.COM",    // small text at the bottom of the card

  // Theme — any two hex colors (light shade + main shade)
  theme: {
    accent: "#14b8a6",         // main teal
    accent2: "#5eead4",        // lighter teal (icons, labels)
    onAccent: "#03231f"        // text color that sits on the accent (dark)
  },

  // Phones — set primary:true on your main number. dial is what actually dials
  // (E.164 with country code; use a comma for an extension pause).
  phones: [
    { label: "Cell",   value: "(603) 548-5547",            dial: "+16035485547",      primary: true },
    { label: "Office", value: "(603) 437-5200 ext. 5124",  dial: "+16034375200,5124" }
  ],

  // Emails
  emails: [
    { label: "Email", value: "coadams@pinkertonacademy.org" }
  ],

  // Links — icon can be: globe, linkedin, github, instagram, youtube, facebook,
  // x, tool, calendar, location  (defaults to globe)
  links: [
    { label: "Website",  value: "stockbridgetheatre.com",       url: "https://stockbridgetheatre.com",           icon: "globe" },
    { label: "STG Set",  value: "stgset.com",                   url: "https://stgset.com",                       icon: "tool" },
    { label: "LinkedIn", value: "linkedin.com/in/colby-adams",  url: "https://www.linkedin.com/in/colby-adams",  icon: "linkedin" }
  ]
};
