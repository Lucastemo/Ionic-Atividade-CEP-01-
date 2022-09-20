import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cep: string;
  info: any;
  constructor(private http: HttpClient) {}

  buscar(){
    this.http.get(`viacep.com.br/ws/${this.cep}/json/`).subscribe(res=>{
      this.info=res;
    });
  }
  ionViewDidEnter() {}
}
