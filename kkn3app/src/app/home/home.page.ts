import { Component } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  text: string,
  title: string
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  item$ : Observable<Item[]>;
  constructor(firestore: Firestore) {
    const col = collection(firestore, 'notes');
    this.item$ = collectionData(col) as Observable<Item[]>;
  }

}
