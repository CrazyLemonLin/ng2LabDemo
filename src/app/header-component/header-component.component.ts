import { Component, OnInit ,Input,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: 'header-component.component.html',
  styleUrls: ['header-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponentComponent implements OnInit {

  @Input()
  title :string;
  @Input()
  titleurl :string;
  @Input()
  keyWordFromAppComponent:string;

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  num = 10;
  isHide = false;
  headerBg = "yellow";
  constructor() { }

  ngOnInit() {
  }

  plusOne(event) {
    console.log(event);
    this.num++;
  }

  getHeaderStyle() {
    return { 'background-color': this.headerBg };
  }
}
