import Loadable from 'loadable-components' ;

export const Appointment = Loadable(() => import('./components/Appointment'));
export const Quotation = Loadable(() => import('./components/Quotation'));
export const Reservation = Loadable(() => import('./components/Reservation'));
