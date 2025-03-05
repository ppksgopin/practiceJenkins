export const IndexRoute = () => '/';
export const DashboardRoute = () => '/dashboard';
export const UserRoute = () => '/user';
export const UserRegisterRoute = () => '/user/register';
export const UserForgetRoute = () => '/user/forget';
export const UserResetPassword = () => '/user/resetPassword'
export const UserEditRoute = () => '/user/edit';
export const UserDeleteWarnRoute = () => '/user/delete/check';
export const UserDeleteVerifyRoute = () => '/user/delete/verify';
export const UserDeleteFormRoute = () => '/user/delete/form';
export const UserDeleteSuccessRoute = () => '/user/delete/success';
export const UserZCoinRoute = () => '/user/zcoin';
export const UserExchangeRoute = () => '/user/exchange';
export const UserVoucherRoute = (recordType, recordStatus) => `/user/zcoin/${recordType}/${recordStatus}`;
export const UserPasswordRoute = () => '/user/password';
export const UserLoginRoute = () => '/user/login';
export const LoginRoute = () => '/login';
export const PhoneBindingRoute = () => '/user/phoneBinding';
export const RegSuccessRoute = () => '/user/register/success';

/**
 * 我的預約
 */
export const UserSummaryAllRoute = () => '/user/summary' ;
export const UserSummaryRoute = (type) => `/user/summary/${type}`;
export const UserCarOrderRoute = (orderId, type) => `/user/summary/car/${orderId}/${type}`;
export const UserElecReservationRoute = (appointmentId) => `/user/summary/electronic/${appointmentId}`;
export const UserFinishRoute = () => '/user/summary/finish';
export const EnterpriseAppointmentRoute = (appointmentId, appointmentType) => `/user/summary/enterprise/${appointmentType}/${appointmentId}`;

/**
 * 家電回收
 * @returns {string}
 * @constructor
 */
export const ElectronicRoute = () => '/electronic';
export const ElectronicAppointmentRoute = () => '/electronic/appointment/:step_id';
export const ElectronicAppointmentConfirmRoute = () => '/electronic/confirm';
export const ElectronicAppointmentFinishRoute = () => '/electronic/complete';
export const ElectronicAppointmentReviewRoute = (appointmentId) => `/electronic/review/${appointmentId}`;
export const ElectronicEventRoute = () => 'https://www.zerozero.com.tw/events/dyna/elehome';

/**
 * 廢車回收
 */
export const CarRoute = () => '/car';
export const CarChoiceRoute = () => '/car/choice';

// 詢價單
export const CarAppointmentRoute = () => '/car/appointment';
export const CarAppointmentOrderRoute = () => '/car/appointment/order';
export const CarAppointmentFinishRoute = slug => `/car/appointment/${slug}/finish`;

// 詢價單-即期品
export const NEproductsAppointmentRoute = () => '/NEproducts/appointment';
export const NEproductsAppointmentOrderRoute = () => '/NEproducts/appointment/order';
export const NEproductsAppointmentFinishRoute = slug => `/NEproducts/appointment/${slug}/finish`;


// 詢價單-廢機車報廢補助
export const MotorcycleUnuseMoneyAppointmentRoute = () => '/MotorcycleUnuseMoney/appointment';
export const MotorcycleUnuseMoneyAppointmentOrderRoute = () => '/MotorcycleUnuseMoney/appointment/order';
export const MotorcycleUnuseMoneyFinishRoute = slug => `/MotorcycleUnuseMoney/appointment/${slug}/finish`;

// 預約單
export const CarReservationRoute = slug => `/car/reservation/${slug}`;
export const CarReservationFinishRoute = slug => `/car/reservation/order/finish`;

// 預約單-即期品
export const NEproductsReservationRoute = slug => `/NEproducts/reservation/${slug}`;
export const NEproductsReservationFinishRoute = slug => `/NEproducts/reservation/order/finish`;

// 預約單-廢機車報廢補助
export const MotorcycleUnuseMoneyReservationRoute = slug => `/MotorcycleUnuseMoney/reservation/${slug}`;
export const MotorcycleUnuseMoneyReservationFinishRoute = slug => `/MotorcycleUnuseMoney/reservation/order/finish`;

// 訂單
export const CarOrderRoute = () => '/car/order';
export const CarOrderAppointmentRoute = () => '/car/order/appointment';
export const CarOrderReservationRoute = () => '/car/order/reservation';
export const CarOrderQuotationRoute = () => '/car/order/quotation';

// 訂單-即期品
export const NEproductsOrderRoute = () => '/NEproducts/order';
export const NEproductsOrderAppointmentRoute = () => '/NEproducts/order/appointment';
export const NEproductsOrderReservationRoute = () => '/NEproducts/order/reservation';
export const NEproductsOrderQuotationRoute = () => '/NEproducts/order/quotation';


