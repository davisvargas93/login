import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { APP_RUTES } from './app.routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { FormsModule} from '@angular/forms';
import { IdentityService } from './services/identity.service';
import { TranslatePipe } from './pipes/translate.pipe';

export function setupTranslatefactory (
  service: TranslatePipe): Function {
    return () => service.use('en');
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    APP_RUTES,
    FormsModule
  ],
  providers: [
    IdentityService,
    TranslatePipe,
  {
    provide: APP_INITIALIZER,
    useFactory: setupTranslatefactory,
    deps: [TranslatePipe],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
