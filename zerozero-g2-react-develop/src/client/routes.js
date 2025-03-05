import Loadable from 'loadable-components';

export const Dashboard = Loadable(() => import('./scenes/dashboard'));
export const User = Loadable(() => import('./scenes/user'));
//export const Login = Loadable(() => import('./scenes/login_deprecated'));
export const Electronic = Loadable(() => import('./scenes/electronic'));
export const Car = Loadable(() => import('./scenes/car'));

export const Exchange = Loadable(() => import('./scenes/exchange'));
export const Statics = Loadable(() => import('./scenes/statics'));
export const Events = Loadable(() => import('./scenes/events'));
export const Enterprise = Loadable(() => import('./scenes/enterprise'));
export const NEproducts = Loadable(() => import('./scenes/NEproducts'));
export const Scavenger = Loadable(() => import('./scenes/scavenger'));
export const Association = Loadable(() => import('./scenes/association'));
export const MotorcycleUnuseMoney = Loadable(() => import('./scenes/MotorcycleUnuseMoney'));
export const Map = Loadable(() => import('./scenes/map'));
export { default as PageNotFound } from './scenes/pageNotFound'

Dashboard.load();
User.load();
//Login.load();
Electronic.load();
Car.load();
Exchange.load();
Statics.load();
Events.load();
Enterprise.load();
Scavenger.load();
Association.load();
MotorcycleUnuseMoney.load();
Map.load();
