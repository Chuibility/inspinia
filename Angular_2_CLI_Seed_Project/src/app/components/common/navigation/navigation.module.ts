import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NavigationComponent} from "./navigation.component.ts";

@NgModule({
    declarations: [NavigationComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [NavigationComponent],
})

export class NavigationModule {}