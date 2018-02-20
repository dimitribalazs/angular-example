import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

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


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
