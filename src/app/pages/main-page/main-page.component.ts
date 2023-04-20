import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  skills: Array<{ name: string; experience: number }> = [
    { name: 'Angular', experience: 70 },
    { name: 'React', experience: 80 },
    { name: 'Next.js', experience: 80 },
    { name: 'Tailwind CSS', experience: 80 },
    { name: 'three.js', experience: 60 },
    { name: 'Phaser 3', experience: 80 },
    { name: 'Laravel', experience: 50 },
  ];

  skillIcons: Map<string, string> = new Map([
    ['Angular', 'angular.svg'],
    ['React', 'react.svg'],
    ['Next.js', 'next-js.svg'],
    ['Laravel', 'laravel.svg'],
    ['Tailwind CSS', 'tailwind.svg'],
    ['three.js', 'three-js.svg'],
    ['Phaser 3', 'phaser.svg'],
  ]);
}
