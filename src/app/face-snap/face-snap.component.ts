import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapsService } from '../core/services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonLabel!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit() {
    this.buttonLabel = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonLabel === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.buttonLabel = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.buttonLabel = 'Oh Snap!';
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
