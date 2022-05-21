import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface Star {
  x: number;
  y: number;
  z: number;
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
  starsParams = { speed: 2, number: 50, extinction:4 }

  ngOnInit(): void {
    this.canvasWidth = window.innerWidth - 5; // shaving 5px off removes the scroll bar. they'll never know... 
    this.canvasHeight = window.innerHeight - 5; // wonder if there's a better way though.
  }
  
  ngAfterViewInit(): void {
    
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // window.cancelAnimationFrame(this.updateStars);
    for (let i = 0; i < this.starsParams.number; i++) {
      this.stars[i] = this.createStar();
    }

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.stars.forEach((star) => {
      this.ctx.fillRect(star.x, star.y, 5, 5)
  });
    
    // this.updateStars();
  }

  createStar(): Star {
    return {
      x: Math.random() * this.canvasWidth,
      y: Math.random() * this.canvasHeight,
      z: Math.random() * this.canvasWidth,
    }
  }

  updateStars = () => { // when passed to requestAnimationFrame, "this" gets changed. hmmm
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d'); // apparently the getContext method could possibly return null and 
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // TS really doesn't like that. wonder if there's a better way
    
    this.stars.forEach((star) => {
        this.ctx.fillRect(star.x, star.y, 5, 5)
    });
    window.requestAnimationFrame(this.updateStars)
  }

  @HostListener('window:resize', ['$event']) //ty stackoverflow
  onResize(e: Event) {
    e.preventDefault()
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    // console.table({
    //   h: window.innerHeight,
    //   w: window.innerWidth
    // });
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
