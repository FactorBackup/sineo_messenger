/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas

*/
import { Animation } from '@ionic/core'
// This page handle the animation for the alert controller
export function customAlertEnter(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {

  const baseAnimation = new AnimationC();

  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

  const wrapperAnimation = new AnimationC();
  const wrapperElem = baseEl.querySelector('.alert-wrapper') as HTMLElement;
  wrapperAnimation.addElement(wrapperElem);
  wrapperElem.style.top = '0';
// backdrop Animation
  backdropAnimation.fromTo('opacity', 0.01, 0.3);
  wrapperAnimation.beforeStyles({ 'opacity': 1 });
  wrapperAnimation.fromTo('transform', `translateY(-${baseEl.clientHeight}px)`, 'translateY(0px)')

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(.36, .66, .3, .1, 1)')
    .duration(500)
    .add(wrapperAnimation)
    .add(backdropAnimation));
}