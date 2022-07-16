import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import {Item} from "../../Item";

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent implements OnInit {
  showAddElements: boolean = false
  showEditElement?: FormGroup

  addItemForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\d]+$/)
    ]),
    description: new FormControl('', [
      Validators.required
    ])
  });
  get itemTitle() { return this.addItemForm.get('title')}
  get itemDescription() { return this.addItemForm.get('description')}

  //addedElements: {title: string, amount: number}[] = []
  addedElementsForms: FormArray = new FormArray([])
  addElementToItemForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl(1, [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ])
  })

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onShowAddElements(): void {
    this.showAddElements = !this.showAddElements
  }

  onSubmit():void {
    this.itemService.postItem(<Item>{
      ...this.addItemForm.value,
      elements: this.addedElementsForms.value
    }).subscribe(item => {
      this.itemService.nextItemSubject(item)
    })
    this.addItemForm.reset()
    this.addedElementsForms.controls = []
    this.addedElementsForms.reset([])
  }

  onAddElement(): void {
    const newControls = new FormGroup({
      title: new FormControl(this.addElementToItemForm.get('title')?.value, [
        Validators.required
      ]),
      amount: new FormControl(this.addElementToItemForm.get('amount')?.value, [
        Validators.required
      ])
    })
    this.addedElementsForms.push(newControls)
    this.addElementToItemForm.reset({
      name: "",
      amount: 1
    })
    console.log(this.addedElementsForms)
  }

  getFormGroupAt(index: number){
    return <FormGroup> this.addedElementsForms.at(index)
  }

  onDeleteElement(index: number): void {
    this.addedElementsForms.removeAt(index)
  }

  onShowEditElement(element: FormGroup): void {
    this.showEditElement = element
  }

  onCloseEditElement() {
    if(this.showEditElement?.valid)
      this.showEditElement = undefined
  }
}
