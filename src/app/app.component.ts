import { Component } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Yo maan, this be heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] =[
  { id:11, name: 'Spiderman'},
  {id:12, name:'Superman'},
  {id:13, name:'WonderWoman'},
];