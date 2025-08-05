import { Component } from '@angular/core';
import { Header } from './components/template/header/header'
import { Footer } from './components/template/footer/footer'
import { Navigation } from './components/template/navigation/navigation'
import { MaterialImports } from './material.imports';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  imports: [
    Header,
    Footer,
    Navigation,
    ...MaterialImports
  ]
})

export class App {

}
