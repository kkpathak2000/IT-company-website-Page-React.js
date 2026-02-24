## 2024-05-23 - [Accessibility: Skip to Main Content Link]
**Learning:** A "Skip to main content" link is a critical accessibility feature for keyboard users to bypass repetitive navigation. It must be the first focusable element and have high contrast (WCAG AAA compliant) when visible.
**Action:** Always include a skip link targeting a semantic `<main id="main-content">` landmark in React applications.

## 2024-05-23 - [Form Usability: AutoComplete and Contrast]
**Learning:** Adding `autoComplete` to form fields significantly reduces friction for users. In dark-themed applications, standard `text-muted` classes often fail accessibility contrast checks; using `text-info` or similar brand-aligned high-contrast colors for helper text/counters is necessary.
**Action:** Audit forms for `autoComplete` and verify contrast of all micro-copy against dark backgrounds.
