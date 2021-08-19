import {animate, query, style, transition, trigger} from '@angular/animations';

export const TransitionRouter = trigger('routerAnim', [
  transition('home => *, residential <=> *, commercial <=> *, pests <=> *, sectors <=> *, about-us <=> *, vision <=> *, treatments <=> *, industry <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ], {optional: true}),

    query(':enter', [
      style({left: '-100%'})
    ], {optional: true}),

    query(':leave', [
      style({
        opacity: '1'
      }),
      animate('200ms ease', style({opacity: '0'}))
    ], {optional: true}),

    query(':enter',
      [
        style({
          opacity: '0'
        }),
        animate('1000ms cubic-bezier(0.01, 0.1, 0.2, 1)', style({
          opacity: '1', left: '0%'
        }))
      ], {optional: true})
  ])

]);
