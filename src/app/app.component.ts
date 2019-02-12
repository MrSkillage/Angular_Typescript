import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'my-first-project';

  counter:number = 0;

  onButtonClick(){
    this.counter++;
  }

  hide:boolean = true;

  onImageDBClick(){
    console.log("Image Clicked");
    if (this.hide == false) {
        this.hide = true;
    }
    else {
      this.hide = false;
    }
  }

}
