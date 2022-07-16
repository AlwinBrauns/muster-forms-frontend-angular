import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../Item";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = []
  itemSubscription: Subscription

  constructor(private itemService: ItemService) {
    itemService.getAllItems().subscribe(items => {
      this.items = items
    })
    this.itemSubscription = itemService.getItemSubject().subscribe(item => {
      this.items.push(item)
    })
  }

  ngOnInit(): void {
  }

}
