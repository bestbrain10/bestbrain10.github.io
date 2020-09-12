import { Component, OnInit } from '@angular/core';
import { Expertise } from './expertise.model';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  expertises: Expertise[] = [
    {
      name: 'Application Programming Interface',
      details: `Creating and maintaining REST and GraphQL APIs`
    },
    {
      name: 'Database Administration',
      details: 'Configuring, trouble shooting and managing of MySQL, MSSQL and MongoDB'
    },
    {
      name: 'Automation',
      details: 'Bash scripting, Continous Integration and Deployment, tooling for faster work process'
    },
    {
      name: 'Cloud Computing',
      details: 'Cloud deployment and scaling'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
