import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../Item";
import {map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  static readonly API_URL: string = "http://localhost:8080/api/";
  private itemSubject: Subject<Item> = new Subject<Item>()

  constructor(private http: HttpClient) { }

  postItem(item: Item): Observable<any>{
    return this.http.post(ItemService.API_URL + "item", item)
  }

  getAllItems(): Observable<any>{
    return this.http.get(ItemService.API_URL + "item/all")
  }

  getItemSubject(): Subject<Item>{
    return this.itemSubject
  }

  nextItemSubject(item: Item): void {
    this.itemSubject.next(item)
  }
}
