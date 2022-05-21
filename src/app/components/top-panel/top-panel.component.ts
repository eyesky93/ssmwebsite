import { Component, OnInit, Input } from '@angular/core';
import { ResizePageService } from 'src/app/services/resize-page.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // expendSearch(event) {
  //   document.getElementById('SearchBar').className = 'searchbox-stretched';
  //   // document.getElementById('Home').style.transform = "scaleX(0)";
  //   // document.getElementById('Home').style.width = "0";
  // }
  // closeSearch() {
  //   if (
  //     document.getElementById('SearchBar').className == 'searchbox-stretched'
  //   ) {
  //     document.getElementById('SearchBar').className = 'searchbox';
  //     // document.getElementById('Home').style.transform = "none";
  //     //document.getElementById('Home').style.width = "38.5%";
  //   }
  // }
  // search(value) {}
  // iconSize(newwidth: number) {
  //   console.log('New Width: ' + newwidth);
  // }
}
