import { Component } from '@angular/core';
import { Header } from './components/template/header/header'
import { Footer } from './components/template/footer/footer'
import { Navigation } from './components/template/navigation/navigation'

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Navigation
  ],
  templateUrl: 'app.html'
})

export class App {

}
