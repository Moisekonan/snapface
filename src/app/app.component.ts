import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Mamadou',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Fred',
      'Mon meilleur de NaN Digital Academy !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Josias',
      'Le digne fils d\'Houphouët !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }
}
