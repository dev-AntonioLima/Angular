import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

 url: string = 'http://loiane.com';
 cursoAngular: boolean = true;
 urlImagem = 'http://lorempixel.com/400/200/nature/';

 valorAtual: string = '';
 valorSalvo: any;

 isMouseOver: boolean = false;

 nome: string = 'Angular';

 

 constructor() { }

 ngOnInit(): void {
}


 botaoClicado(){
   alert("Botão Clicado");
 }

 onKeyUp(evento: KeyboardEvent){
this.valorAtual = (<HTMLInputElement>evento.target).value;
 }

 salvarValor(valor: any){
   this.valorSalvo = valor;
 }

 onMouseOverOut(){
this.isMouseOver = !this.isMouseOver;
 }



 getValor(){
   return 1;
 }

 getCurtirCurso(){
   return true;
 }

 

  

}
