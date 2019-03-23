import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  climbs={black:0, yellow:0,hendrix:0, purple:0, tiger:0, blue:0}
  constructor() { }

  ngOnInit() {
  }

  minus(e, id){
    e.stopPropagation();
    if(this.climbs[id]>0){
      this.climbs[id]--
    }
    console.log(this.climbs)
  }
  plus(id){
    this.climbs[id]++
    console.log(this.climbs)
  }
}
