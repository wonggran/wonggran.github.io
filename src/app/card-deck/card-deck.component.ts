import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {
  cv = "cv"
  projects = "projects"
  cvColourIntensity = 100;
  projectsColourIntensity = 200;

  constructor() {
  }

  ngOnInit(): void {
  }

}
