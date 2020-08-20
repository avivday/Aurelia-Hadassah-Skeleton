import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration } from "aurelia-router";

export class App {
  configureRouter(config: RouterConfiguration): void {
    config.title = 'Your App Title';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName("components/home/home"), title: 'דף הבית' },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName("components/about/about"), title: 'אודות' }
    ]);
  }
}
