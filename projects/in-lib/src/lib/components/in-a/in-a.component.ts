import { Component, OnInit } from '@angular/core';

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

  arr: IArr[] = []

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.arr = [
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
      ]
    }, 2000)
  }


}
