import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      h2{
        color: #fff;
      }
      .list-group-item{
        background-color: rgb(25,25,25);
      }
      ul li{
        border: 1px solid #0067ff;
        color: #0067ff;
      }
      .list-group-item.active{
        background: #0067ff;
        color: #fff;
        outline: none;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
