import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {
  @Input() itemList: any[] = [];
  @Output() newItemEvent = new EventEmitter<any>();

  onItemClick(item: any) {
    this.newItemEvent.emit(item);
  }
}