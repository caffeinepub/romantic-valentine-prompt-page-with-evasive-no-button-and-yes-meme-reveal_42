# Specification

## Summary
**Goal:** Build a single-page romantic Valentine prompt that nudges the user to choose “Yes” and then reveals a themed meme image with a specific message.

**Planned changes:**
- Create a single-page pink-and-white Valentine UI that asks “Will you be my Valentine?” with exactly two prominent buttons: “Yes” and “No”, laid out responsively for iPad Chrome.
- Implement an evasive “No” button that moves away on hover (pointer devices) and on touch/pointer down (iPad), staying visible within the viewport and never triggering a decline flow.
- Implement a “Yes” success state that replaces the prompt with a celebratory view showing a locally served meme-style image containing the exact text: “No pen, no paper but you still draw my attention”.
- Add the required generated image(s) under `frontend/public/assets/generated` and render them in the success state via static asset paths.

**User-visible outcome:** On iPad Chrome, the user sees a Valentine question with “Yes” and an evasive “No”; tapping “Yes” transitions to a celebratory screen displaying the specified meme image and message.
