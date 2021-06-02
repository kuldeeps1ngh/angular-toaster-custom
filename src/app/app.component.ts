import { Component } from '@angular/core';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Toast</h1>
    
    <button (click)="showSuccessToaster()">Success</button>
    <button (click)="showErrorToaster()">Error</button>
    <button (click)="showWarningToaster()">Warning</button>

    <app-toaster-container></app-toaster-container>
  `,
  styles: [`
    h1 {
      color: #DB5B33;
      font-weight: 300;
      text-align: center;
    }
  `]
})
export class AppComponent  {

  constructor(private toaster: ToasterService) {}

  showSuccessToaster() {
    this.toaster.show('success', 'Well done!', 'This is a success alert');
  }
  showErrorToaster() {
    this.toaster.show('error', 'Check it out!', 'This is a error alert');
  }
  showWarningToaster() {
    this.toaster.show('warning', 'Check it out!', 'This is a warning alert', 3000);
  }
}
