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

`ContactForm.tsx` submits with `fetch("/__forms.html", …)` as urlencoded data
including `form-name=contact`. We must POST to the **static `/__forms.html`
stub**, not to a page route like `/`: the Next.js function owns `/` and
swallows the POST (returns the page, records 0 submissions), whereas Netlify
serves `/__forms.html` directly and intercepts it for form handling — a
successful submission responds with Netlify's built-in "Thank you!" page. On
success the form swaps to our own thank-you message; there is no page
navigation.

> Quick check from a terminal — this should return Netlify's "Thank you!" page,
> and a submission should appear in the dashboard:
>
> ```
> curl -X POST https://boat3000.studio/__forms.html \
>   -H "Content-Type: application/x-www-form-urlencoded" \
>   --data-urlencode "form-name=contact" --data-urlencode "name=Test" \
>   --data-urlencode "email=test@example.com" --data-urlencode "message=hi"
> ```

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
