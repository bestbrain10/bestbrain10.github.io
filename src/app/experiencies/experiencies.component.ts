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
        'Build the myemblic hotel management SaaS backend with CodeIgniter and Luthier',
        'Build the administrator frontend using Angular',
        'Build the Landing page using Angular',
        'Build the Hotel ERP using Angular',
        'Implement CI/CD using Gitlab CI and codeigniter migrations',
        'Host Hotel ERP solution on cpanel using Gitlab CI/CD'
      ]
    },
    {
      start: 2019,
      end: 2020,
      position: 'Corp Member (Computer Science Teacher)',
      company: 'National Youth Service Corp',
      location: 'Dunukofia, Anambra',
      activities: [
        'Teach JSS3 Class about Microsoft Office Packages',
        'Teach JSS3 Class about BASIC programming Language and computer arithmetics',
        'Teach JSS2 Class about basic computer components, types and ethics',
        'Teach JSS2 Class about Application and system software packages',
        'Teach JSS2 Class about Number systems and number bases conversion'
      ]
    },
    {
      start: 2018,
      end: 2019,
      position: 'Senior Software Developer',
      company: 'Bezop Blockchain Inc.',
      location: 'Awka, Anambra',
      activities: [
        'Build Bezex crypto exchange SaaS Operator and Administrator Frontend using Angular',
        'Build Bezex Administrator Backend using PostgresSQL and Google cloud data store',
        'Deployment using Cloud Build, Cloud Run and Docker',
        'Deploy Frontend, backend and databases to GCP compute instances',
        'Configure and Manage Bezex administrator Databases and Compute instances using Cloud DNS and Networking',
        'Build and Deploy Bezex Zero Knowledge wallets for 50 Crypto currencies and other Digital assets such as ERC-20 tokens and OMNI tokens',
        'Implement Zero Knowledge wallet backup and recovery',
        'Built email broadcast service using AWS SES'
      ]
    },
    {
      start: 2017,
      end: 2018,
      position: 'Backend Web Developer',
      company: 'Nugi Technologies',
      location: 'Calabar, Cross river',
      activities: [
        `Build and deploy Tailorgang Tailor's dashboard using codeignter`,
        'Build and deploy Tailorgang API using NodeJS and MongoDB',
        'Implement Micro service Architecture using the Axon socket package',
        'Implement tailor search service using elastick search'
      ]
    },
    {
      start: 2017,
      end: 2017,
      position: 'Intern Fullstack Developer',
      company: 'Nugi Technologies',
      location: 'Calabar, Cross river',
      activities: [
        'Renovate the nugitech.com website',
        `Build and deploy initial release of Tailorgang Tailor's dashboard using codeignter`
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
