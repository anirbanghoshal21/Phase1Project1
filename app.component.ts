import { Component } from '@angular/core';
declare const saveDocument: any;
declare const loadDocument: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

 firstNumber: string;
secondNumber: string;
result: number;

constructor(){
this.firstNumber="";
this.secondNumber="";
this.result=0;
}
AddNumber(first: string, second:string){
 this.result=parseInt(first)+parseInt(second);
}
}