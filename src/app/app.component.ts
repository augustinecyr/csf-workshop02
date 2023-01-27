import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf-workshopday02';
  items = [
    {
      name: 'iPhone 13', qty: 1, price: 1330
    },
    {
      name: 'Mac Mini', qty: 2, price: 980
    },
    {
      name: 'iMac', qty: 1, price: 1220
    }
  ];
  selectedItem: any;

  onItemReceive(item: any) {
    this.selectedItem = item;
  }
}
