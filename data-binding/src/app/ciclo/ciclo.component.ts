import { Component, 
         AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
         OnChanges,
         OnDestroy,
         DoCheck,
         OnInit,
         Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() valorInicial: number = 10;


  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
