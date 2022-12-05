import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrl: string='';


  updatePic(eventData: Event) :void{
   const file= (eventData.target! as HTMLInputElement).files!.item(0);  // safe navigation operator
    // Blob - URL convertion
    if(file) {
     this.imageUrl= `url(${URL.createObjectURL(file)})`; // we have to give that this file won't be null
    }else {
      this.imageUrl="";
    }
  }

  removePic(file: HTMLInputElement) {
    file.value="";
    this.imageUrl='';

  }
}
