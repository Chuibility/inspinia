import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TopnavbarComponent} from "./topnavbar.component.ts";

@NgModule({
    declarations: [TopnavbarComponent],
    imports     : [BrowserModule],
    exports     : [TopnavbarComponent],
})

export class TopnavbarModule {}