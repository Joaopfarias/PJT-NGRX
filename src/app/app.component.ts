import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PJT-NGRX';

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app').pipe(map(e => e.counter));
}
