import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonIcon,
  IonItem,
  IonList,
  IonLabel,
  IonChip,
  IonButton,
  IonThumbnail,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonButton,
    IonChip,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonCard,
    IonThumbnail,
    DatePipe,
  ],
})
export class JobComponent implements OnInit {
  @Input() job: any;
  constructor() {}

  ngOnInit() {}
}
