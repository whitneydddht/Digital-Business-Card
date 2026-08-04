# Digital Business Card — Colby Adams

A tap-to-save digital business card for an **NFC tag**. Someone taps the tag,
their phone opens the card page, and one tap on **"Save to Contacts"** adds
Colby Adams to their phone.

## The URL to write to your NFC tag

```
https://colbyadams.io/
```

*(Custom domain set via the `CNAME` file. The default GitHub Pages URL
`https://clobbyy.github.io/digital-business-card/` also works.)*

> Want the absolute fewest taps (best on iPhones)? You can instead write the
> direct vCard link, which pops the "Add Contact" sheet with no landing page:
>
> ```
> https://colbyadams.io/contact.vcf
> ```
>
> The landing-page URL above is recommended because it works reliably on every
> phone and looks like a real business card.

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | The styled business-card landing page (big "Save to Contacts" button + tap-to-call / tap-to-email). |
| `contact.vcf` | The vCard (contact file) that triggers the phone's "Add Contact" prompt. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

## Going live (one-time, ~2 minutes)

1. **Make the repo public** (GitHub Pages is free only on public repos):
   **Settings → General → Danger Zone → Change repository visibility →
   Public**. A business card is public info anyway. *(Skip this if you're on a
   paid GitHub plan and want to keep the repo private — Pages works on private
   repos with Pro/Team/Enterprise.)*

2. **Turn on Pages:** **Settings → Pages → Build and deployment →
   Source: _Deploy from a branch_ → Branch: `main` (or
   `claude/nfc-business-card-url-3y81ka`) → Folder: `/ (root)` → Save.**

Wait ~1 minute, then your card is live at the URL above. Write that URL to your
NFC tag and you're done.

## Updating your info

Edit `contact.vcf` (the saved contact details) and `index.html` (what people
see on the page), then commit. The same NFC tag keeps working — you never need
to re-write the tag.
