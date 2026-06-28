# Beyond the Scan

A locked, presentation-style investor prototype built with React, Vite, and GSAP.

## Run locally

1. Open this folder in VS Code.
2. Open the integrated terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite, usually:

   ```text
   http://localhost:5173
   ```

## Build for production

```bash
npm run build
npm run preview
```

## Main files

- `src/data/slides.js` — all presentation copy and slide configuration
- `src/App.jsx` — page structure, theme logic, GSAP behavior, progress, and image placeholders
- `src/styles.css` — color system, typography, responsive behavior, and visual treatments
- `public/images/` — place generated or supplied images here

## Replacing an abstract visual with an image

In `src/App.jsx`, locate the `Visual` component. A detailed comment shows the exact `<img>` markup to use.

Example:

```jsx
<img
  src="/images/blood-pressure.webp"
  alt="Comparison between camera-based blood pressure estimation and a cuff reading."
  className="visual__image"
/>
```

For slide-specific images, the recommended next iteration is to add an `image` property to each slide object and render it conditionally inside `Visual`.

## Responsive behavior

- Desktop: pinned full-viewport deck; each next slide rises from the bottom and covers the current slide
- Tablet and mobile: conventional vertical scrolling
- Reduced motion: animation is disabled automatically

## Notes

Google Fonts are loaded remotely. To make the project fully offline, download and self-host the chosen fonts or replace them with system fonts.


## Version 0.2

This revision replaces the original sticky-card treatment with a true pinned slide stack. On desktop, the deck remains fixed in the viewport while each incoming slide animates upward over the previous slide. Mobile still uses standard vertical scrolling.


## Version 0.6 changes

- Condensed slides 02, 04, 05, 07, and 08 to match the content density of slide 10.
- Moved navigation into a fixed right-edge vertical rail.
- Removed the text slide-name label; the rail now shows only the two-digit screen number.


## Version 1.0 navigation

- The visible right-edge arrow and slide-number rail has been removed.
- Arrow keys, Page Up/Page Down, Home, End, and Space remain supported.
- Mouse-wheel and trackpad gestures now advance exactly one slide per deliberate vertical gesture.
- Scroll down moves forward; scroll up moves backward.
- Touch swipe up/down follows the same direction mapping.


## v0.9 wheel-control fix

- Uses the current slide index through a ref-safe navigation function.
- Treats each trackpad momentum burst as one gesture.
- Rearms wheel navigation only after 320 ms of no wheel events.
- Restores reliable navigation from slide 1 back to the hero.


## Version 1.0 wheel fix

Wheel navigation now uses a fixed 950 ms cooldown rather than waiting indefinitely for trackpad momentum to become completely quiet. The listener is attached at the document capture level so it is active immediately on page load.

## Version 1.1 changes

- Wheel navigation cooldown reduced from 950 ms to 400 ms.
- Fade transitions replaced by a layered card-stack transition.
- Moving forward brings the next card upward from below and preserves previous cards as visible layers.
- Moving backward sends the current card downward and removes one layer from the stack.
