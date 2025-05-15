import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messaggio = '';
  title = 'Frontend';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://5000-santianaale-dockerprepa-q5413w861bk.ws-eu118.gitpod.io/api/data').subscribe(data => {
      this.messaggio = data.messaggio;
    });
  }
}