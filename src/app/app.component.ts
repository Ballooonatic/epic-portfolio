import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { colorMix, Container, Engine } from "tsparticles-engine";
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
  michaelImgrund = 'MICHAEL IMGRUND'.split('')
  digitalExperiences = 'digital experiences'.split('')
  titleColor = -24;

  ngAfterViewInit() {

    anime({
      targets: '.fancy-title',
      translateY: [1, 0],
      delay: anime.stagger(150),
      rotate: function () { return anime.random( -3, 3 )},
      easing: 'spring(10, 100, 0, 30)',
    })

    anime({
      targets: '.fancy-title',
      duration: 5000,
      delay: 1500,
      color: () => {
        if (Math.random() < 0.5) {
          return `hsl(${this.titleColor += 24},${anime.random(60, 61)}%,${anime.random(50, 51)}%)`;
        } else {
          return `hsl(${anime.random(0, 360)},${anime.random(20, 80)}%,${anime.random(30, 90)}%)`;
        }
      },
    })

    anime({
      targets: '.title',
      translateX: window.innerWidth, // cool i can do this for responsiveness
      easing: 'easeInElastic(1, .3)',
      duration: function () { return anime.random( 1000, 3000 )},
      endDelay: function () { return anime.random( 0, 500 )}, // need end delay bc reverse lol
      direction: 'reverse'
    })
    
    anime({
      targets: '.subtitle',
      translateX: -window.innerWidth,
      easing: 'easeInElastic',
      duration: function () { return anime.random( 1000, 3000 )},
      endDelay: function () { return anime.random( 0, 500 )}, // need end delay bc reverse lol
      direction: 'reverse'
    });
    
    anime({
      targets: '.fancy-subtitle-letter',
      color: function () {
        return `rgb(
          ${anime.random(100, 256)},
          ${anime.random(100, 256)},
          ${anime.random(100, 256)}
        )`;
      },
      translateY: 200,
      rotate: anime.stagger([-360, 360]),
      skew: anime.stagger([-60, 60]),
      translateX: anime.stagger([-150, -100]),
      scale: function () { return anime.random(1, 2) },
      easing: 'easeInOutElastic(2, .4)',
      // easing: 'spring(1, 100, 5, 0)',
      duration: 3000,
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(100, {
        start: 1000,
        grid: [5, 10], // no idea how this works now lmao
      }),
    });

    anime({
      targets: '.heart',
      rotateY: 360,
      rotateZ: 360,
      duration: 3000,
      easing: 'linear',
      loop: true
    })

  }

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }

  // async particlesInit(engine: Engine): Promise<void> {
  //   console.log(engine);
  //   await loadFull(engine);
  // }
}