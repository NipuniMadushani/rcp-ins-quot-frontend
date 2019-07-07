import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  selectedfontfamily = 'cursive';
  params: any;
  fristparam = '';
  secondparam = '';
  alerttype = '';
  fristdiv = 'noclass';
  seconddiv = 'noclass';
  delbtn = '';
  navcolour = '';
  navimg = '';
  navmsg = '';
  btncolour = '';
  delbtntext = '';
  btnallign = '';
  btnval = '';

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.params = data;
    this.fristparam = data.fristvalue;
    this.secondparam = data.secondvalue;
    this.alerttype = data.alertype;
    this.setFristDivSizes();
    this.setSecondDsize();
    this.setAlertType();
  }

  ngOnInit() {
  }
  clearParam() {
    this.fristdiv = 'noclass';
    this.seconddiv = 'noclass';

    if (this.alerttype === 'error') {

    } else {

    }



  }

  setFristDivSizes() {
    if (this.fristparam === '') {
      this.fristdiv = 'noclass';
    } else {
      this.fristdiv = 'example1';
    }
  }

  setSecondDsize() {

    if (this.secondparam === '') {
      this.seconddiv = 'noclass';
    } else {
      this.seconddiv = 'example1';
    }
  }

  setAlertType() {
    if (this.alerttype === 'error') {
      this.navcolour = 'navcolorerror';
      this.navimg = '../../../../../assets/images/wrong.png';
      this.navmsg = 'ERROR';
      this.btncolour = 'btncolerror';
      this.delbtntext = '';
      this.delbtn = 'delbtnnone';
      this.btnallign = 'aligncenter';
      this.btnval = 'OK';

    } else if (this.alerttype === 'success') {
      this.navcolour = 'navcolorsuccess';
      this.navimg = '../../../../../assets/images/success.png';
      this.navmsg = 'SUCCESS';
      this.btncolour = 'btncolsuccess';
      this.delbtntext = '';
      this.delbtn = 'delbtnnone';
      this.btnallign = 'aligncenter';
      this.btnval = 'OK';

    } else if (this.alerttype === 'warn') {
      this.navcolour = 'navcolorerror';
      this.navimg = '../../../../../assets/images/warn.png';
      this.navmsg = 'WARNING';
      this.btncolour = 'btncolerror';
      this.delbtntext = '';
      this.delbtn = 'delbtnnone';
      this.btnallign = 'aligncenter';
      this.btnval = 'OK';

    } else if (this.alerttype === 'delete') {
      this.navcolour = 'navcolorerror';
      this.navimg = '../../../../../assets/images/delete.png';
      this.navmsg = 'WARNING';
      this.btncolour = 'btncolerror';
      this.delbtntext = 'No';
      this.delbtn = 'delbtnhas';
      this.btnallign = 'alignleft';
      this.btnval = 'Yes';

    }
  }

  clearparam() {
    this.selectedfontfamily = 'cursive';
    this.fristparam = '';
    this.secondparam = '';
    this.alerttype = '';
    this.fristdiv = 'noclass';
    this.seconddiv = 'noclass';
    this.delbtn = '';
    this.navcolour = '';
    this.navimg = '';
    this.navmsg = '';
    this.btncolour = '';
    this.delbtntext = '';
    this.btnallign = '';
    this.btnval = '';
  }
}
