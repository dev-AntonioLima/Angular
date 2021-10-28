import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = 'abc';

 pessoa = {
   nome: 'def',
   idade: 20,
 };

}
