import { inject } from '@angular/core';
import {
  ButtonBehavior,
  DisableBehavior,
  FocusInteraction,
  HoverInteraction,
  PressInteraction,
} from '@ngproto/ui';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export const ProtoButtonState = signalStore(
  withState({
    disabled: false,
    focusable: false,
    tabIndex: 0,
  }),
  withMethods(store => ({
    setDisabled: signalMethod((v: boolean) => patchState(store, { disabled: v })),
    setFocusable: signalMethod((v: boolean) => patchState(store, { focusable: v })),
    setTabIndex: signalMethod((v: number) => patchState(store, { tabIndex: v })),
  })),
  withProps(() => ({
    _disable: inject(DisableBehavior),
    _button: inject(ButtonBehavior),
    _focus: inject(FocusInteraction),
    _hover: inject(HoverInteraction),
    _press: inject(PressInteraction),
  })),
  withComputed(store => ({
    hardDisabled: store._disable.hardDisabled,
    softDisabled: store._disable.softDisabled,
    isPressed: store._press.isPressed,
    focusOrigin: store._focus.focusOrigin,
    isFocused: store._focus.isFocused,
    isFocusVisible: store._focus.isFocusVisible,
    isHovered: store._hover.isHovered,
  })),
  withMethods(store => ({
    focus: store._focus.focus,
    blur: store._focus.blur,
  })),
  withHooks({
    onInit(store) {
      store._disable.setDisabled(store.disabled);
      store._disable.setFocusable(store.focusable);
      store._disable.setTabIndex(store.tabIndex);
      store._focus.setDisabled(store.hardDisabled);
      store._hover.setDisabled(store.disabled);
      store._press.setDisabled(store.disabled);
    },
  }),
);
