import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  typedText: string = '';
  typedIndex: number = 0;
  typeTimer: any;

  @Input() text: string = '';
  @Input() interval: string = "1000";
  @Input() delay: string = "0";

  ngOnInit(): void {
    this.typedText = '';
    setTimeout(() => {
      this.typeTimer = setInterval(() => {
        if (this.typedIndex < this.text.length) {
          this.typedText = this.text.substring(0, ++this.typedIndex);
        } else {
          clearInterval(this.typeTimer);
        }
      }, Number(this.interval))
    }, Number(this.delay));
  }
}
