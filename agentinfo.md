# Agent Info

> **Note:** Please keep this file up to date! This acts as the knowledge base for this repository.

## Project overview
A small, static web project that presents an interactive "I'm sorry" envelope scene (scene 1), transitions to a second scene featuring a centered apology gif inside a brown circle, and leads to a third scene with a pastel off-white background and dotted frame.

## Pages
- index.html: Scene 1 with the envelope interaction and Dudu waving gif button.
- scene2.html: Scene 2 with a centered brown circle containing the sorry.gif.
- scene3.html: Scene 3 featuring an empty pastel off-white background and a dotted frame.

## Styling
- styles.css: Core layout, envelope visuals, baby pink heart seal and wipe transitions, cursor swaps, and scene 2/3 styling.
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
