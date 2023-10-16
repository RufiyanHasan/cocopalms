import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  propertyDetails!: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.propertyDetails = this.fb.group({
      propertyName: ['', Validators.required],
      governorate: [''],
      city: [''],
      block: [''],
      street: [''],
      propertyNumber: [''],
      propertyCivilId: [''],
      propertyType: [''],
      yearBuild: [''],
      sizeM2: [''],
      description: [''],
      status: '',
      depositRentalYeilds: [''],
      propertyBookValue: [''],
      propertyEstimatedValue: ['']
    })
  }

  addpropertyDetails(){
    console.log(this.propertyDetails.value);
    // this.propertyDetails.reset();
  }

}
