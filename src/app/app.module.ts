import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { PushParentComponent } from './components/push-parent/push-parent.component';
import { PullParentComponent } from './components/pull-parent/pull-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PushParentComponent,
    PullParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
