import { Component, OnInit, SkipSelf } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'second-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textComponent: string;
  
  constructor(@SkipSelf() private dataservice: DataService) { 
    console.log("%cnew instance secondhome " + dataservice.getNumber(), 'background: #222; color: #bada55'); 
    this.textComponent = "ABCDEFGHIJK";
  }

  ngOnInit() {
  }

}
