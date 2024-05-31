import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  modalData!: { avatar: string; title: string; text: string; alt_text: string };
  modalActive = false;
 constructor(){ }

 toggleModal =  () => {
  this.modalActive = !this.modalActive;
 }

 testimonial = (id:number) => {
  this.toggleModal();
  this.modalData = this.testimonies[id];

 }
testimonies = [
  {
    "avatar": "../assets/images/avatar-1.png",
    "title": "Daniel Lewis",
    "text": "Daniel Lewis was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "alt_text": "Daniel Lewis"
  },
  {
    "avatar": "../assets/images/avatar-2.png",
    "title": "Jessica Miller",
    "text": "Jessica was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "alt_text": "Jessica Miller"
  },
  {
    "avatar": "../assets/images/avatar-3.png",
    "title": "Emily Evans",
    "text": "Emily was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "alt_text": "Emily Evans"
  },
  {
    "avatar": "../assets/images/avatar-4.png",
    "title": "Henry William",
    "text": "Henry was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "alt_text": "Henry William"
  }
]

}
