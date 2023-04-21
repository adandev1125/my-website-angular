import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements AfterViewInit {
  @Input()
  name: string = '';

  @Input()
  experience: number = 0;

  ngAfterViewInit(): void {

  }
}
