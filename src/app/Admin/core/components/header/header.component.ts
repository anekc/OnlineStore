import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() toggleChange = new EventEmitter < boolean >();
toggledValue = true;
  constructor() { }

  ngOnInit(): void {
  }

toggled() {
  if (this.toggledValue === undefined){
  this.toggledValue = true;
  }
  this.toggledValue = !this.toggledValue;
  console.log(this.toggledValue);
  this. toggleChange.emit(this.toggledValue);
}

}
