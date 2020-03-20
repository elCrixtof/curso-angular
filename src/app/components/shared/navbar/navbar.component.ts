import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heores.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  

  constructor(private _heroesService:HeroesService, 
              private _router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ) {
    this._router.navigate(['/buscar', termino]);
  }

  // verHeroesf ( nombre: Heroe[] ) {
  //   this._router.navigate(['/heroe', nombre]);
  // }

  // verHeroe(idx:number){
  //   this._router.navigate(['/heroe', idx]);
  // } 

}
