/**
 * Created by ryan on 2017/11/1.
 */
import Loadable from 'loadable-components' ;

export const Appointment = Loadable(() => import('./components/Appointment/index'));
export const AppointmentConfirm = Loadable(() => import('./components/Appointment/confirm'));
export const AppointmentFinish = Loadable(() => import('./components/Appointment/complete'));
export const AppointmentReview = Loadable(() => import('./components/Appointment/review'));