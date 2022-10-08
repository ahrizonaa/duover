import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: Page[] = [
    { title: 'Home', url: '/home', icon: 'home', id: 1 },
    // { title: 'Play', url: '/play', icon: 'game-controller', id: 2 },
    {
      title: 'Consistency',
      url: '/consistency',
      icon: 'school',
      id: 3,
    },
    {
      title: 'Champion Mastery',
      url: '/championmastery',
      icon: 'lock-open',
      id: 4,
    },
  ];
  public labels = ['Performance Status', 'History', 'Settings'];

  public champions: Champion[] = [];

  activePage: Page = this.appPages[0];
  constructor() {}

  setActivePage(page: Page) {
    console.log(page);
    this.activePage = page;
  }
}

export interface Page {
  title: string;
  url: string;
  icon: string;
  id?: number;
}

export interface Champion {
  name: string;
  img: string;
}
