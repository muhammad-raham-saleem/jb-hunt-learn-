import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
  RouterOutlet,
  HeroesComponent,
  CommonModule,
  FormsModule,
  MessagesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
