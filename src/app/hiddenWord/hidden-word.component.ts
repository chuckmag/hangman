import { Component, Input } from '@angular/core';

@Component({
  selector: 'hidden-word',
  templateUrl: './hidden-word.component.html',
  styleUrls: ['./hidden-word.component.css']
})

export class HiddenWordComponent {
  @Input() word: string;
}
