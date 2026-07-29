# Matrix theme customization scope

This branch changes presentation only.

## Changed

- Mantine theme palette and radii
- Global visual styling
- Decorative, non-interactive Matrix background
- Surface, control, typography, responsive, and reduced-motion styles

## Not changed

- API requests or response handling
- Subscription data and status calculations
- Routing
- Button handlers and links
- Application selection or installation flows
- Authentication, cookies, or session behavior
- Backend code

The `MatrixBackdrop` component is marked `aria-hidden`, has `pointer-events: none`, and does not read or mutate application state.
