import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input()
  name: string = ''

  @Input()
  imgSrc: string = ''

  @Input()
  experience: number = 0

}
