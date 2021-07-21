import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'in-b1',
  templateUrl: './in-b1.component.html',
  styleUrls: ['./in-b1.component.css']
})
export class InB1Component implements OnInit {

  arr = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'},
  ]

  constructor() {
  }

  ngOnInit(): void {
    let deep = cloneDeep(this.arr);
    console.log(deep === this.arr);
  }

}
