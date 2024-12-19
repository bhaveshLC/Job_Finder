import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}
  private popular: any[] = [
    {
      id: 1,
      location: 'Bangalore, Karnataka',
      jobTitle: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      expireOn: '2024-12-30',
      salary: '₹12,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
    {
      id: 2,
      location: 'Mumbai, Maharashtra',
      jobTitle: 'Product Manager',
      company: 'Innovative Ventures',
      expireOn: '2024-12-25',
      salary: '₹18,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
    {
      id: 3,
      location: 'Hyderabad, Telangana',
      jobTitle: 'Data Scientist',
      company: 'Analytics India',
      expireOn: '2024-12-31',
      salary: '₹14,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
  ];

  private recent: any[] = [
    {
      id: 4,
      location: 'Chennai, Tamil Nadu',
      jobTitle: 'UX/UI Designer',
      company: 'DesignX Studios',
      expireOn: '2025-01-15',
      salary: '₹8,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
    {
      id: 5,
      location: 'Pune, Maharashtra',
      jobTitle: 'Marketing Specialist',
      company: 'Growth Hub Pvt Ltd',
      expireOn: '2025-01-10',
      salary: '₹7,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
    {
      id: 6,
      location: 'Delhi',
      jobTitle: 'Sales Executive',
      company: 'SalesForce India',
      expireOn: '2025-01-20',
      salary: '₹9,00,000',
      qualification: 'BE',
      skills: ['SKill 1', 'SKill 2', 'SKill 3', 'SKill 4', 'SKill 5'],
    },
  ];
  getPopularJobs() {
    return this.popular;
  }
  getRecentJobs() {
    return this.recent;
  }
}
