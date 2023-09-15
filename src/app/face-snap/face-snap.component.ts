import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonLabel!: string;

  ngOnInit() {
    this.buttonLabel = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonLabel === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonLabel = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonLabel = 'Oh Snap!';
    }
  }
}
