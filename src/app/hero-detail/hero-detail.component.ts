import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService} from '../hero.service';
import { Hero} from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  selectedHero: Hero;
  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.selectedHero=hero);
  }

  goBack() {
    this.location.back();
  }

}