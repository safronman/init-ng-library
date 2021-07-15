import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


interface IArr {
  id: number
  title: string
}

@Component({
  selector: 'in-a',
  templateUrl: './in-a.component.html',
  styleUrls: ['./in-a.component.css']
})
export class InAComponent implements OnInit {

  arr: IArr[] = [
    {id: 1, title: '1'},
    {id: 2, title: '2'},
    {id: 3, title: '3'},
  ]

  constructor() {
  }

  ngOnInit(): void {

    let arr2 = this.arr
    console.log('must return true', arr2 === this.arr)

    let deepArr = _.cloneDeep(this.arr);
    console.log('must return false', deepArr === this.arr)


  }


}
