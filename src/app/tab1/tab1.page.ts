import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showans = Number;

  @ViewChild("input1") input1;
  @ViewChild("input2") input2;

  constructor(){}

  clickadd(){
      this.showans.isInteger(this.input1.value+this.input2.value);
  }

  clicksub(){
    this.showans.isInteger(this.input1.value-this.input2.value);
  }

  clickmul(){
    this.showans.isInteger((this.input1.value)*(this.input2.value));
  }

  clickdiv(){
    this.showans.isInteger((this.input1.value)/(this.input2.value));
  }

}

