import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTest';
  numbers:number[] = [1,3,45]; 
}
