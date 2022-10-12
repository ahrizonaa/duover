import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { FreeMode, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

@Component({
  selector: 'app-consistency',
  templateUrl: './consistency.component.html',
  styleUrls: ['./consistency.component.scss'],
})
export class ConsistencyComponent {
  champions: Champion[] = [
    {
      name: 'Aatrox',
      img: '../../assets/images/champions/aatrox/aatrox-splashart.jpg',
      passive: {
        name: 'Deathbringer Stance',
        type: 'Passive',
        description:
          "Periodically, Aatrox empowers his next basic attack to gain Range icon.png 50 bonus range and deal bonus physical damage equal to 5% − 12% (based on level) of the target's maximum health, capped at 100 against Monster icon.png monsters.  Aatrox Heal power icon.png heals for 100% of the post-mitigation damage dealt, reduced to 25% against Minion icon.png minions.",
      },
    },
    {
      name: 'Ahri',
      img: '../../assets/images/champions/champion-ahri-elderwood-splash.jpg',
      bgImageShift: '47%',
    },
    {
      name: "Kai'Sa",
      img: '../../assets/images/champions/kda-worlds-5.jpg',
    },
    {
      name: 'Vladimir',
      img: '../../assets/images/champions/champion-vladimir-darkwaters-splash.jpg',
      bgImageShift: '75%',
    },
  ];

  activeChampion: Champion = null;

  constructor() {}

  activate(champ: Champion) {
    for (const c of this.champions) {
      c.active = false;
    }
    champ.active = true;
    this.activeChampion = champ;
  }
}

export interface Champion {
  name: string;
  img: string;
  active?: boolean;
  bgImageShift?: string;
  passive?: any;
}
