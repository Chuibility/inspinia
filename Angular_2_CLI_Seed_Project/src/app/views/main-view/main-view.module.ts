import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {mainViewComponent} from "./main-view.component.ts";

@NgModule({
    declarations: [mainViewComponent],
    imports     : [BrowserModule],
})

export class MainViewModule {}