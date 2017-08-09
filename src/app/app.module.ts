import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{ReversestringKeysPipe} from'./reversestring.pipe';
import{OnlylettersDirective} from './onlyletters.directive';
import{UserlistComponent} from './userlist.component'

@NgModule({
  declarations: [
    AppComponent,
    ReversestringKeysPipe,
    OnlylettersDirective,
    UserlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
