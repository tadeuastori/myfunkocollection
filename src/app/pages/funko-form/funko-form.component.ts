import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base-component.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-funko-form',
  templateUrl: './funko-form.component.html',
  styleUrls: ['./funko-form.component.less'],
})
export class FunkoFormComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  displayMessage: boolean = false;
  item: string;
  loadedFunko: any;
  pageEditMode: boolean = false;

  stampDatalist: string[] = [];
  exclusiveDatalist: string[] = [];
  featureDatalist: string[] = [];
  sizeDatalist: number[] = [];
  collectionDatalist: string[] = [];
  typeDatalist: string[] = [];
  serialDatalist: string[] = [];
  categoryDatalist: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.initDataList();
    this.getParameter();

    if (this.item && this.item != 'new') {
      this.loadingItem();
      this.pageEditMode = true;
    }
  }

  initDataList() {
    const listFunko = this.loadFunkoList();

    listFunko.forEach((funko) => {
      if (funko['collection']) {
        if (!this.collectionDatalist?.includes(funko['collection'])) {
          this.collectionDatalist.push(funko['collection']);
        }
      }

      if (funko['type']) {
        if (!this.typeDatalist?.includes(funko['type'])) {
          this.typeDatalist.push(funko['type']);
        }
      }

      if (funko['serial']) {
        if (!this.serialDatalist?.includes(funko['serial'])) {
          this.serialDatalist.push(funko['serial']);
        }
      }

      if (funko['size']) {
        if (!this.sizeDatalist?.includes(funko['size'])) {
          this.sizeDatalist.push(funko['size']);
        }
      }

      if (funko['category']) {
        if (!this.categoryDatalist?.includes(funko['category'])) {
          this.categoryDatalist.push(funko['category']);
        }
      }

      if (funko['stamps']) {
        funko['stamps'].forEach((stamp) => {
          if (!this.stampDatalist?.includes(stamp)) {
            this.stampDatalist.push(stamp);
          }
        });
      }

      if (funko['exclusive']) {
        funko['exclusive'].forEach((stamp) => {
          if (!this.exclusiveDatalist?.includes(stamp)) {
            this.exclusiveDatalist.push(stamp);
          }
        });
      }

      if (funko['features']) {
        funko['features'].forEach((stamp) => {
          if (!this.featureDatalist?.includes(stamp)) {
            this.featureDatalist.push(stamp);
          }
        });
      }
    });

    this.collectionDatalist = this.collectionDatalist?.sort();
    this.stampDatalist = this.stampDatalist?.sort();
    this.exclusiveDatalist = this.exclusiveDatalist?.sort();
    this.featureDatalist = this.featureDatalist?.sort();
    this.typeDatalist = this.typeDatalist?.sort();
    this.serialDatalist = this.serialDatalist?.sort();
    this.sizeDatalist = this.sizeDatalist?.sort((a, b) => a - b);
    this.categoryDatalist = this.categoryDatalist.sort();
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

  getParameter() {
    this.route.queryParams.subscribe((params) => {
      this.item = params['item'];
    });
  }

  loadingItem() {
    let stringJson = JSON.stringify(this.funkosDataDase);
    const listFunko: any[] = JSON.parse(stringJson);

    this.loadedFunko = listFunko.find(
      (filter) => filter.uniqueId === this.item
    );

    this.setValueToForm('uniqueId');

    this.setValueToForm('name');
    this.setValueToForm('type');
    this.setValueToForm('category');
    this.setValueToForm('number');

    this.setValueToForm('collection');

    this.setValueToForm('pack');
    this.setValueToForm('size');
    this.setValueToForm('serial');

    this.setValueToForm('comment');

    this.loadedFunko['exclusive'].forEach((element) => {
      this.addItemFormArray('exclusive', element);
    });

    this.loadedFunko['features'].forEach((element) => {
      this.addItemFormArray('features', element);
    });

    this.loadedFunko['stamps'].forEach((element) => {
      this.addItemFormArray('stamps', element);
    });

    this.loadedFunko['image'].forEach((element) => {
      this.addImage(element.name);
    });
  }

  setValueToForm(field: string) {
    this.form.controls[field].patchValue(this.loadedFunko[field]);
  }

  getFormArray(name: string) {
    return this.form.controls[name] as FormArray;
  }

  addItemFormArray(name: string, value: any = null) {
    const newItem = new FormControl(value ? value : null, null);
    this.getFormArray(name).push(newItem);
  }

  removeItemFormArray(name: string, imageIndex: number) {
    this.getFormArray(name).removeAt(imageIndex);
  }

  get formImages() {
    return this.form.controls['image'] as FormArray;
  }

  getControlValuebyIndex(index, Property) {
    return (this.form.controls['image'] as FormArray).controls[index].value[
      Property
    ];
  }

  addImage(value: any = null) {
    let imageName = '';

    if (value) {
      imageName = value;
    } else if (this.form.value['collection'] && this.form.value['number']) {
      imageName =
        this.form.value['collection']
          .replace('..?', '')
          .replace(' - ', '-')
          .replace(/ /g, '-')
          .toLowerCase() +
        '-' +
        this.form.value['number'] +
        (this.formImages.length + 1 < 10 ? '-0' : '-') +
        (this.formImages.length + 1) +
        '.jpeg';
    }

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
    const jsonString = JSON.stringify(
      this.pageEditMode
        ? this.updatedItem(this.form.value)
        : this.addedItem(this.form.value),
      null,
      2
    );

    this.copyToClipboard(jsonString);
    this.displayMessage = true;
  }

  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  updatedItem(newItem) {
    let stringJson = JSON.stringify(this.funkosDataDase);
    const listFunko: any[] = JSON.parse(stringJson);

    var deleteFunko = listFunko.find(
      (filter) => filter.uniqueId === newItem.uniqueId
    );

    let index = listFunko.indexOf(deleteFunko);
    listFunko[index] = newItem;

    return listFunko;
  }

  addedItem(newItem) {
    let stringJson = JSON.stringify(this.funkosDataDase);
    const listFunko: any[] = JSON.parse(stringJson);
    listFunko.push(newItem);

    return listFunko;
  }
}
