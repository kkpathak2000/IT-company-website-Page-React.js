## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2026-02-04 - [Back to Top Micro-UX]
**Learning:** For long landing pages, a "Back to Top" button is a classic micro-UX win. Leveraging Bootstrap utility classes can significantly reduce custom CSS and help meet tight line-limit constraints.
**Action:** Use 'position-fixed bottom-0 end-0 m-4 rounded-circle shadow' for quick, accessible floating buttons. Always prefer window.scrollY over window.pageYOffset.

## 2026-02-05 - Character Counters and JSX Hygiene
**Learning:** For accessibility on dark backgrounds (#1E1E2E), avoid standard 'text-muted' for feedback text; instead, use high-contrast accent colors like Cyan (#8BE9FD) which provides 11.85:1 contrast. Implementing `aria-live="polite"` on character counters ensures screen reader users receive timely updates without being interrupted.
**Action:** Use `aria-live="polite"` for real-time input feedback and verify contrast ratios against the theme background.

**Learning:** Malformed JSX (e.g., unclosed tags) in a single component can cause the entire test suite (including unrelated components) to fail with cryptic syntax errors.
**Action:** Prioritize fixing syntax errors in the footer or navbar first, as these are often the root cause of global build or test failures.
