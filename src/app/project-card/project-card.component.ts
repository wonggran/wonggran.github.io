import { Component, OnInit, Input } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectName: string
  @Input() projectStatus: string
  @Input() projectDescription: string

  faGithub = faGithub

  constructor() { }

  ngOnInit(): void {
  }

}
