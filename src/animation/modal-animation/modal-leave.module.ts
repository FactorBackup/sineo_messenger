/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2019-present. All right reserved.
* Author By Abubakar Pagas
*/

import { Animation } from '@ionic/core';

//This page handle the animation for the leave modal controller
export function myLeaveAnimation(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {

    const baseAnimation = new AnimationC();

    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

    const wrapperAnimation = new AnimationC();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    const wrapperElRect = wrapperEl!.getBoundingClientRect();

    wrapperAnimation
      .fromTo('transform', 'scaleX(1) scaleY(1)', 'scaleX(0.1) scaleY(0.1)')
      .fromTo('opacity', 1, 0);

    backdropAnimation.fromTo('opacity', 0.4, 0.0);

    return Promise.resolve(baseAnimation
      .addElement(baseEl)
      .easing('ease-out')
      .duration(400)
      .add(backdropAnimation)
      .add(wrapperAnimation));

}