// 訂單-廢機車報廢補助
export const MotorcycleUnuseMoneyOrderRoute = () => '/MotorcycleUnuseMoney/order';
export const MotorcycleUnuseMoneyOrderAppointmentRoute = () => '/MotorcycleUnuseMoney/order/appointment';
export const MotorcycleUnuseMoneyOrderReservationRoute = () => '/MotorcycleUnuseMoney/order/reservation';
export const MotorcycleUnuseMoneyOrderQuotationRoute = () => '/MotorcycleUnuseMoney/order/quotation';

/**
 * 企業服務
 */
export const EnterpriseRoute = () => '/enterprise';
export const EnterpriseDemoBS = () => '/enterprise/demo/bs';
export const EnterpriseDemoET = () => '/enterprise/demo/et';
export const EnterpriseDemoFM = () => '/enterprise/demo/fm';
export const EnterpriseDemoFN = () => '/enterprise/demo/fn';
export const EnterpriseDemoGov = () => '/enterprise/demo/gov';
export const EnterpriseDemoMD = () => '/enterprise/demo/md';
export const EnterpriseDemoTL = () => '/enterprise/demo/tl';


/**
 * 即期品
 */
export const NEproductsRoute = () => '/NEproducts';
export const NEproductsChoiceRoute = () => '/NEproducts/choice';


/**
 * 協會
 */
export const AssociationsRoute = () => '/association';


/**
 * 拾荒者
 */
export const ScavengerRoute = () => '/scavenger';
/**
 * 廢機車報廢補助
 */
export const MotorcycleUnuseMoneyRoute = () => '/MotorcycleUnuseMoney';
export const MotorcycleUnuseMoneyChoiceRoute = () => '/MotorcycleUnuseMoney/choice';

/**
 * 企業服務-文件銷毀
 * @returns {string}
 * @constructor
 */
export const EnterpriseDocDestroyRoute = () => `/enterprise/docdestroy`;

/**
 * 企業服務-磁碟銷毀
 * @returns {string}
 * @constructor
 */
export const EnterpriseDiskDestroyRoute = () =>'/enterprise/diskdestroy';

/**
 * 企業服務-廢木材清運
 * @returns {string}
 * @constructor
 */
export const EnterpriseWoodClearanceRoute = () =>'/enterprise/wood';

/**
 * 企業服務-食品報廢
 * @returns {string}
 * @constructor
 */
export const EnterpriseFoodClearanceRoute = () =>'/enterprise/food';

/**
 * 企業服務-污泥處理
 * @returns {string}
 * @constructor
 */
export const EnterpriseSludgeTreatmentRoute = () =>'/enterprise/sludge';



/**
 * 兌換中心
 */
export const ExchangeRoute = () => '/exchange';
export const ExchangeIndexRoute = () => '/exchange/index';
export const ExchangeItemIntroRoute = itemId => `/exchange/item/intro/${itemId}`;
export const ExchangeConfirmRoute = () => '/exchange/confirm';
export const ExchangeFinishRoute = () => '/exchange/finish';
export const ExchangeSearchRoute = () => '/exchange/search';
export const ExchangeRecordDetailRoute = recordId => `/exchange/record/${recordId}`;
//v2.10.0
export const ExchangeListRoute = () => '/exchange/list';
export const ExchangeListFinishRoute = () => '/exchange/complete';
export const ExchangeQuickSearchRoute = (itemId) => `/exchange/quickSearch/${itemId}`;

/**
 * 靜態頁面
 */
export const StaticRoute = () => '/statics';
export const ApartmentcomplexRoute = () => '/statics/apartmentcomplex';
//export const RecycleShopRoute = () => '/statics/recycleshop';
export const RecycleShopRoute = () => '/events/dyna/jinma_01?homepage';
export const CarmaintenanceRoute = () => '/statics/carmaintenance';
export const RecyclingbusinessRoute = () => '/statics/recyclingbusiness';
export const AboutRoute = () => '/statics/about';
export const CooperationRoute = () => '/statics/cooperation';
export const PolicyRoute = () => '/statics/policy';
export const PrivacyRoute = () => '/statics/privacy';
export const RecycledplasticRoute = () => '/statics/recycledplastic';
export const GreenproductRoute = () => '/statics/greenproduct';
export const BeginnerRoute = () => '/statics/beginner';
export const SatisfactionRoute = () => '/statics/satisfaction';
export const FaqRoute = () => '/statics/faq';
export const WaytozcoinRoute = () => '/statics/exchange/waytozcoin';
export const FreezcoinRoute = () => '/statics/exchange/freezcoin';

export const WebViewJavascriptBridgeTestRoute = () => '/statics/bridge' ;
export const WebViewBridgeRoute = () => '/statics/bridge/webviewbridgetest' ;
/**
 * 靜態活動頁面
 */
export const EventsRoute = () => '/events';
export const Event1Route = () => '/events/event1';
export const Event2Route = () => '/events/event2';
export const Event3Route = () => '/events/event3';

/**
 * 動態活動頁面
 */
export const DynamicEventRoute = eventId => `/events/dyna/${eventId}`;

/**
 *
 */
export const MapRoute = () => '/recycleMap';
