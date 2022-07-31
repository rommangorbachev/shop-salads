import { Component, Input, OnInit } from '@angular/core';
import { SaladModel } from '../../models/salad.model';

@Component({
  selector: 'app-salad-card',
  templateUrl: './salad-card.component.html',
  styleUrls: ['./salad-card.component.css']
})
export class SaladCardComponent implements OnInit {

  @Input() salad!: SaladModel

  constructor() { }

  ngOnInit(): void {
  }

}
