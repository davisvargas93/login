import { Component } from '@angular/core';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  constructor(private _serviceTranslate: TranslatePipe) {
    this._serviceTranslate.use('en');
    this._serviceTranslate.use('en').then(() =>
      console.log(_serviceTranslate.data)
    );
  }
}
