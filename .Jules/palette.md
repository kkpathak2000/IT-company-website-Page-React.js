## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2025-06-06 - Accessible Loading States and Contrast Awareness
**Learning:** Providing immediate visual and programmatic feedback during async operations (like form submission) is critical for UX. Using `aria-busy` and `aria-live` ensures screen reader users are aware of the transition. Also, when using brand colors for interactive states (hover/active), always verify WCAG contrast ratios as default "lightening/darkening" might fall below the 4.5:1 threshold for small text.
**Action:** Implement `isLoading` states with spinners and updated ARIA attributes for all form submissions. Use tools to verify color contrast on hover states.
## 2026-02-04 - [Back to Top Micro-UX]
**Learning:** For long landing pages, a "Back to Top" button is a classic micro-UX win. Leveraging Bootstrap utility classes can significantly reduce custom CSS and help meet tight line-limit constraints.
**Action:** Use 'position-fixed bottom-0 end-0 m-4 rounded-circle shadow' for quick, accessible floating buttons. Always prefer window.scrollY over window.pageYOffset.

## 2025-05-16 - Character constraints and Footer accessibility
**Learning:** For contact forms, providing a character counter with `aria-live="polite"` gives users immediate feedback on input limits without interrupting their flow, making the constraint discoverable and accessible.
**Action:** Always include a visual counter for fields with `maxLength` and ensure it's announced by screen readers using `aria-live`.

**Learning:** Decorative visual separators like "|" in navigation bars can clutter screen reader output if not properly hidden.
**Action:** Apply `aria-hidden="true"` to purely decorative elements that don't provide semantic value to assistive technologies.
## 2025-06-07 - Semantic Footer and Navigation Accessibility
**Learning:** Malformed JSX in core components like Footer can crash the entire test suite. Beyond syntax, footer navigation should use explicit `aria-label` on `<nav>` and hide decorative separators (like "|") using `aria-hidden="true"` to prevent screen readers from reading them as characters.
**Action:** Ensure all navigation landmarks have unique labels and decorative elements are programmatically hidden.

## 2026-02-19 - Accessibility Foundations: Skip Links and Form Usability
**Learning:** A "Skip to content" link is a foundational accessibility requirement for keyboard users in apps with repetitive navigation. It must be the first focusable element and target a semantic <main> landmark. Additionally, the default Bootstrap 'text-muted' class often fails WCAG contrast requirements on dark themes; using a theme-consistent accent color (like Cyan #8BE9FD) ensures secondary information like character counters remains legible.
**Action:** Always include a skip link in the main App structure and verify that secondary text (counters, labels) meets a 4.5:1 contrast ratio against dark backgrounds.
