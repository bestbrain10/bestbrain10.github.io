import { Experience } from './experience.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.css']
})
export class ExperienciesComponent implements OnInit {

  experiences: Experience[] = [
    {
      start: 2020,
      end: 2020,
      position: 'Freelance Fullstack Web Developer',
      company: 'Emblic Technologies',
      location: 'Port Harcourt, Rivers',
      activities: [
        `Related with the client to decide the best architecture and tools for our system -
          a multi-tenancy architecture - based off the submitted system specifications
        `,
        'Built the Hotel management SaaS REST API using OAuth 2.0 authentication model',
        `Implemented a CI/CD based workflow to replace the previously
        used direct FTP project file uploads and manual database migrations`,
        'Wrote a technical documentation of the implemented system'
      ]
    },
    {
      start: 2019,
      end: 2020,
      position: 'Corp Member (Computer Science Teacher)',
      company: 'National Youth Service Corp',
      location: 'Dunukofia, Anambra',
      activities: [
        'Exposed JSS3 Class to Microsoft Office Packages, BASIC programming language and computer arithmetics',
        'Taught JSS2 Class about basic computer components, types and ethics and  computer arithmetics',
        'Introduced JSS2 Class to commonly used application and system software packages',
      ]
    },
    {
      start: 2018,
      end: 2019,
      position: 'Senior Software Developer',
      company: 'Nano Intelligence Inc.',
      location: 'Awka, Anambra',
      activities: [
        'Planned and designed the flow of data in software systems with teammates',
        `Wrote frontend and backend code for enterprise-grade web applications - an internal super administrator and a cryptocurrency exchange administrator dashboard`,
        'Built and deployed Zero Knowledge wallets for 50 Crypto currencies and other Digital assets such as ERC-20 tokens and OMNI tokens with wallet backup and recovery mechanism',
        'Set up software deployment environments on cloud infrastructure while utilising DevOps technologies'
      ]
    },
    {
      start: 2017,
      end: 2018,
      position: 'Backend Web Developer',
      company: 'Nugi Technologies',
      location: 'Calabar, Cross river',
      activities: [
        `Built and deployed Tailorgang API while utilizing best security practices`,
        'Improved existing monolith system to a micro service architecture so individual system components could scale and be optimized independently',
        'Enhanced the Tailorgang tailor discovery service by integrating elastic search and geolocation',
        'Helped improve the user experience of the company public profile by renovating and improving its website'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
