import Loadable from 'loadable-components';
import { Event1Route, Event2Route, Event3Route , DynamicEventRoute} from '../../commons/routePaths';
import { getEventContent } from './components/Dynamic/action';

export const Event1 = Loadable(() => import('./components/Event1'));
export const Event2 = Loadable(() => import('./components/Event2'));
export const Event3 = Loadable(() => import('./components/Event3'));
export const Dynamic = Loadable(() => import('./components/Dynamic'));

//Dynamic.load();

export default () => [
    {
        path: Event1Route(),
        component: Event1
    }, {
        path: Event2Route(),
        component: Event2
    }, {
        path: Event3Route(),
        component: Event3
    }, {
        path: DynamicEventRoute(':eventId'),
        component: Dynamic,
        loadData: (route, match) => {
            return getEventContent(match.params.eventId);
        }
    }
]
