export class AboutService {

  private features: string[] = [
  "Example for how and where to add pages",
  "Resources/Services with a index.ts file to import all services in a more convenient way",
  "Aleph1 Layout Flex Library", 
  "Auth Http Client with cookie handling", 
  "BaseURL By Environment Webpack Configuration", 
  "@stateTrack attribute", 
  "@errorHandler attribute", 
  "@dirtyTrack attribute", 
  "Expireable localstorage", 
  "UnAuthorized Handling (Throw to main route)",
  "Font Awesome 5 Pro Included",
  "Routing Configuration",
  "RTL-Ready page using a1-rtl from aleph1-layout",
  "MASHTENA SHEL MEDINA"
  ];

  constructor() { }

  getFeatures = () => Promise.resolve(this.features);

}
