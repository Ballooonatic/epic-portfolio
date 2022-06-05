declare module 'animejs/lib/anime.es.js';

// anime was difficult to get working. their docs instructions left me with 
// "no declaration found" error. tried installing @types/animejs first,
// didn't work for some reason. the alternative was adding this file.
// i messed around with a bunch of diff import strategies, trying to see
// what these would do: 
// import anime from 'animejs'; -> requires allowSyntheticDefaultImports flag
// import { anime } from 'animejs'; -> requires esModuleInterop flag and default import
// import * as anime from 'animejs'; -> seems to export a few things but not the 
// animation function i need to trigger stuff. interesting to see if i could
// get it working in diff / simpler ways but i'd rather do this and move on.