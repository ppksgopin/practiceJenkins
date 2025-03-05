import Router from 'koa-router'
import app from "./app";
import redirect from "./middlewares/redirect";
import axios from 'axios';
import { getApiPath, getSocialCallback } from "./middlewares/axiosMiddleware";


//import { loginFlowCheck } from './passport-auth';

const router = new Router()

const passport = require('koa-passport')

const api = axios.create({
    baseURL: getApiPath(),
})




/*const loginFlowCheck = (user) => (() => {
    console.log('user: ', user);
    const api = axios.create({
        baseURL: getApiPath(),
    })
    //處理redirect
    let redirectUrl = "";
    if(user && user.provider === 'line') {
        const postData = {
            loginType:4,
            identity:user.id,
        }
        api.post('/v2.10.0/user/isIdExist', postData).then(res => {
            console.log('res:' , res);

        }).catch(e => {
            throw e;
        })

        return function() {
            return {user, redirectUrl}
        }
    }
})()*/

async function isIdExist(id) {
    const postData = {
        loginType:4,
        identity:id,
    }
    let res = await api.post('/v2.10.0/user/isIdExist', postData) ;
    let data = await res ;
    return data ;
}


//Line Login
router.get('/auth/login/line', passport.authenticate('line'));
router.get('/auth/line/callback',
    passport.authenticate("line", {failureRedirect: '/'}),
    (ctx, next) => {
       // console.log('ctx: ', ctx.req.user);
        const user = ctx.req.user ;
        const url = require("url");
        ctx.redirect(url.format({
            pathname: "/user/login",
            query: ctx.req.user
        }));
    }
);
/*
router.get('/auth/line/callback', passport.authenticate("line", { successRedirect: '/line/redirect', failureRedirect: '/'}));
router.get("/line/redirect",
    function (ctx) {
        console.log('ctx: ', ctx.req.user, ctx.router);
        const url = require("url");
        ctx.redirect(url.format({
            pathname: "/user/lineProfile",
            query: ctx.req.user
        }));
    }
);
*/

//Facebook Login
router.get('/auth/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback',
    passport.authenticate("facebook", {failureRedirect: '/'}),
    (ctx) => {
    // console.log('ctx: ', ctx.req.user, ctx.router);
    const url = require("url");
    ctx.redirect(url.format({
        pathname: "/user/login",
        query: ctx.req.user
    }));
});

/*
router.get('/auth/facebook/callback', passport.authenticate("facebook", { successRedirect: '/facebook/redirect', failureRedirect: '/'}));
router.get("/facebook/redirect",
    function (ctx) {
        console.log('ctx: ', ctx.req.user, ctx.router);
        const url = require("url");
        ctx.redirect(url.format({
            pathname: "/user/lineProfile",
            query: ctx.req.user
        }));
    }
);
*/


module.exports = router;
