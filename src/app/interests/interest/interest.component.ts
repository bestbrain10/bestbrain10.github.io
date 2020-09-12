import { Interest } from './../interest.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  @Input() interest: Interest;

  constructor() { }

  ngOnInit(): void {
  }

}
