import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kitisak',
  templateUrl: './kitisak.page.html',
  styleUrls: ['./kitisak.page.scss'],
})
export class KitisakPage implements OnInit {
  item$ : Observable<any>;
  constructor(private firestore : Firestore) { 
    const col = collection(this.firestore,'notes');
    this.item$ = collectionData(col) as Observable<any>;
  }

  ngOnInit() {
  }

}
