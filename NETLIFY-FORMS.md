# Contact form (Netlify Forms)

The `/contact` form uses **Netlify Forms**. Two things make it work — one is in
this repo, the other is a one-time setting in the Netlify dashboard.

## 1. Form detection (in the repo — done)

The site runs on the **Next.js runtime**, so the live form is rendered by React
and Netlify's build-time crawler can't see it. To register the form anyway,
`public/__forms.html` ships a static, hidden copy of the form with the **same
field names** (`name`, `email`, `company`, `project_type`, `budget`, `message`,
`bot-field`). If you add or rename a field in `app/contact/ContactForm.tsx`,
update `public/__forms.html` to match.

## 2. Submission (in the repo — done)

`ContactForm.tsx` submits with `fetch("/", …)` as urlencoded data including
`form-name=contact`. We post to `/` (a static path Netlify intercepts) rather
than to the page route, because the Next.js function would otherwise swallow the
POST before Netlify's form processor sees it. On success the form swaps to a
thank-you message; there is no page navigation.

## 3. Email notifications (DASHBOARD — you must do this)

By default Netlify only **stores** submissions; it emails no one. To get mail at
`hello@boat3000.studio`:

1. Netlify → your site → **Forms**.
2. Confirm a form named **`contact`** is listed (it appears after the first
   deploy that includes `__forms.html`).
3. Open **Settings & notifications → Form notifications → Add notification →
   Email notification**.
4. Set the recipient to `hello@boat3000.studio` and save.

After that, send a real test submission from the live site and confirm it both
appears under **Forms** and arrives in the inbox.
