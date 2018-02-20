import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private router: Router) { }

  public getCurrentPage(): string {
    return this.router.url;
  }
}
