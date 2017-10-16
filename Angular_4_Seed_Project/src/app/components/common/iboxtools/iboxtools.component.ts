import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'iboxtools',
  templateUrl: 'iboxtools.template.html'
})
export class IboxtoolsComponent {

  public collapse(e):void {
    e.preventDefault();
    let ibox = jQuery(e.target).closest('div.ibox');
    let button = jQuery(e.target).closest('i');
    let content = ibox.children('.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);

  }

  public close(e):void {
    e.preventDefault();
    let content = jQuery(e.target).closest('div.ibox');
    content.remove();
  }


}
