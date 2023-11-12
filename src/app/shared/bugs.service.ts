import { Subject } from 'rxjs';
import { Bug } from './../bugs/bug.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BugsService {

  bugsUpdated: Subject<Bug[]> = new Subject<Bug[]>();

  bugs: Bug[] = [
    new Bug(
      1,
      'Open',
      'Test Title',
      'JP',
      'Dashboard',
      new Date('11/01/2023'),
      'Web',
      'Test Desc',
      'Service Request Widget',
      new Date('11/02/2023'),
      'JP',
      undefined,
      undefined,
      undefined
    ),
    new Bug(
      1,
      'Open',
      'Test Title',
      'JP',
      'Dashboard',
      new Date('11/01/2023'),
      'Web',
      'Test Desc',
      'Service Request Widget',
      new Date('11/02/2023'),
      'JP',
      undefined,
      undefined,
      undefined
    ),
    new Bug(
      1,
      'Open',
      'Test Title',
      'JP',
      'Dashboard',
      new Date('11/01/2023'),
      'Web',
      'Test Desc',
      'Service Request Widget',
      new Date('11/02/2023'),
      'JP',
      undefined,
      undefined,
      undefined
    ),
  ];

  constructor() {}

  getBugs() {
    return this.bugs.slice();
  }

  addBug(bug: Bug) {
    this.bugs.push(bug);
    console.log(bug);
    console.log(this.bugs);
    this.bugsUpdated.next(this.bugs)
  }

  updateBug() {}

  deleteBug() {}
}
