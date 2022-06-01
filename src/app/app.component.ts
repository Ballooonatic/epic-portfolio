import { Component } from '@angular/core';
import * as anime from 'animejs';
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesOptions } from './particles-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  id = "tsparticles";
  particlesOptions = particlesOptions;

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadFull(engine);
  }
}