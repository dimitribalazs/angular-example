import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textComponent: string;
  
  constructor() { 
    this.textComponent = "ABCDEFGHIJK";
  }

  ngOnInit() {
  }

}
