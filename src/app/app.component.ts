import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesOptions } from './particles-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {

  id = "tsparticles";
  particlesOptions = particlesOptions;

  ngAfterViewInit() {

    anime({
      targets: '.title',
      translateX: window.innerWidth, // cool i can do this for responsiveness
      easing: 'easeInElastic',
      duration: function () { return anime.random( 1000, 3000 )},
      endDelay: function () { return anime.random( 0, 500 )}, // need end delay bc reverse lol
      direction: 'reverse'
    });
    
    // anime({
    //   targets: '.subtitle',
    //   translateX: -window.innerWidth,
    //   easing: 'easeInElastic',
    //   duration: function () { return anime.random( 1000, 3000 )},
    //   endDelay: function () { return anime.random( 0, 500 )}, // need end delay bc reverse lol
    //   direction: 'reverse'
    // });
    
    anime({
      targets: '.fancy-subtitle-letter',
      translateY: 50,
      direction: 'alternate',
      delay: anime.stagger(100),
      easing: 'easeInSine'
    });
  }

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }

  // async particlesInit(engine: Engine): Promise<void> {
  //   console.log(engine);
  //   await loadFull(engine);
  // }
}