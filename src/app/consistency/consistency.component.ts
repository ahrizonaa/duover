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
      img: '../../assets/images/champions/bloodmoon-aatrox-prestige-splash.jpg',
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
}
