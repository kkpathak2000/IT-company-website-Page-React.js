## 2026-02-12 - [Navigation & Footer Accessibility]
**Learning:** Fixed navigation bars often obscure section headers when using anchor links, creating a disjointed user experience. Additionally, hardcoded footer years and generic placeholders reduce the perceived quality and professionalism of a site.
**Action:** Use `scroll-padding-top` in CSS to account for fixed navbar heights and implement dynamic year logic in the footer. Ensure all interactive elements (like footer links) have explicit `:focus-visible` styles to maintain accessibility for keyboard users.
