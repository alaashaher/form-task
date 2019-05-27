import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenformsComponent } from './TemplateDrivenforms.component';

@NgModule({
  declarations: [
    TemplateDrivenformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [TemplateDrivenformsComponent]
})
export class TemplateDrivenformsModule { }
