import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass'],
})
export class MessageComponent {
  message: string = 'Loading app...';
  imageSrc: string =
    'https://img.freepik.com/premium-vector/loading-bar-status-progress-doodle-element-sketch-hand-drawn-style-vector-illustration_499863-85.jpg?w=2000';
}
