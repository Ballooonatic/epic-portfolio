import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>; //ty stackoverflow
  ctx!: CanvasRenderingContext2D;
  canvasWidth!: number;
  canvasHeight!: number;
  // let's see if i ever get in trouble for these "trust me, it's there" exclamation marks. wonder a better way...

  ngOnInit(): void {
    this.canvasWidth = window.innerWidth - 5;
    this.canvasHeight = window.innerHeight - 5;
    // shaving 5px off removes the scroll bar. they'll never know... wonder if there's a better way though.
  }
  
  ngAfterViewInit(): void {
    // window.requestAnimationFrame(this.drawStars)
    this.drawStars();
  }

  // when passed to requestAnimationFrame, "this" gets changed. hmmm
  drawStars = () => {
    // apparently the getContext method could possibly return null and TS really doesn't like that. wonder if there's a better way
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    // this.ctx.save();
    // this.ctx.fillStyle = 'white'
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    
    for (let i = 0; i < 500; i++) {
      const randomX = Math.random() * this.canvasWidth;
      const randomY = Math.random() * this.canvasHeight;
      const starSize = 2
      this.ctx.fillRect(randomX, randomY, starSize, starSize)
    }
    // this.ctx.rotate(4)
    // this.ctx.restore();
    window.requestAnimationFrame(this.drawStars)
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

// still having canvas sizing issues... actually i'm not? it looks like chrome's responsive / mobile tool has diff sizing