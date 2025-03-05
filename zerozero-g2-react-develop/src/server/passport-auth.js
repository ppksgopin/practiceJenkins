import {getSocialCallback} from "./middlewares/axiosMiddleware";

const passport = require('koa-passport')
const jwt = require("jsonwebtoken");

const LineStrategy = require("passport-line-auth/lib").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const socialCallback = getSocialCallback();


passport.use(
    new LineStrategy(
        {
            channelID: "1654415631",
            channelSecret: "3e94d8ba5182bd2d1eba1c769014e0aa",
            callbackURL: `${socialCallback}/auth/line/callback`,
            scope: ["profile", "openid", "email"],
            botPrompt: "normal"
        },
        function(accessToken, refreshToken, params, profile, cb) {
            //console.log('profile:', profile);
            const { email } = jwt.decode(params.id_token);
            profile.email = email;

            return cb(null, profile);
        }
    )
);


passport.use(new FacebookStrategy({
        clientID: '733342930208506',
        clientSecret: '8a648756f1ba927f492c884ae9f16add',
        callbackURL: `${socialCallback}/auth/facebook/callback`,
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(token, tokenSecret, profile, cb) {
        // console.log('profile emails type is Array: ', Array.isArray(profile.emails));
        // console.log('fb profile: ', profile);
        //2020/7/28增加是不是Array的判斷，有時FB必不會正確回傳emails，避免錯誤增加判斷
        if(Array.isArray(profile.emails)){
            profile.email = profile.emails[0].value;
        }
        if(Array.isArray(profile.photos)) {
            profile.photo = profile.photos[0].value;
        }
        return cb(null, profile)
    }
))


// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


