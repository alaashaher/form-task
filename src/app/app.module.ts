import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsmodule } from './ReactiveForms/ReactiveForms.module';
import { TemplateDrivenformsModule } from './TemplateDrivenforms/TemplateDrivenforms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsmodule,
    TemplateDrivenformsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
