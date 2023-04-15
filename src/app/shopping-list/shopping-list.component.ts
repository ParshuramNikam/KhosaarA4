import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  title = 'Shopping List';
  author = 'Your Name';
  newItem = '';
  items: string[] = [];

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    this.items = this.items.filter(i => i !== item);
  }
}
