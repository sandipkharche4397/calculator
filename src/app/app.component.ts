import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fnum:number=0;
  snum:number=0;
  result:number=0;
  add(){
    this.result=this.fnum+this.snum
  }
}
