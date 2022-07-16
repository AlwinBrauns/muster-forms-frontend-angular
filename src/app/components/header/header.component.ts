import { Component, OnInit } from '@angular/core';
import { RoutePaths } from 'src/app/RoutePaths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = {
    "Home": RoutePaths.items,
    "Edit": RoutePaths.edit
  }
  constructor() { }

  ngOnInit(): void {
  }

}
