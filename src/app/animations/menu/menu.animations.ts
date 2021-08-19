import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const animationMenuTrigger = trigger('animationMenuTrigger', [
  state('show', style([{
    height: '50vh'
  }])),
  state('hidden', style([
    {
      height: '4rem'
    }
  ])),
  transition('hidden => show', [animate('.1s', style([
      {
        height: '50vh'
      }
    ]
  )),
    query('#menuNav',
      stagger('.2s', [
          animate('.3s', style({
              display: 'inline-block'
            }
          ))
        ]
      ))
  ]),
  transition('show => hidden', [
    animate('.3s', style([{
        height: '4rem'
      }]
      )
    ),
    query('#menuNav', stagger(2000, [animate(0, style([
      {display: 'none'}
    ]))]))
  ])
]);

export const animationMenuItemsTrigger = trigger('animationMenuItems', [
    state('hidden', style({display: 'none'})),
    state('show', style({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '2rem'
    }))
  ]
);
