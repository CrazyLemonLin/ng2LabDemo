import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: 'header-component.component.html',
  styleUrls: ['header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  title='The Will Will Web !!'
 titleurl = 'http://blog.miniasp.com/';

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  num=10;
  constructor() { }

  ngOnInit() {
  }
  plusOne(event){
    console.log(event);
    this.num ++;
  }
}
