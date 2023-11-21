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
      'Test Descalskd;jf;laskjdf kalsdjf;lkasjd faj;sldkf ja;lksdjf;las dfj;alksjd fj a;lksdjfla;sjdf ksldjfa skldj f',
      'Service Request Widget',
      new Date('11/02/2023'),
      'JP',
      undefined,
      undefined,
      undefined
    ),
    new Bug(
      2,
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
      3,
      'Open',
      'Test Title',
      'JP',
      'Dashboard',
      new Date('11/01/2023'),
      'Web',
      'Test Descalskd;jf;laskjdf kalsdjf;lkasjd faj;sldkf ja;lksdjf;las dfj;alksjd fj a;lksdjfla;sjdf ksldjfa skldj f',
      'Service Request Widget',
      new Date('11/02/2023'),
      'JP',
      undefined,
      undefined,
      undefined
    ),
  ];
  filteredStatus = '';


  constructor() {}

  getBugs() {
    return this.bugs.slice();
  }

  addBug(bug: Bug) {
    this.bugs.push(bug);
    console.log(bug);
    console.log(this.bugs);
    this.bugsUpdated.next(this.bugs);
  }

  deleteBug(i: number) {
    this.bugs.splice(i, 1);
    this.bugs = this.getBugs();
  }

  updateBug() {}
}
