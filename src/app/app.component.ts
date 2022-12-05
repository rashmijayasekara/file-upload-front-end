import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly apiUrl:string='http://localhost:8080/upload-app/api/uploads'
  imageUrl: string='';
  fullName:string='';
  username:string='';
  password:string='';


  constructor(private http:HttpClient) {
  }

  updatePic(eventData: Event) :void{
   const file= (eventData.target! as HTMLInputElement).files!.item(0);  // safe navigation operator
    // Blob - URL convertion
    if(file) {
     this.imageUrl= `url(${URL.createObjectURL(file)})`;
    }else {
      this.imageUrl="";
    }
  }

  removePic(file: HTMLInputElement) :void{
    file.value="";
    this.imageUrl='';

  }

  signUp(file: File| null) :void{
    const formData=new FormData();
    formData.append('fullName',this.fullName);
    formData.append('username',this.username);
    formData.append('password',this.password);
    if (file)formData.append('profilePic',file);
    this.http.post(this.apiUrl, formData).subscribe();
  }
}
