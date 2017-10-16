import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BsDropdownModule} from 'ngx-bootstrap';

import {IboxtoolsComponent} from "./iboxtools.component";

@NgModule({
  declarations: [IboxtoolsComponent],
  imports     : [BrowserModule,BsDropdownModule.forRoot()],
  exports     : [IboxtoolsComponent],
})

export class IboxtoolsModule {}
