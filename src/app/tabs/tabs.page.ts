import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonButton,
} from '@ionic/angular/standalone';
import { JobDetailsPage } from './job-details/job-details.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabButton,
    IonTabs,
    IonTabBar,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
