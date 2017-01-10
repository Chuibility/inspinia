import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {registerComponent} from "./register.component";

@NgModule({
    declarations: [registerComponent],
    imports     : [BrowserModule],
})

export class RegisterModule {}