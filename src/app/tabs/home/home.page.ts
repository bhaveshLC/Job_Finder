import { JobService } from './../../service/job/job.service';
import { SwiperModule } from './../../../../node_modules/swiper/types/shared.d';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonThumbnail,
  IonButton,
  IonIcon,
  IonLabel,
  IonText,
  IonRow,
  IonCol,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInfiniteScroll,
  IonItem,
  IonListHeader,
} from '@ionic/angular/standalone';
import { IonicSlides } from '@ionic/angular';
import { SwiperContainer } from 'swiper/element';
import { JobComponent } from '../../components/job/job.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonSearchbar,
    IonCol,
    IonRow,
    IonText,
    IonLabel,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
    JobComponent,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  SwiperModule = [IonicSlides];
  constructor() {}
  jobService = inject(JobService);
  popular: any[] = this.jobService.getPopularJobs();

  recent: any[] = this.jobService.getRecentJobs();
  ngOnInit() {}
}
