import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  scroll :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',[])
  onscroll(){
    if(scrollY > 45)
      this.scroll = true;
    else
      this.scroll = false;
    // console.log(scrollY,this.scroll);
  }

}