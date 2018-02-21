import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dataservice: DataService) { }

  public changeText(text: string): void {
    this.dataservice.changeSharedText(text);
  }
}
