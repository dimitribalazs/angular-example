import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  public sharedText = new Subject<string>();

  public randNumber: number;

  constructor(private router: Router) { 
    console.log("%cnew instance DatabaseService", 'background: #222; color: #bada55');
    this.randNumber = Math.random() * 1000;
  }

  public getCurrentPage(): string {
    return this.router.url;
  }

  public changeSharedText(text: string): void {
    console.log("data", text);
    this.sharedText.next(text);
  }

  public getNumber = ():number => this.randNumber;
}
