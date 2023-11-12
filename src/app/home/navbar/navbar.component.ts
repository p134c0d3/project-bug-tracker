import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  formHasBeenSubmitted: boolean = false;
  bugDetails = {
    id: "",
    status: "",
    title: "",
    tester: "",
    primaryModule: "",
    date: "",
    env: "",
    description: ""
  }









  onFormSubmit(formObj: NgForm) {
    console.log('Submitted!', formObj);
  }
}
