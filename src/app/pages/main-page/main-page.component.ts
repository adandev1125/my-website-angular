import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  data = {
    firstName: 'Adan',
    lastName: 'Yonai',
    summary: `Proficient in developing mobile and web apps, creating games, reviewing and optimizing codes and creating and
    establishing new algorithms and databases. Familiar with various SDLCs and software development methodologies like
    Agile Software Development and DevOps. Enjoy learning new skills and technologies, love to work in teams and wish to
    gain professional experiences in the real industry.`,
    features: ['Creative', 'Passionate', 'Optimistic'],
    skills: [
      { name: 'React', experience: 80 },
      { name: 'React Native', experience: 80 },
      { name: 'Tailwind CSS', experience: 80 },
      { name: 'Next.js', experience: 90 },
      { name: 'GraphQL', experience: 60 },
      { name: 'Oracle 11g', experience: 80 },
      { name: 'MongoDB', experience: 70 },
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
        imgSrc: 'portfolio-1.jpg',
        enabled: true,
      },
      {
        link: 'https://www.ddz5.com',
        imgSrc: 'portfolio-2.jpg',
        enabled: false,
      },
      {
        link: 'https://lebronjamesinnovationcenter.nike.com',
        imgSrc: 'portfolio-3.jpg',
        enabled: true,
      },
      {
        link: 'http://lisasellspontevedra.com',
        imgSrc: 'portfolio-4.jpg',
        enabled: true,
      },
      {
        link: 'https://ardesignstudio.co.uk',
        imgSrc: 'portfolio-5.jpg',
        enabled: true,
      },
      {
        link: 'https://imaginaryones.com',
        imgSrc: 'portfolio-6.jpg',
        enabled: true,
      },
    ],
    email: 'adanyonai@outlook.com',
    skype: 'live:.cid.4d11e434da2653a0',
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

  constructor(private elementRef: ElementRef) {}

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

  scrollToSection(idString:string) {
    const section = this.elementRef.nativeElement.querySelector('#' + idString);
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  }
}
