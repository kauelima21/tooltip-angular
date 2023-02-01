import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TesteComponent } from './components/teste/teste.component';
import { TriggerComponent } from './components/tooltip/trigger/trigger.component';
import { ContentComponent } from './components/tooltip/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TesteComponent,
    TriggerComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
