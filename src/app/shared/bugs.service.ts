import { Bug } from './../bugs/bug.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
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

  generateID() {}

  addBug(bug: Bug) {
    this.bugs.push()
  }

  updateBug() {}

  deleteBug() {}
}
