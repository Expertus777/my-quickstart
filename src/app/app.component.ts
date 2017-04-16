import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span>
        <span class="title">{{hero.name}}</span>
      </li>
    </ul>
    <div *ngIf="selectedHero" class="hero-detail">
      <h2>{{selectedHero.name}}</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name:</label>
        <input type="text" [(ngModel)]="selectedHero.name" placeholder="name">
        <button (click)="closeDetails()">Close details!</button>
      </div>
    </div>
  `,
  styles: [`
    .hero-detail {
      display: inline-block;
      vertical-align: top;
    }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .title {
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
    .heroes {
      display: inline-block;
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
      margin-right: 60px;
    }

    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      /*border-radius: 4px;*/
    }

    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }

    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .2em;
      transition: left 0.2s ease-out;
    }

    .heroes .text {
      position: relative;
      top: -3px;
    }

    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #45c347;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      /*border-radius: 4px 0 0 4px;*/
    }
    button{
      display: block;
      background: #45c347;
      color: white;
      border: none;
      height: 32px;
      margin-top: 20px;
      padding: 0 20px;
      font-size: 14px;
      cursor: pointer;
    }
  `]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  };

  closeDetails(): void {
    this.selectedHero = null;
  }
}
