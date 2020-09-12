import { Interest } from './interest.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: Interest[] = [
    {
      name: 'Books',
      detail: `I love reading anti-self-help guru titles like 'The subtle art of not giving a f*ck' by Mark Manson other than that I explore other genres such as
        discovery and history, science, biography and Christianity.
      `
    },
    {
      name: 'Video Games',
      detail: `
        When I am not playing soccer or Battle royalle games with friends, I am usually playing hyper casual games alone.
        I think it is a great way to relax.
      `
    },
    {
      name: 'Sports',
      detail: `
        Not playing, watching. I enjoy Football especially the champions league and the European top five leagues.
        My favourite team is Chealsea.
      `
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
