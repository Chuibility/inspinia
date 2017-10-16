import { OnInit, OnChanges, ElementRef, Input,  NgModule, Directive } from '@angular/core';

// Import Sparkline chart library
// Sparkline library is included in angular-cli script section

declare var jQuery:any;

@Directive({
  selector: 'span[sparkline]',
  exportAs: 'sparkline-chart',

})
export class SparklineDirective implements OnChanges, OnInit {

  // Properties
  @Input() private  options:any;
  @Input() private  datasets:any;

  public chart:any;
  private element:ElementRef;
  private initFlag:boolean = false;

  public constructor(element:ElementRef) {
    this.element = element.nativeElement;
  }

  // Initialise
  public ngOnInit():any {
    this.initFlag = true;
    if (this.options || this.datasets) {
      this.build();
    }
  }

  // Build
  private build():any {

    // Check if sparkline is available
    if (typeof jQuery(this.element).sparkline() === 'undefined') {
      throw new Error('Configuration issue: Embedding sparkline lib is mandatory');
    }

    // Let's build chart
    this.chart = jQuery(this.element).sparkline(this.datasets, this.options);
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
    SparklineDirective
  ],
  exports: [
    SparklineDirective
  ],
  imports: []
})
export class SparklineModule {
}
