/**
 * Created by dennis on 2017/11/24.
 */
import Loadable from 'loadable-components';


export const AssociationLanding  = Loadable(() => import('./components/Landing'));

export const Reservation = Loadable(() => import('./components/Reservation'));
export const ReservationFinish = Loadable(() => import('./components/Reservation/ReservationFinish'));

