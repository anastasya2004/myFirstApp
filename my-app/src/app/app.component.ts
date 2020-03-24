import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  desc = "my super app";
  /*products = [
    'Продукт 1',
    'Продукт 2',
    'Продукт 3',
    'Продукт 4',
  ]*/
  products = [
    {
      title: "Продукт 1",
      desc: "Содержание 1",
    },
    {
      title: "Продукт 2",
      desc: "Содержание 2",
    }
  ]
}
