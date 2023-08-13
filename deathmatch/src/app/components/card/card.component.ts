import { Component, Input } from "@angular/core";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent {
  @Input() name: string = '';

  public isSelected: boolean = false;

  public selectCard(): void {
    this.isSelected = true;
  }
}
