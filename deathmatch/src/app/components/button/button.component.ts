import { ClassField } from "@angular/compiler";
import { Component, Input, Renderer2 } from "@angular/core";

@Component({
  selector: 'ButtonComponent',
  templateUrl: './button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() status: string = '';
  @Input() isClassified: boolean = false;

  constructor(
    protected renderer2: Renderer2,
  ) {
    //
  }

  public modifierClassIfClassified(): string {
    if (!this.isClassified || this.text === '') {
      return ''
    }

    return 'button--classified'
  }
}
