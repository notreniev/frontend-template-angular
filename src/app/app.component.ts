import { Component } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-frontend-angular';

  heroes$: Subject<any> = new Subject<any>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(){
    const heroes = await firstValueFrom(this.heroService.getHeroes());
    this.heroes$.next(heroes);
  }

}
