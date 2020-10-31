import { Skill } from './skill.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      skill: 'MongoDB',
      percent: 70
    },
    {
      skill: 'GCP',
      percent: 40
    },
    {
      skill: 'NodeJS (RAW, EXPRESS, NESTJS)',
      percent: 85
    },
    {
      skill: 'Typescript',
      percent: 80
    },
    {
      skill: 'Docker',
      percent: 40
    },
    {
      skill: 'AWS',
      percent: 40
    },
    {
      skill: 'SQL (POSTGRES, MSSQL, MYSQL)',
      percent: 70
    },
    {
      skill: 'ELK Stack',
      percent: 50,
      learning: true
    },
    {
      skill: 'Kubernetes',
      percent: 20,
      learning: true
    },
    {
      skill: 'Linux Administration',
      percent: 60
    },
    {
      skill: 'Terraform',
      percent: 40
    },
    {
      skill: 'GO',
      percent: 20,
      learning: true
    }
  ].sort(({percent: prev}, {percent: next}) => next - prev);

  constructor() { }

  ngOnInit(): void {
  }

}
