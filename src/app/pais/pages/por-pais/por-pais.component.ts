import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      h2{
        color: #fff;
      }
      li {
        cursor: pointer;
        background-color: rgb(25,25,25);
      }

      ul li a{
        background-color: rgb(25,25,25);
      }
      ul li:hover a{
        background-color: #0d6efd;
        color: #fff;
      }
      li:hover {
        background-color: #0d6efd;
      }
      .list-group-item{
        border: 1px solid #0d6efd;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = '';


  paises: Country[] = [];
  hayError: boolean = false;

  paisesSugeridos: Country[] = [];
  mostrarSugeridos: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugeridos = false;
    this.hayError = false;
    this.termino = termino

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises)=> {
        this.paises = paises;
      }, (err)=> {
        this.paises = [];
        this.hayError = true;
      });
  }

  sugerencias(termino: string){
    this.mostrarSugeridos = true;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe( 
        paises => this.paisesSugeridos = paises.slice(0,5),
        (err) => this.paisesSugeridos = []
      )
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
