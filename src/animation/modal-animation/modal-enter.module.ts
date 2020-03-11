/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/

import { Animation } from '@ionic/core';


//This page handle the animation for the enter modal controller
export function myEnterAnimation(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {

    const baseAnimation = new AnimationC();

    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));

    wrapperAnimation
        .fromTo('transform', 'scaleX(0.1) scaleY(0.1)', 'translateX(0%) scaleX(1) scaleY(1)')
        .fromTo('opacity', 0, 1);

    backdropAnimation.fromTo('opacity', 0.01, 0.4);

    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}