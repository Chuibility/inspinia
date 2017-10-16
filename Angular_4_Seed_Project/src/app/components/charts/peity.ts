import { OnInit, OnChanges, ElementRef, Input, NgModule, Directive } from '@angular/core';

// Import Peity chart library
import 'peity';

declare var jQuery:any;

@Directive({
  selector: 'span[peity]',
  exportAs: 'peity-chart',

})
export class PeityDirective implements OnChanges, OnInit {

  // Properties
  @Input() private  options:any;
  @Input() private  type:any;

  public chart:any;
  private element:ElementRef;
  private initFlag:boolean = false;

  public constructor(element:ElementRef) {
    this.element = element;
  }

  // Initialise
  public ngOnInit():any {
    this.initFlag = true;
    if (this.options || this.type) {
      this.build();
    }
  }

  // Build
  private build():any {

    // Check if peity is available
    if (typeof jQuery(this.element).peity === 'undefined') {
      throw new Error('Configuration issue: Embedding peity lib is mandatory');
    }

    // Let's build chart
    this.chart = jQuery(this.element.nativeElement).peity(this.type, this.options);
  }

  // Change
  public ngOnChanges():void {
    if (this.initFlag) {
      this.build();
    }
  }

}

@NgModule({
  declarations: [
    PeityDirective
  ],
  exports: [
    PeityDirective
  ],
  imports: []
})
export class PeityModule {
}
