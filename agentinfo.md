# Agent Info

## Project overview
A small, static web project that presents an interactive "I'm sorry" envelope scene (scene 1) and transitions to a second scene featuring a centered apology gif inside a brown circle.

## Pages
- index.html: Scene 1 with the envelope interaction and Dudu waving gif button.
- scene2.html: Scene 2 with a centered brown circle containing the sorry.gif.

## Styling
- styles.css: Core layout, envelope visuals, heart seal, cursor swaps, and scene 2 circle styling.
- Uses the Newsreader Google Font.

## Behavior
- main.js: GSAP-driven intro and envelope animation, heart-seal hover/click behavior, magnetic mouse-follow effect, and a heart-shaped wipe transition to the next scene when the Dudu gif is clicked.

## Assets
- Assets/: Cursor paw images and gifs (Dudu waving and sorry.gif).

## Dependencies
- gsap: Animation and transitions.
- sharp: Included in package.json (not used in the runtime code).

## How to run
Open index.html in a browser. The Dudu gif button navigates to scene2.html.
