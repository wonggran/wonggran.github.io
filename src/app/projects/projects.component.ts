import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // Cargo
  projectCargoName = "Cargo"
  projectCargoDescription = "Connect vehicle owners with home movers to provide a moving service."
  projectCargoStatus = "In progress"

  constructor() { }

  ngOnInit(): void {
  }

}
