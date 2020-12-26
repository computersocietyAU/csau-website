import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  baseImagePath = "assets/images/StudentDirectors/";

  BoardMembers: Array<Director> = [
    {
      "name": "Kiruthya Ramesh",
      "imagePath": this.baseImagePath + "KiruthyaRamesh.jpg",
      "linkedinURL":"https://www.linkedin.com/in/kiruthya-ramesh"
    },
    {
      "name": "Divya S",
      "imagePath": this.baseImagePath + "divya.jpg",
      "linkedinURL":"https://www.linkedin.com/in/divya-saravananv"
    },
    {
      "name": "Vishnu Priya P",
      "imagePath": this.baseImagePath + "VishnuPriyaP.jpg",
      "linkedinURL":"https://www.linkedin.com/in/vishnu-priya-prasanna-venkatesh-18212818b/"
    },
    {
      "name": "Harshini T",
      "imagePath": this.baseImagePath + "Harshini.jpg",
      "linkedinURL":"https://www.linkedin.com/in/harshini-thangavel-5864531b2"
    },
    {
      "name": "Aarthy K P",
      "imagePath": this.baseImagePath + "AarthyKP.jpg",
      "linkedinURL":"https://www.linkedin.com/in/aarthy-padmanaban"
    },
    {
      "name": "Shankar Kumar S",
      "imagePath": this.baseImagePath + "Shankar.jpg",
      "linkedinURL":"https://www.linkedin.com/in/shankar-kumar-s"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

interface Director {
  name: string;
  imagePath: string;
  linkedinURL:string;
}
