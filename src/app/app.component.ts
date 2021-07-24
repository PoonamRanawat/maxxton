import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hide : boolean = true;

  constructor(private route : Router){}

  navigate() {
    this.route.navigate(['employee']);
    this.hide = false;
  }
}
