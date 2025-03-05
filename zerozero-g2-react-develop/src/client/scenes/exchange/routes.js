import Loadable from 'loadable-components';

export const Index = Loadable(() => import('./components/Index'));
export const ItemIntro = Loadable(() => import('./components/ItemIntro'));
export const Confirm = Loadable(() => import('./components/ItemIntro/Confirm'));
export const Finish = Loadable(() => import('./components/ItemIntro/Finish'));
export const Search = Loadable(() => import('./components/Search'));
export const Record = Loadable(() => import('./components/Record'));
//v2.10.0
export const ExchangeList = Loadable(() => import('./components/ExchangeList'));
export const ExchangeListFinish = Loadable(() => import('./components/ExchangeList/Finish'));
export const QuickSearch = Loadable(() => import('./components/QuickSearch'));