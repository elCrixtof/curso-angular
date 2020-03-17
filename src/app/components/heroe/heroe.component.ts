import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heores.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  casa: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService 
    ) {
      this.activatedRoute.params.subscribe(params => {
        this.heroe = this.heroesService.getHeroe(params[ 'id' ]);
        // this.casa = this.getCasa(this.heroe.casa);
        console.log(this.heroe);
    });
  }

  // getCasa( casa ){
  //   if (casa == 'DC'){
  //     return 'assets/img/DC.png';
  //   }
  //   if (casa == 'Marvel'){
  //     return 'assets/img/Marvel.png';
  //   }
  // }

}
