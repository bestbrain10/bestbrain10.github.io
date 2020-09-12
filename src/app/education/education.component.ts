import { Education } from './education.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  history: Education[] = [
    {
      start: 2013,
      end: 2018,
      institution: 'Michael Okpara Unviversity of Agriculture, Umudike',
      degree: 'B.ENG Computer Engineering',
      location: 'Umuahia, Abia State, Nigeria'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
