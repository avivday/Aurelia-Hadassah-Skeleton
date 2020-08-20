import { AboutService } from './about-service';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class About {

  features: string[];

  constructor(private aboutService: AboutService) { }

  attached() {
    this.aboutService.getFeatures()
      .then(features => this.features = features);
  }
}
