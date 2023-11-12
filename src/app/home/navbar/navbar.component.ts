import { BugsService } from './../../shared/bugs.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bug } from 'src/app/bugs/bug.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  formHasBeenSubmitted: boolean = false;

  bugDetails = {
    id: 0,
    status: '',
    title: '',
    tester: '',
    primaryModule: '',
    date: new Date(),
    env: '',
    description: '',
  };

  constructor(private bugService: BugsService) {}
  generateID() {
    // Generate a random number between 0 and 9999
    let num = Math.floor(Math.random() * 10000);
    // Pad the number with leading zeros if necessary
    let str = num.toString().padStart(4, '0');
    // Return the number as a numeric value
    return Number(str);
  }

  onFormSubmit(formObj: NgForm) {
    console.log('Submitted!', formObj.value);
    this.formHasBeenSubmitted = true;
    this.bugDetails.id = this.generateID();
    this.bugDetails.status = formObj.value.bugStatusInput;
    this.bugDetails.title = formObj.value.titleInput;
    this.bugDetails.tester = formObj.value.testerInput;
    this.bugDetails.primaryModule = formObj.value.priModuleInput;
    this.bugDetails.date = formObj.value.dateTestedInput;
    this.bugDetails.env = formObj.value.envInput;
    this.bugDetails.description = formObj.value.bugDescInput;
    console.log(formObj.value.dateInput);
    console.log(this.bugDetails);
    this.bugService.addBug(this.bugDetails);
    formObj.reset();
  }
}
