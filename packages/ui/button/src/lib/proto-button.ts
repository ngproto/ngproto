import type { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { booleanAttribute, Directive, inject, input, numberAttribute } from '@angular/core';
import {
  ButtonBehavior,
  DisableBehavior,
  FocusInteraction,
  HoverInteraction,
  PressInteraction,
} from '@ngproto/ui';
import { ProtoButtonState } from './proto-button.state';

@Directive({
  selector: '[protoButton]',
  exportAs: 'protoButton',
  providers: [
    ProtoButtonState,
    DisableBehavior,
    ButtonBehavior,
    FocusInteraction,
    HoverInteraction,
    PressInteraction,
  ],
})
export class ProtoButton {
  readonly state = inject(ProtoButtonState);

  readonly disabled = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  readonly focusable = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  readonly tabIndex = input<number, NumberInput>(0, {
    transform: value => numberAttribute(value, 0),
  });

  constructor() {
    this.state.setDisabled(this.disabled);
    this.state.setFocusable(this.focusable);
    this.state.setTabIndex(this.tabIndex);
  }
}
