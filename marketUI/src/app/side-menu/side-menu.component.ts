import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  //templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  template: `
    <div class="sidebar">
      <ul>
        <li>Route one link</li>
        <li>Route one link</li>
        <li>Route one link</li>
      </ul>
    </div>
  `
})
export class SideMenuComponent implements OnInit {
  constructor(route: ActivatedRoute) {

    route.params.subscribe(params => console.log("side menu id parameter",params['id']));
   }

  ngOnInit() {
  }

}
