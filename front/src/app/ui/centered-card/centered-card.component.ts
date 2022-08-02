import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centered-card',
  templateUrl: './centered-card.component.html',
  styleUrls: ['./centered-card.component.css']
})
export class CenteredCardComponent implements OnInit {
 @Input() title!: string
  constructor() { }

  ngOnInit(): void {
  }

}
