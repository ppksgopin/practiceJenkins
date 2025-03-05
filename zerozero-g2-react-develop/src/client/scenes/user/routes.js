import Loadable from 'loadable-components';

export const Profile = Loadable(() => import('./components/Profile'));
export const ProfileEdit = Loadable(() => import('./components/ProfileEdit'));
export const ProfileDeleteWarn = Loadable(() => import('./components/ProfileDelete/warn'));
export const ProfileDeleteVerify = Loadable(() => import("./components/ProfileDelete/verify"))
export const ProfileDeleteForm = Loadable(() => import('./components/ProfileDelete/form'));
export const ProfileDeleteSuccess = Loadable(() => import('./components/ProfileDelete/success'));
export const ForgetPassword = Loadable(() => import('./components/ForgetPassword'));
export const ResetPassword = Loadable(() => import('./components/ForgetPassword/resetPassword'));
export const ZCoin = Loadable(() => import('./components/ZCoin'));
export const Exchange = Loadable(() => import('./components/Exchange'));
export const Register = Loadable(() => import('./components/Register'));
export const RegisterSuccess = Loadable(() => import('./components/Register/success'));
export const SetupPassword = Loadable(() => import('./components/Register/setupPassword'));
export const Login = Loadable(() => import('./components/Login'));
export const Summary = Loadable(() => import('./components/Summary'));
export const CarOrder = Loadable(() => import('./components/Summary/CarOrder'));
export const ElecReservation = Loadable(() => import('./components/Summary/elecReservation'));
export const Finish = Loadable(() => import('./components/Summary/finish'));
export const PhoneBinding = Loadable(() => import('./components/PhoneBinding'));
export const EnterpriseAppointment = Loadable(() => import('./components/Summary/EnterpriseAppointment'));
