import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-push-parent',
  templateUrl: './push-parent.component.html',
  styleUrls: ['./push-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushParentComponent implements OnInit {
  
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
