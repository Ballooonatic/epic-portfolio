import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>; //ty stackoverflow
  context!: CanvasRenderingContext2D;
  innerWidth?: number;
  innerHeight?: number;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  ngAfterViewInit(): void {
    // apparently the getContext method could possibly return null and TS really doesn't like that. wonder if there's a better way
    // @ts-ignore
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.fillStyle = 'white'
    this.context.fillRect(100,100,10,10)
  }

  @HostListener('window:resize', ['$event']) //ty stackoverflow
  onResize(e: Event) {
    e.preventDefault()
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.table({
      h: window.innerHeight,
      w: window.innerWidth
    });
    
  }
}

// still having canvas sizing issues... actually i'm not, it looks like chrome's responsive / mobile tool has diff sizing