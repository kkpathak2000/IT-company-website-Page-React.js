## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2026-02-04 - [Back to Top Micro-UX]
**Learning:** For long landing pages, a "Back to Top" button is a classic micro-UX win. Leveraging Bootstrap utility classes can significantly reduce custom CSS and help meet tight line-limit constraints.
**Action:** Use 'position-fixed bottom-0 end-0 m-4 rounded-circle shadow' for quick, accessible floating buttons. Always prefer window.scrollY over window.pageYOffset.

## 2026-02-16 - [CSS Scoping & Character Counter Contrast]
**Learning:** Global CSS classes like `.separator` can cause unintended layout regressions in other components (like the Footer) if not scoped. For accessibility on dark backgrounds (#1E1E2E), using the theme's cyan accent (#8BE9FD) for small feedback text provides superior contrast (11.85:1) compared to standard 'text-muted' variants.
**Action:** Always scope utility-like classes to their parent section and verify contrast ratios for new UI elements using the cyan accent color.
