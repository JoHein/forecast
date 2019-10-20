import { Component } from '@angular/core';
import "reflect-metadata";
import "es6-shim";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forecast';
}
