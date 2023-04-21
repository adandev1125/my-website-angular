import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  data = {
    features: ['Creative', 'Passionate', 'Optimistic'],
    skills: [
      { name: 'Angular', experience: 70 },
      { name: 'React', experience: 80 },
      { name: 'Next.js', experience: 80 },
      { name: 'Tailwind CSS', experience: 80 },
      { name: 'three.js', experience: 60 },
      { name: 'Phaser 3', experience: 80 },
      { name: 'Laravel', experience: 50 },
    ],
    services: [
      {
        title: 'Draw Front End',
        imgSrc: 'assets/service-front-end.png',
        comment:
          'Visually stunning and user-friendly websites and web applications that provide a seamless and engaging user experience',
      },
      {
        title: 'Construct Back End',
        imgSrc: 'assets/service-back-end.png',
        comment:
          'Robust and secure server-side infrastructure that powers dynamic websites and web applications',
      },
      {
        title: 'Build Web Games',
        imgSrc: 'assets/service-web-game.png',
        comment:
          'Fun and engaging games that are accessible on browsers and mobile devices, providing a unique and enjoyable experience to users',
      },
    ],
    portfolios: [
      {
        link: 'https://www.hse.ru/en',
        imgSrc: 'portfolio-1.jpg'
      },
      {
        link: 'https://www.ddz5.com',
        imgSrc: 'portfolio-2.jpg'
      },
      {
        link: 'https://lebronjamesinnovationcenter.nike.com',
        imgSrc: 'portfolio-3.jpg'
      },
      {
        link: 'http://lisasellspontevedra.com',
        imgSrc: 'portfolio-4.jpg'
      },
      {
        link: 'https://ardesignstudio.co.uk',
        imgSrc: 'portfolio-5.jpg'
      },
      {
        link: 'https://imaginaryones.com',
        imgSrc: 'portfolio-6.jpg'
      }
    ]
  };

  skillIcons: Map<string, string> = new Map([
    ['Angular', 'angular.svg'],
    ['React', 'react.svg'],
    ['Next.js', 'next-js.svg'],
    ['Laravel', 'laravel.svg'],
    ['Tailwind CSS', 'tailwind.svg'],
    ['three.js', 'three-js.svg'],
    ['Phaser 3', 'phaser.svg'],
  ]);

  ngOnInit(): void {
    var prevX = 0;
    var prevY = 0;
    var posX = '-50%';
    var posY = '-50%';
    var movedUp = false;
    var movedLeft = false;

    // EVENT HANDLERS
    $('.move-background').hover(function (event: any) {
      prevX = event.pageX;
      prevY = event.pageY;
    });

    $('.move-background').mousemove(function (event: any) {
      moveBackground(event);
    });

    // PARALLAX BACKGROUND EFFECT
    function moveBackground(event: any) {
      directionMoved(event);

      posX = movedLeft ? '-49%' : '-51%';
      posY = movedUp ? '-49%' : '-51%';

      $('.background').css({
        '-webkit-transform': 'translate(' + posX + ',' + posY + ')',
      });

      prevX = event.pageX;
      prevY = event.pageY;
    }

    function directionMoved(event: any) {
      movedLeft = prevX > event.pageX ? true : false;
      movedUp = prevY > event.pageY ? true : false;
    }
  }
}
