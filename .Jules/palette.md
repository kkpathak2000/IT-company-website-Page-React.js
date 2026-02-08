## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2026-02-08 - Professional Polish and Global Accessibility
**Learning:** Fixed navigation bars can obscure content when navigating via anchor links. Using `scroll-padding-top` on the `html` element ensures that the scrolled-to element remains visible below the header.
**Action:** Always include `scroll-padding-top` in CSS when using fixed headers.

**Learning:** Smooth scrolling improves the perceived quality of navigation but can cause issues for users with vestibular disorders.
**Action:** Wrap `scroll-behavior: smooth` in a `(prefers-reduced-motion: no-preference)` media query to provide a delightful experience while respecting accessibility preferences.
