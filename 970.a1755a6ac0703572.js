"use strict";(self.webpackChunkbluerays_alpha=self.webpackChunkbluerays_alpha||[]).push([[970],{7970:(M,i,o)=>{o.r(i),o.d(i,{RegisterModule:()=>h});var l=o(9808),a=o(832),t=o(5e3),s=o(7556);const u=function(){return["/login"]},p=[{path:"",component:(()=>{class n{constructor(e){this.authService=e}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:33,vars:2,consts:[[1,"row",2,"margin-top","4%","margin-bottom","10%"],[1,"col-sm-4"],[1,"auth-text"],[1,"form-group"],["type","email","placeholder","Email Address","name","email","value","","required","",1,"form-control","form-control-light"],["userEmail",""],["type","password","placeholder","Password","name","password","value","","required","",1,"form-control","form-control-light"],["userPwd",""],["type","submit",1,"btn-custom","secondary","btn-block",3,"click"],[1,"auth-seperator"],[1,"social-login"],["type","button",1,"acr-social-login","facebook",3,"click"],[1,"fab","fa-facebook-f"],["type","button",1,"acr-social-login","google",3,"click"],[1,"fab","fa-google"],[1,"text-center","mb-0"],["routerLinkActive","router-link-active",3,"routerLink"]],template:function(e,c){if(1&e){const m=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",1)(3,"div",2)(4,"h3"),t._uU(5,"Create A Bluerays Account"),t.qZA()(),t.TgZ(6,"div",3)(7,"label"),t._uU(8,"Email Address"),t.qZA(),t._UZ(9,"input",4,5),t.qZA(),t.TgZ(11,"div",3)(12,"label"),t._uU(13,"Password"),t.qZA(),t._UZ(14,"input",6,7),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){t.CHM(m);const C=t.MAs(10),_=t.MAs(15);return c.authService.SignUp(C.value,_.value)}),t._uU(17,"Register"),t.qZA(),t.TgZ(18,"div",9)(19,"span"),t._uU(20,"OR"),t.qZA()(),t.TgZ(21,"div",10)(22,"button",11),t.NdJ("click",function(){return c.authService.GoogleAuth()}),t._UZ(23,"i",12),t._uU(24," Continue with Facebook "),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){return c.authService.GoogleAuth()}),t._UZ(26,"i",14),t._uU(27," Continue with Google"),t.qZA()(),t.TgZ(28,"p",15),t._uU(29,"Already have an account? "),t.TgZ(30,"a",16),t._uU(31,"Login"),t.qZA()()(),t._UZ(32,"div",1),t.qZA()}2&e&&(t.xp6(30),t.Q6J("routerLink",t.DdM(1,u)))},directives:[a.yS,a.Od],styles:['.acr-auth-container[_ngcontent-%COMP%]{position:relative;display:flex}.acr-auth-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.acr-auth-bg-slider[_ngcontent-%COMP%], .acr-auth-bg-item[_ngcontent-%COMP%], .acr-auth-bg-slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%}.acr-auth-bg-slider[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]{position:absolute;bottom:40px;right:40px}.acr-auth-container[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%], .acr-auth-container[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%]{margin:0;position:relative}.acr-auth-bg-slider[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:0;line-height:1}.acr-auth-content[_ngcontent-%COMP%]{padding:80px;display:flex;flex-direction:column;justify-content:space-between}.acr-auth-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.acr-auth-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]{margin-top:10px}.auth-seperator[_ngcontent-%COMP%]{margin:30px 0;text-align:center}.auth-seperator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;color:#848486;font-size:13px;font-weight:500}.auth-seperator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";flex:1;background-color:#0000001a;height:1px;margin-right:20px}.auth-seperator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";flex:1;background-color:#0000001a;height:1px;margin-left:20px}.acr-auth-content[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{display:inline-block;color:#101737;text-decoration:underline}.acr-auth-content[_ngcontent-%COMP%]   .auth-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:30px}.acr-auth-content[_ngcontent-%COMP%]   .auth-nav[_ngcontent-%COMP%]{margin:30px 0;border-bottom:1px solid rgba(0,0,0,.1)}.acr-auth-content[_ngcontent-%COMP%]   .auth-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding-bottom:30px;margin-right:30px;font-weight:600;color:#101737}.acr-auth-content[_ngcontent-%COMP%]   .auth-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#01bbbc;border-bottom:2px solid #01BBBC}.social-login[_ngcontent-%COMP%]{margin-bottom:30px}.acr-social-login[_ngcontent-%COMP%]{cursor:pointer;display:block;width:100%;margin-bottom:10px;text-align:center;white-space:nowrap;vertical-align:middle;line-height:24px;border:0;font-size:14px;font-weight:600;padding:12px 20px;border-radius:8px;transition:.3s}.acr-social-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.acr-auth-bg-slider[_ngcontent-%COMP%]   .acr-auth-quote[_ngcontent-%COMP%]{position:absolute;bottom:60px;left:0;height:auto;background-color:#fff;border-radius:8px;padding:20px;margin:20px 40px;box-shadow:0 2px 9px #220c2b1a}.acr-auth-bg-slider[_ngcontent-%COMP%]   .acr-auth-quote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:5px}.acr-auth-bg-slider[_ngcontent-%COMP%]   .acr-auth-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.tile[_ngcontent-%COMP%]{height:100%;background-image:url(2.0853780ea0a02e32.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#4a5779;padding:20px}']}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,d]]}),n})()}}]);