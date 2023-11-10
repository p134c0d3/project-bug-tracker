import { Component, OnInit } from '@angular/core';
import { Bug } from './bug.model';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Bug[] = [
    new Bug(1, 'Bug Title', 'John', '11/01/2023', 'Test 123'),
    new Bug(2, 'Bug Title 2', 'Jacob', '10/30/2023', 'Test 654'),
    new Bug(3, 'Bug Title 3', 'Jingleheimerschmidt', '11/05/2023', 'Test 789'),
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
