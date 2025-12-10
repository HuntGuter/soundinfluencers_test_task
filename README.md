SoundInfluencers — Frontend Test Task
Description

This project implements two frontend tasks from the SoundInfluencers test assignment:

an animated loader component

a draggable glass-morphism effect built on top of text content

Both components were developed with React and pure CSS based on the provided Figma layouts.

Preview

Animated Loader

![Loader Preview](./screenshots/loader.png)

Glass Effect

![Glass Preview](./screenshots/glass.png)

Technologies Used

React 18 — component-based UI architecture

Vite — fast development tooling

CSS — custom animations, layout, styling

CSS Keyframe Animations — for the loader motion

React Hooks (useRef, useEffect) — for DOM interaction and drag logic

Native DOM Events (mousemove, mouseup) — responsive drag behavior

Bounding Client Rect API — precise element positioning

Glassmorphism Techniques — blur, gradients, layering effects

Task Structure
Part 1 — Animated Loader Component

The first task required recreating an animated loader based on the provided Figma design. The component consists of nine vertical bars with different heights arranged in a centered layout. Each bar animates its opacity with a delayed wave-like sequence. The animation was implemented using pure CSS keyframes, without external libraries. The loader is built as a standalone, reusable React component.

Part 2 — Glassmorphism Overlay Effect

The second task involved creating a draggable glass-style overlay positioned on top of text. The effect uses layered semi-transparent backgrounds, gradients, borders, shadows, and a blur filter to replicate the Figma design. The element is draggable within the container boundaries using React refs and native DOM mouse events. The drag logic ensures smooth interaction, boundary constraints, and no unnecessary re-renders.

How to Run the Project
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

Key Features

Animated loader reproduced precisely from Figma

Pure CSS keyframe animation with staggered timing

Glassmorphism overlay with blur, gradients, and shadows

Draggable glass element with smooth, native interaction

Boundary-restricted movement inside the container

Optimized React implementation using useRef and DOM events

Repository Structure
src/
├── App.jsx              # Main application component
├── loader.css           # Styles for the animated loader
├── glass.css            # Styles for the glassmorphism effect
├── glass.jsx            # Draggable glass overlay component
├── App.css              # Global app styles

Author

Mykyta Olshanskyi
Frontend Developer

GitHub: https://github.com/HuntGuter

LinkedIn: https://www.linkedin.com/in/huntguter/