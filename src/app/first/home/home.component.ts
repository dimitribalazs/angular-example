import { Component, OnInit, SkipSelf } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'first-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public exampleText$ = new Observable<string>();

  constructor(@SkipSelf() private dataservice: DataService) { 
    console.log("%cnew instance firsthome " + dataservice.getNumber(), 'background: #222; color: #bada55');
    this.exampleText$ = dataservice.sharedText.asObservable();
    //this.exampleText.subscribe(text => console.log(text));
  }

  ngOnInit() {
  }

}
