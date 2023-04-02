import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ExclusiveList,
  FeatureList,
  SizeList,
  StampList,
} from '../../data/data-list';

@Component({
  selector: 'app-funko-form',
  templateUrl: './funko-form.component.html',
  styleUrls: ['./funko-form.component.less'],
})
export class FunkoFormComponent implements OnInit {
  form: FormGroup;
  stampList = StampList.sort();
  featureList = FeatureList.sort();
  exclusiveList = ExclusiveList.sort();
  sizeList = SizeList.sort((a, b) => a - b);
  displayMessage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const myGuid = uuidv4().replace(/-/g, '');

    this.form = new FormGroup({
      uniqueId: new FormControl(myGuid, Validators.required),
      type: new FormControl(null, null),
      category: new FormControl(null, null),
      collection: new FormControl(null, Validators.required),
      number: new FormControl(null, null),
      name: new FormControl(null, Validators.required),
      serial: new FormControl(null, Validators.required),
      comment: new FormControl(null, null),
      pack: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      features: new FormArray([]),
      exclusive: new FormArray([]),
      stamps: new FormArray([]),
      image: new FormArray([]),
    });
  }

  getFormArray(name: string) {
    return this.form.controls[name] as FormArray;
  }

  addItemFormArray(name: string) {
    const newItem = new FormControl(null, null);
    this.getFormArray(name).push(newItem);
  }

  removeItemFormArray(name: string, imageIndex: number) {
    this.getFormArray(name).removeAt(imageIndex);
  }

  get formImages() {
    return this.form.controls['image'] as FormArray;
  }

  addImage() {
    let imageName;
    if (this.form.value['collection'] && this.form.value['number']) {
      imageName =
        this.form.value['collection'].replace(' ', '_').toLowerCase() +
        '_' +
        this.form.value['number'] +
        '_0' +
        (this.formImages.length + 1) +
        '.jpeg';
    }

    console.log(imageName);

    const imageForm = new FormGroup({
      name: new FormControl(imageName, Validators.required),
      base64: new FormControl(null, null),
      order: new FormControl(this.formImages.length + 1),
    });
    this.formImages.push(imageForm);
  }

  removeImage(imageIndex: number) {
    this.formImages.removeAt(imageIndex);
  }

  voltarPagina() {
    this.router.navigate(['']);
  }

  resetPage() {
    this.displayMessage = false;

    this.initForm();
  }

  gerarJson() {
    const jsonString = JSON.stringify(this.form.value, null, 2);
    this.copyToClipboard(jsonString);
    this.displayMessage = true;
    console.log(jsonString);
  }

  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
