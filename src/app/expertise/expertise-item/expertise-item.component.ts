import { Component, Input, OnInit } from '@angular/core';
import { Expertise } from '../expertise.model';

@Component({
  selector: 'app-expertise-item',
  templateUrl: './expertise-item.component.html',
  styleUrls: ['./expertise-item.component.css']
})
export class ExpertiseItemComponent implements OnInit {

  @Input() expertise: Expertise;

  constructor() { }

  ngOnInit(): void {
  }

}
