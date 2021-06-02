import { Component, Input, OnInit } from '@angular/core';
import { ToasterService } from './toaster.service';
import { Toast } from './toast.interface';

@Component({
  selector: 'app-toaster-container',
  template: `
    <app-toaster *ngFor="let toast of toasts; let i=index" 
      [toast]="toast" [i]="i"
      (remove)="remove($event)"></app-toaster>

    <pre>toast$: {{ this.toaster.toast$ | async | json }}</pre>
    <pre>toasts: {{ toasts | json }}</pre>
  `,
  styles: []
})
export class ToasterContainerComponent implements OnInit {

  toasts: Toast[] = [];

  timeoutArr = [];

  constructor(private toaster: ToasterService) {}

  ngOnInit() {
    this.toaster.toast$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        const timeID = setTimeout(() => {
          this.toasts.pop();
          this.timeoutArr.pop();
        }, toast.delay || 6000);
        this.timeoutArr.unshift(timeID);
      });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
    clearTimeout(this.timeoutArr[index]);
    this.timeoutArr.splice(index, 1);
    //this.toasts.splice(index, 1);
  }
}