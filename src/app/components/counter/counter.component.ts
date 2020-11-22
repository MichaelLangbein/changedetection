import { Component, OnInit, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges, AfterContentChecked {

  public changes = 0;
  public clicked = 0;

  constructor() { }
  
  ngAfterContentChecked(): void {
    this.changes += 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.changes += 1;
  }

  onClick() {
    this.clicked += 1;
  }

  ngOnInit(): void {
  }

}
