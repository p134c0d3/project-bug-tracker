import { BugsService } from './../shared/bugs.service';
import { Component, OnInit } from '@angular/core';
import { Bug } from './bug.model';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
})
export class BugsComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private bugsService: BugsService) {}

  ngOnInit(): void {
    this.bugs = this.bugsService.getBugs();
  }















}
