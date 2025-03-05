/**
 * Created by dennis on 2017/11/24.
 */
import Loadable from 'loadable-components';

export const ScavengerLanding = Loadable(() => import('./components/Landing'));
export const Appointment = Loadable(() => import('./components/appointment'));
export const Reservation = Loadable(() => import('./components/Reservation'));
export const ReservationFinish = Loadable(() => import('./components/Reservation/ReservationFinish'));
export const Choice = Loadable(() => import('./components/choice'));
export const Order = Loadable(() => import('./components/Order'));
