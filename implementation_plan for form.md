# Create Callback Form and Thank-You Pages for Four City Landing Pages

This plan covers the implementation of a new, high-converting immediate callback form and personalized thank-you pages for each of the four city landing pages (Bangalore, Chennai, Hyderabad, and Mumbai). It also configures the redirection of both the new form and the existing contact forms to the respective thank-you pages.

## User Review Required

> [!IMPORTANT]
> - **Redirection Target**: Users will be redirected to relative static HTML thank-you pages (e.g., `bangalore-thankyou.html`) placed in the `public/` directory of each city's React project. This ensures that custom server environments (e.g., subfolder hosting under `/ads/[city]/`) correctly serve the thank-you pages and allow GTM (Google Tag Manager) tracking.
> - **Analytics & Tracking**: We will preserve the Google Tag Manager tracking snippets exactly in the `<head>` of the thank-you pages for the cities where they are active (Bangalore, Chennai, and Mumbai). Hyderabad does not have GTM tags in its original HTML, so we will omit it there.

## Open Questions

None. The user instructions in [smallform.md](file:///d:/landingpages/ads/smallform.md) are clear and precise.

---

## Proposed Changes

### 1. General & Reusable Components

#### [NEW] [CallbackForm.jsx](file:///d:/landingpages/ads/bangalore/src/CallbackForm.jsx)
We will create a reusable React component `CallbackForm.jsx` (copied or created for each of the 4 city folders) that implements the immediate callback form. 
- Form Heading: `"Get an Immediate Quote in 10 Mins"`
- Design: High-end responsive card with a glowing/pulsing "Live Callback" indicator, modern input styles with country code prefix `+91`, and clean UX.
- Inputs:
  1. Phone input: 10-digit validation, filters out non-digits, requires numbers starting with `[6-9]`.
  2. Hidden message input: Automatically set to `[city] landingpage` (e.g. `bangalore landingpage`).
- Action: Submits to Google App Script via POST and then redirects the browser to `[city]-thankyou.html`.

---

### 2. City-Specific Code Integration

We will modify/create files for each of the 4 cities. The changes for each city follow a parallel structure:

### Bangalore

#### [MODIFY] [App.js](file:///d:/landingpages/ads/bangalore/src/App.js)
- Import and render `<CallbackForm city="bangalore" />` exactly after `<HeroSection />`.

#### [MODIFY] [ContactUs.jsx](file:///d:/landingpages/ads/bangalore/src/ContactUs.jsx)
- Update the form submission handler to redirect the browser to `bangalore-thankyou.html` after successful fetch submission.

#### [NEW] [CallbackForm.jsx](file:///d:/landingpages/ads/bangalore/src/CallbackForm.jsx)
- The React callback form component for Bangalore.

#### [NEW] [bangalore-thankyou.html](file:///d:/landingpages/ads/bangalore/public/bangalore-thankyou.html)
- A beautifully designed static thank-you page with a green success checkmark animation, Google Tag Manager container `GTM-NV95DF7K`, and local Bangalore office contact details.

---

### Chennai

#### [MODIFY] [App.js](file:///d:/landingpages/ads/chennai/src/App.js)
- Import and render `<CallbackForm city="chennai" />` exactly after `<HeroSection />`.

#### [MODIFY] [ContactUs.jsx](file:///d:/landingpages/ads/chennai/src/ContactUs.jsx)
- Update the form submission handler to redirect the browser to `chennai-thankyou.html` after successful fetch submission.

#### [NEW] [CallbackForm.jsx](file:///d:/landingpages/ads/chennai/src/CallbackForm.jsx)
- The React callback form component for Chennai.

#### [NEW] [chennai-thankyou.html](file:///d:/landingpages/ads/chennai/public/chennai-thankyou.html)
- A beautifully designed static thank-you page with a green success checkmark animation, Google Tag Manager container `GTM-NV95DF7K`, and local Chennai office contact details.

---

### Hyderabad

#### [MODIFY] [App.js](file:///d:/landingpages/ads/hyderabad/src/App.js)
- Import and render `<CallbackForm city="hyderabad" />` exactly after `<HeroSection />`.

#### [MODIFY] [ContactUs.jsx](file:///d:/landingpages/ads/hyderabad/src/ContactUs.jsx)
- Update the form submission handler to redirect the browser to `hyderabad-thankyou.html` after successful fetch submission.

#### [NEW] [CallbackForm.jsx](file:///d:/landingpages/ads/hyderabad/src/CallbackForm.jsx)
- The React callback form component for Hyderabad.

#### [NEW] [hyderabad-thankyou.html](file:///d:/landingpages/ads/hyderabad/public/hyderabad-thankyou.html)
- A beautifully designed static thank-you page with a green success checkmark animation (no GTM tag as Hyderabad doesn't use GTM), and local Hyderabad office contact details.

---

### Mumbai

#### [MODIFY] [App.js](file:///d:/landingpages/ads/mumbai/src/App.js)
- Import and render `<CallbackForm city="mumbai" />` exactly after `<HeroSection />`.

#### [MODIFY] [ContactUs.jsx](file:///d:/landingpages/ads/mumbai/src/ContactUs.jsx)
- Update the form submission handler to redirect the browser to `mumbai-thankyou.html` after successful fetch submission.

#### [NEW] [CallbackForm.jsx](file:///d:/landingpages/ads/mumbai/src/CallbackForm.jsx)
- The React callback form component for Mumbai.

#### [NEW] [mumbai-thankyou.html](file:///d:/landingpages/ads/mumbai/public/mumbai-thankyou.html)
- A beautifully designed static thank-you page with a green success checkmark animation, Google Tag Manager container `GTM-NV95DF7K`, and local Mumbai office contact details.

---

## Verification Plan

### Automated Tests
We will build the projects locally to verify that there are no syntax, import, or build errors.
- Run `npm run build` in `d:\landingpages\ads\bangalore` to ensure it compiles successfully.

### Manual Verification
1. Open the applications or review the React source code.
2. Confirm the Callback form is positioned below the Hero section.
3. Test inputs:
   - Ensure non-numeric characters are blocked.
   - Verify phone numbers that do not match `[6-9][0-9]{9}` show immediate user-friendly validation errors.
   - Verify successful submission triggers redirection logic.
4. Review HTML output of the thank-you pages to ensure details (address, email, phone, and GTM ids) match their respective configurations.
