import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToasterContainerComponent } from './toaster-container.component';
import { ToasterComponent } from './toaster.component';
import { ToasterService } from './toaster.service';

@NgModule({
  declarations: [ AppComponent, ToasterContainerComponent, ToasterComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
