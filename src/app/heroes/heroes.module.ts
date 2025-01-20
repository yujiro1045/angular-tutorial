import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
})
export class HeroesModule {}
