# Digital Business Card — Colby Adams

A tap-to-save digital business card for an **NFC tag**. Someone taps the tag,
their phone opens the card page, and one tap on **"Save to Contacts"** adds
Colby Adams to their phone.

## The URL to write to your NFC tag

```
https://clobbyy.github.io/digital-business-card/
```

> Want the absolute fewest taps (best on iPhones)? You can instead write the
> direct vCard link, which pops the "Add Contact" sheet with no landing page:
>
> ```
> https://clobbyy.github.io/digital-business-card/contact.vcf
> ```
>
> The landing-page URL above is recommended because it works reliably on every
> phone and looks like a real business card.

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | The styled business-card landing page (big "Save to Contacts" button + tap-to-call / tap-to-email). |
| `contact.vcf` | The vCard (contact file) that triggers the phone's "Add Contact" prompt. |
| `.github/workflows/deploy-pages.yml` | Publishes the site to GitHub Pages automatically on every push. Also turns Pages on for you the first time it runs. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

## Going live

The included GitHub Actions workflow enables and deploys Pages automatically —
no Settings clicks needed. After this is on your default branch, the site
publishes on each push. Check **Actions** and **Settings → Pages** for the live
URL (it may take a minute on the first run).

If you'd rather not use Actions, you can publish manually instead:
**Settings → Pages → Build and deployment → Source: Deploy from a branch →
Branch: `main` / `(root)` → Save.**

## Updating your info

Edit `contact.vcf` (the saved contact details) and `index.html` (what people
see on the page), then commit. The same NFC tag keeps working — you never need
to re-write the tag.
