## 2025-06-06 - Focus Visibility and Active Navigation
**Learning:** Suppressing default browser focus outlines (e.g., `outline: none`) without a custom alternative breaks keyboard accessibility. Using a theme-consistent `box-shadow` provides a clear focus indicator that satisfies accessibility requirements while maintaining design aesthetics.
**Action:** Always check for `outline: none` in CSS and ensure a visible focus state exists for all interactive elements.

**Learning:** In single-page scroll-spy layouts, visual "active" classes on nav links are insufficient for assistive technology.
**Action:** Use `aria-current="page"` on the active navigation link to programmatically communicate the current section to screen readers.

## 2025-06-06 - Accessible Loading States and Contrast Awareness
**Learning:** Providing immediate visual and programmatic feedback during async operations (like form submission) is critical for UX. Using `aria-busy` and `aria-live` ensures screen reader users are aware of the transition. Also, when using brand colors for interactive states (hover/active), always verify WCAG contrast ratios as default "lightening/darkening" might fall below the 4.5:1 threshold for small text.
**Action:** Implement `isLoading` states with spinners and updated ARIA attributes for all form submissions. Use tools to verify color contrast on hover states.
## 2026-02-04 - [Back to Top Focus Management]
**Learning:** A "Back to Top" button that only scrolls the page visually creates a "focus trap" at the bottom for keyboard users. When the page scrolls to the top, the keyboard focus must be programmatically moved to the start of the content (e.g., a `<main>` element with `tabIndex="-1"`) to maintain a logical navigation flow.
**Action:** Always pair "scroll to top" actions with a programmatic `.focus()` call to the main content landmark.

## 2025-05-16 - Character constraints and Footer accessibility
**Learning:** For contact forms, providing a character counter with `aria-live="polite"` gives users immediate feedback on input limits without interrupting their flow, making the constraint discoverable and accessible.
**Action:** Always include a visual counter for fields with `maxLength` and ensure it's announced by screen readers using `aria-live`.

**Learning:** Decorative visual separators like "|" in navigation bars can clutter screen reader output if not properly hidden.
**Action:** Apply `aria-hidden="true"` to purely decorative elements that don't provide semantic value to assistive technologies.

## 2025-06-08 - ESM Test Mocking and High-Contrast Feedback
**Learning:** Jest tests can fail with `SyntaxError: Cannot use import statement outside a module` when React components import ESM-only libraries like `axios`. Mocking the affected component in `App.test.js` allows the suite to pass while still verifying the overall application shell. For UI feedback like character counters on dark themes (e.g., Dracula #1E1E2E), the default Bootstrap `text-muted` often fails WCAG contrast standards. Switching to `text-info` (#8BE9FD) provides a 15.17:1 ratio, ensuring accessibility.
**Action:** Mock components with ESM dependencies in unit tests. Use `text-info` or similar high-contrast classes for secondary feedback on dark backgrounds.

## 2025-06-07 - Semantic Footer and Navigation Accessibility
**Learning:** Malformed JSX in core components like Footer can crash the entire test suite. Beyond syntax, footer navigation should use explicit `aria-label` on `<nav>` and hide decorative separators (like "|") using `aria-hidden="true"` to prevent screen readers from reading them as characters.
**Action:** Ensure all navigation landmarks have unique labels and decorative elements are programmatically hidden.

## 2025-06-10 - Dark Theme Contrast and Skip Links
**Learning:** Default Bootstrap utility classes like `text-muted` often fail WCAG contrast standards on dark-themed backgrounds (e.g., #1E1E2E). Switching to `text-info` or other brand-consistent high-contrast colors is necessary for accessibility. Additionally, a "Skip to main content" link is essential for keyboard navigation on pages with fixed navigation bars.
**Action:** Always verify contrast of helper text and counters against dark backgrounds. Ensure `main-content` landmarks are present and focusable (via `tabIndex="-1"`) for skip link targets.

## 2025-06-08 - Keyboard Navigation and Fixed Headers
**Learning:** Fixed navigation bars often obscure the primary content when users navigate via keyboard tabs or internal anchors. A "Skip to main content" link is a critical micro-UX/a11y improvement that must be the first focusable element. It requires high `z-index` to appear over fixed elements and `tabIndex="-1"` on the target landmark to ensure cross-browser focus consistency.
**Action:** Implement skip links in apps with fixed headers. Always use `tabIndex="-1"` on the destination landmark.

## 2026-04-11 - CSS Consolidation and Maintenance
**Learning:** Redundant and conflicting CSS declarations for a single component (like 5+ definitions for `.skip-link`) lead to unpredictable behavior due to CSS specificity conflicts. Consolidating these into a single, themed implementation improves both maintainability and accessibility reliability.
**Action:** Audit CSS files for redundant class definitions. Prioritize a single, robust source of truth for accessibility features over scattered, partial overrides.

## 2026-04-12 - Actionable Contact Information and Descriptive Labels
**Learning:** Static contact information (phone, address) on landing pages creates friction. Converting them to actionable links (`tel:`, Google Maps) improves mobile usability. Pair these with descriptive `aria-label` and Dracula-themed `:focus-visible` styles (#FF79C6 outline) to maintain accessibility and brand consistency.
**Action:** Always convert static contact text to actionable protocols and verify contrast/focus states for all interactive elements.
