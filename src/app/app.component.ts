import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  action() {
    $('#lModal').modal('show');
  }
  anotherAction() {
     $('#regModal').modal('show');
  }
}
