import { Component, OnInit, SkipSelf } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'first-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(@SkipSelf() private dataservice: DataService) {
    console.log("%cnew instance firstdetail " +  dataservice.getNumber(), 'background: #222; color: #bada55');
  }

  ngOnInit() {
  }

}
