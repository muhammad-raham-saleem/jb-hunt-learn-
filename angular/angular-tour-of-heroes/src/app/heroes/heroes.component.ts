import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, UpperCasePipe, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[]=[];
  constructor(private heroService: HeroService){}
  selectedHero?:Hero;
  onSelect(hero: Hero): void{
    this.selectedHero=hero;
  }
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes =heroes);
  }
  ngOnInit(): void{
    this.getHeroes();
  }
}
