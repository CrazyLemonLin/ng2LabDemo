import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword:string;

  doSearch(event:MouseEvent	| KeyboardEvent,ele:HTMLInputElement){

    if (event instanceof KeyboardEvent ) {
      var keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.keyCode!==13) {
        return;
      }
    }
    this.keyword=ele.value;
  }
}
