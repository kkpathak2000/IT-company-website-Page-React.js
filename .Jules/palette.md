## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2025-06-06 - Accessible Loading States and Contrast Awareness
**Learning:** Providing immediate visual and programmatic feedback during async operations (like form submission) is critical for UX. Using `aria-busy` and `aria-live` ensures screen reader users are aware of the transition. Also, when using brand colors for interactive states (hover/active), always verify WCAG contrast ratios as default "lightening/darkening" might fall below the 4.5:1 threshold for small text.
**Action:** Implement `isLoading` states with spinners and updated ARIA attributes for all form submissions. Use tools to verify color contrast on hover states.
