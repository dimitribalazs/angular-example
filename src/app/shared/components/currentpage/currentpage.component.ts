import { Component, OnInit, Input, SkipSelf } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'currentpage',
  templateUrl: './currentpage.component.html',
  styleUrls: ['./currentpage.component.css']
})
export class CurrentpageComponent implements OnInit {

  private _currentPage: string;

  public set currentPage(text: string) {
    this._currentPage = text;
  }

  public get currentPage(): string {
    if (!this._currentPage) {
      this._currentPage = this.dataService.getCurrentPage();
    }
    return `${this._currentPage} ${this._additionalText}` ;
  }

  private _additionalText: string;

  @Input()
  public set additionalText(text: string) {
    this._additionalText = text;
  }

  public get additionalText(): string {
    return this._additionalText;
  }

  constructor(@SkipSelf() private dataService: DataService) { 
    console.log("%cnew instance currentpage", 'background: #222; color: #bada55');
  }

  ngOnInit() {
  }

}
