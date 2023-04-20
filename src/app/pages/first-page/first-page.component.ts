import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  showSeeMoreButton: boolean = false;

  ngOnInit(): void {}
}
