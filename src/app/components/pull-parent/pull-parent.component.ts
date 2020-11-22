import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-pull-parent',
  templateUrl: './pull-parent.component.html',
  styleUrls: ['./pull-parent.component.css']
})
export class PullParentComponent implements OnInit, AfterContentChecked {

  public changes = 0;
  public clicked = 0;

  constructor() { }

  onClick() {
    this.clicked += 1;
  }

  ngAfterContentChecked(): void {
    this.changes += 1;
  }


  ngOnInit(): void {
  }

}
