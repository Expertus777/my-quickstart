import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero" class="hero-detail">
      <h2>{{hero.name}}</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name:</label>
        <input type="text" [(ngModel)]="hero.name" placeholder="name">
        <br><br>
        <button (click)="closeDetails()">Close details!</button>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;

  closeDetails(): void {
    this.hero = null;
  }
}
