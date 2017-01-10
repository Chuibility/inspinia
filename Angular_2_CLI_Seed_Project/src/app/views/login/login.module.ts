import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {loginComponent} from "./login.component";

@NgModule({
    declarations: [loginComponent],
    imports     : [BrowserModule],
})

export class LoginModule {}