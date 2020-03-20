import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heores.service';
import { HeroesComponent } from '../heroes/heroes.component';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  buscar: Heroe[] = [];
  @Input() heroe: any = {};
  @Input() index: any = {};

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private _router:Router) {
                this.activatedRoute.params.subscribe(params => {
                  this.buscar = this._heroesService.buscarHeroes(params[ 'termino' ]);
                  // this.casa = this.getCasa(this.heroe.casa);
                  console.log(this.buscar);
              });
   }

  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx]);
  } 

  ngOnInit(): void {
  }
}
