## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2026-02-04 - [Back to Top Micro-UX]
**Learning:** For long landing pages, a "Back to Top" button is a classic micro-UX win. Leveraging Bootstrap utility classes can significantly reduce custom CSS and help meet tight line-limit constraints.
**Action:** Use 'position-fixed bottom-0 end-0 m-4 rounded-circle shadow' for quick, accessible floating buttons. Always prefer window.scrollY over window.pageYOffset.

## 2025-05-16 - Character constraints and Footer accessibility
**Learning:** For contact forms, providing a character counter with `aria-live="polite"` gives users immediate feedback on input limits without interrupting their flow, making the constraint discoverable and accessible.
**Action:** Always include a visual counter for fields with `maxLength` and ensure it's announced by screen readers using `aria-live`.

**Learning:** Decorative visual separators like "|" in navigation bars can clutter screen reader output if not properly hidden.
**Action:** Apply `aria-hidden="true"` to purely decorative elements that don't provide semantic value to assistive technologies.
