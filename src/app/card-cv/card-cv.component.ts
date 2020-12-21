import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cv',
  templateUrl: './card-cv.component.html',
  styleUrls: ['./card-cv.component.css']
})
export class CardCvComponent implements OnInit {
  @Input() text: string
  @Input() colourIntensity: number

  showModal = false

  pdfSrc = "../../assets/resume.pdf"

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.showModal = true
    console.log("openModal()")
  }

  closeModal(): void {
    this.showModal = false
    console.log("closeModal()")
  }

  getModalClasses(showModal) {
    return {
      'transition duration-500 ease-in-out z-50 bg-opacity-75 h-full w-full bg-gray-900 fixed flex inset-0 grid grid-rows-1 grid-flow-col': this.showModal,
      'invisible': !this.showModal
    }
  }

}
