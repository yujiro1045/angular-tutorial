import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'superman';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'batman';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetHero(): void {
    this.name = 'superman';
    this.age = 30;
  }
}
