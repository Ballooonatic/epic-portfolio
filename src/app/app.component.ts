import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as anime from 'animejs';
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesOptions } from './particles-options';

interface Star {
  x: number;
  y: number;
  centerY: number;
  angle: number,
  dist: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>; //ty stackoverflow
  ctx!: CanvasRenderingContext2D;
  canvasWidth!: number;
  canvasHeight!: number; // let's see if i ever get in trouble for these "trust me, it's there" exclamation marks. wonder a better way...
  stars: Star[] = [];
  starsParams = { 
    number: 200,
    size: 5
  }
  id = "tsparticles";
  particlesOptions = particlesOptions;

  ngOnInit(): void {
    this.canvasWidth = window.innerWidth - 5; // shaving 5px off removes the scroll bar. they'll never know... 
    this.canvasHeight = window.innerHeight - 5; // wonder if there's a better way though.
  }
  
  ngAfterViewInit(): void {
    // this.createStars();
    // console.table(this.stars);
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  createStars() {
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // window.cancelAnimationFrame(this.updateStars);
    for (let i = 0; i < this.starsParams.number; i++) {
      const y = Math.random() * this.canvasHeight
      this.stars[i] = {
        x: Math.random() * this.canvasWidth,
        y: y,
        centerY: y,
        angle: Math.floor(Math.random()*(360)),
        dist: (Math.random() * 1.5) + 10 //innerCircleRad
      }
    }

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.stars.forEach((star) => {
      this.ctx.fillRect(star.x, star.y, this.starsParams.size, this.starsParams.size)
    });


    this.updateStars();
  }

  updateStars = () => { // when passed to requestAnimationFrame, "this" gets changed. hmmm
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d'); // apparently the getContext method could possibly return null and 
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // TS really doesn't like that. wonder if there's a better way
    
    this.stars.forEach((star) => {
      star.x += 0.5;
      star.y += 0.5;
      // star.y = star.centerY + Math.sin(star.angle) * star.dist;

      if (star.x > this.canvasWidth + 10) star.x = -10;
      if (star.y > this.canvasHeight + 10) star.y = -10;
      this.ctx.fillRect(star.x, star.y, this.starsParams.size, this.starsParams.size)
    });
    window.requestAnimationFrame(this.updateStars)
  }

  @HostListener('window:resize', ['$event']) //ty stackoverflow
  onResize(e: Event) {
    e.preventDefault()
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    // this.createStars(); // TODO: get resize working.............................
  }
}

// star construction used a function in a pure JS implementation... I can't do that.
// tried a separate class, but i need to be able to access AppComponent stff. 
// tried a function within the component method, nope. "this" conflicts with AppComponent
// tried returning an object (my own ratchet object constructor), but i need to access its "this" and AppCompnent "this"
// ig i'll have to make a star component. didn't want angular to have to do a whole component for it, rather render a bunch of lil elements, but...
// nevermind, I can just return a simple object. i think. I finally got to a place where i can compile but i'm not seeing anything render.
// doh, i hadn't set the fillStyle...

// still having canvas sizing issues... actually i'm not? it looks like chrome's responsive / mobile tool has diff sizing

// playing with animation libraries. some seem incompatible with my project. could i be importing stuff wrong? got animejs but not particle.js