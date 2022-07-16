import {Component, Input, OnInit} from '@angular/core';
import {ItemElements} from "../../ItemElements";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit {
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() elements?: ItemElements[]
  icon = faShoppingCart
  constructor() { }

  ngOnInit(): void {
  }

}
