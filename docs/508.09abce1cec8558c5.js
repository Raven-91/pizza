"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[508],{3508:(Oi,yt,w)=>{w.d(yt,{u:()=>St});var o=w(266),Pe=w(8645),qe=w(7398),u=w(5879),k=w(6273);const G=["popup"];function Nt(C,L){if(1&C&&(u.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),u._uU(5,"Modal title"),u.qZA(),u._UZ(6,"button",6),u.qZA(),u.TgZ(7,"div",7)(8,"p"),u._uU(9),u.qZA()(),u.TgZ(10,"div",8)(11,"button",9),u._uU(12,"Close"),u.qZA(),u.TgZ(13,"button",10),u._uU(14,"Save changes"),u.qZA()()()()()),2&C){const m=u.oxw();u.xp6(9),u.Oqu(m.data)}}let le=(()=>{class C{constructor(m){this.modalService=m,this.data=""}open(){this.modalService.open(this.popup)}}return C.\u0275fac=function(m){return new(m||C)(u.Y36(k.FF))},C.\u0275cmp=u.Xpm({type:C,selectors:[["app-popup"]],viewQuery:function(m,U){if(1&m&&u.Gf(G,5),2&m){let Q;u.iGM(Q=u.CRH())&&(U.popup=Q.first)}},inputs:{data:"data"},decls:2,vars:0,consts:[["popup",""],["tabindex","-1","id","myModal",1,""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(m,U){1&m&&u.YNc(0,Nt,15,1,"ng-template",null,0,u.W1O)},encapsulation:2}),C})();var Tt=w(7422);const Qe=[{path:"",component:(()=>{class C{constructor(m){this.cartService=m,this.subscription=null,this.subject=new Pe.x;let U=0;setInterval(()=>{this.subject.next(U++)},1e3),setTimeout(()=>{this.subject.complete()},4e3)}ngOnInit(){this.subscription=this.subject.subscribe({next:m=>{console.log("subscriber 1: ",m)},error:m=>{console.log("ERROR!!! "+m)}})}ngAfterViewInit(){}ngOnDestroy(){this.subscription?.unsubscribe()}test(){this.subject.pipe((0,qe.U)(m=>"\u0427\u0438\u0441\u043b\u043e: "+m)).subscribe(m=>{console.log("subscriber 2: ",m)})}}return C.\u0275fac=function(m){return new(m||C)(u.Y36(Tt.N))},C.\u0275cmp=u.Xpm({type:C,selectors:[["app-main"]],viewQuery:function(m,U){if(1&m&&u.Gf(le,5),2&m){let Q;u.iGM(Q=u.CRH())&&(U.popupComponent=Q.first)}},decls:46,vars:1,consts:[[1,"main"],[1,"container"],[1,"main-info"],[1,"double-title"],[1,"main-advantages"],[1,"advantage"],[1,"advantage-image"],["src","assets/images/main-icons/hop.png","alt","hop"],[1,"advantage-text"],[1,"advantage-title"],[1,"advantage-description"],["src","assets/images/main-icons/kitchen-pack.png","alt","kitchen-pack"],["src","assets/images/main-icons/seo-and-web.png","alt","seo-and-web"],["src","assets/images/main-icons/holidays.png","alt","holidays"],[1,"main-action"],[1,"button",3,"click"],[1,"main-image"],["src","assets/images/pizza_big.png","alt","Big pizza"],[3,"data"]],template:function(m,U){1&m&&(u.TgZ(0,"main",0)(1,"div",1)(2,"div",2)(3,"h1",3),u._uU(4," \u0421\u0430\u043c\u0430\u044f \u043b\u0443\u0447\u0448\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432 \u043c\u0438\u0440\u0435 "),u.TgZ(5,"span"),u._uU(6,"\u0442\u043e\u043b\u044c\u043a\u043e \u0432 Pizza Cheff"),u.qZA()(),u.TgZ(7,"div",4)(8,"div",5)(9,"div",6),u._UZ(10,"img",7),u.qZA(),u.TgZ(11,"div",8)(12,"div",9),u._uU(13," \u041b\u0443\u0447\u0448\u0435\u0435 \u0442\u0435\u0441\u0442\u043e "),u.qZA(),u.TgZ(14,"div",10),u._uU(15," \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0435\u0441\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0439 \u043c\u0443\u043a\u0438 \u043d\u0430\u0438\u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 "),u.qZA()()(),u.TgZ(16,"div",5)(17,"div",6),u._UZ(18,"img",11),u.qZA(),u.TgZ(19,"div",8)(20,"div",9),u._uU(21," \u043b\u0443\u0447\u0448\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430 "),u.qZA(),u.TgZ(22,"div",10),u._uU(23," \u041f\u0438\u0446\u0446\u044b \u0433\u043e\u0442\u043e\u0432\u044f\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430 "),u.qZA()()(),u.TgZ(24,"div",5)(25,"div",6),u._UZ(26,"img",12),u.qZA(),u.TgZ(27,"div",8)(28,"div",9),u._uU(29," \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 "),u.qZA(),u.TgZ(30,"div",10),u._uU(31," \u041d\u0430\u0448\u0430 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0433\u0440\u0430\u0434 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u0438\u0439 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443 "),u.qZA()()(),u.TgZ(32,"div",5)(33,"div",6),u._UZ(34,"img",13),u.qZA(),u.TgZ(35,"div",8)(36,"div",9),u._uU(37," \u043e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b "),u.qZA(),u.TgZ(38,"div",10),u._uU(39," \u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u043e\u0442 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u043b\u0438\u0434\u0435\u0440\u043e\u0432 \u0432 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0438\u0446\u0446\u044b "),u.qZA()()()(),u.TgZ(40,"div",14)(41,"a",15),u.NdJ("click",function(){return U.test()}),u._uU(42,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443"),u.qZA()()(),u.TgZ(43,"div",16),u._UZ(44,"img",17),u.qZA()()(),u._UZ(45,"app-popup",18)),2&m&&(u.xp6(45),u.Q6J("data","main component"))},dependencies:[le]}),C})()},{path:"about",component:(()=>{class C{constructor(m){this.modalService=m}ngOnInit(){}ngAfterViewInit(){this.popupComponent.open()}}return C.\u0275fac=function(m){return new(m||C)(u.Y36(k.FF))},C.\u0275cmp=u.Xpm({type:C,selectors:[["app-about"]],viewQuery:function(m,U){if(1&m&&u.Gf(le,5),2&m){let Q;u.iGM(Q=u.CRH())&&(U.popupComponent=Q.first)}},decls:13,vars:1,consts:[[1,"order","about"],[1,"container"],["id","delivery",1,"order-text-title","double-title"],[1,"order-text-message"],[1,"about-image"],["src","assets/images/pizza_big.png","alt","Pizza"],[3,"data"]],template:function(m,U){1&m&&(u.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"div",2)(4,"span"),u._uU(5,"\u041b\u0443\u0447\u0448\u0430\u044f "),u.qZA(),u._uU(6,"\u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0430\u044f \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f! "),u.qZA(),u.TgZ(7,"div",3),u._uU(8," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magnam placeat qui quos tempora? Ad consequuntur deserunt, eaque eius fuga harum iste laudantium odit quod reiciendis ut veniam vitae voluptatibus? Adipisci amet facilis impedit maiores nam nostrum omnis praesentium repudiandae sequi, voluptatum! Aut deserunt dolore eveniet ex ipsam iure laborum molestiae natus necessitatibus nemo nihil, quo saepe sunt ut vitae. Adipisci amet facilis impedit maiores nam nostrum omnis praesentium repudiandae sequi, voluptatum! Aut deserunt dolore eveniet ex ipsam iure laborum molestiae natus necessitatibus nemo nihil, quo saepe sunt ut vitae. Adipisci amet facilis impedit maiores nam nostrum omnis praesentium repudiandae sequi, voluptatum! Aut deserunt dolore eveniet ex ipsam iure laborum molestiae natus necessitatibus nemo nihil, quo saepe sunt ut vitae. Adipisci amet facilis impedit maiores nam nostrum omnis praesentium repudiandae sequi, voluptatum! Aut deserunt dolore eveniet ex ipsam iure laborum molestiae natus necessitatibus nemo nihil, quo saepe sunt ut vitae. "),u.qZA()(),u.TgZ(9,"div",4),u._UZ(10,"img",5)(11,"img",5),u.qZA()()(),u._UZ(12,"app-popup",6)),2&m&&(u.xp6(12),u.Q6J("data","about component"))},dependencies:[le],styles:[".about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;align-items:start}.about-image[_ngcontent-%COMP%]{margin-top:50px}"]}),C})()}];let St=(()=>{class C{}return C.\u0275fac=function(m){return new(m||C)},C.\u0275mod=u.oAB({type:C}),C.\u0275inj=u.cJS({imports:[o.Bz.forChild(Qe),o.Bz]}),C})()},6273:(Oi,yt,w)=>{w.d(yt,{FF:()=>ai,bz:()=>si});var o=w(5879),Pe=w(5592),qe=w(6232),u=w(2096),k=w(8645),G=w(2438),Nt=w(4825),le=w(4829);const{isArray:Tt}=Array;function Dt(t){return 1===t.length&&Tt(t[0])?t[0]:t}var wt=w(8251);w(3019);var L=w(9940);function m(...t){const i=(0,L.jO)(t),e=Dt(t);return e.length?new Pe.y(n=>{let a=e.map(()=>[]),s=e.map(()=>!1);n.add(()=>{a=s=null});for(let r=0;!n.closed&&r<e.length;r++)(0,le.Xf)(e[r]).subscribe((0,wt.x)(n,_=>{if(a[r].push(_),a.every(l=>l.length)){const l=a.map(c=>c.shift());n.next(i?i(...l):l),a.some((c,d)=>!c.length&&s[d])&&n.complete()}},()=>{s[r]=!0,!a[r].length&&n.complete()}));return()=>{a=s=null}}):qe.E}var U=w(5211),I=w(9773),se=w(2181),re=w(8180),on=w(9397),Be=w(7398),Ot=w(2460),Mi=(w(932),w(4664)),y=(w(7921),w(3997),w(836),w(6814));w(6223),Math,Math,Math;const Zo=["*"],va=["dialog"];function ge(t){return"string"==typeof t}function fe(t){return null!=t}function Ae(t){return(t||document.body).getBoundingClientRect()}const Sn={animation:!0,transitionTimerDelayMs:5},ds=()=>{},{transitionTimerDelayMs:us}=Sn,Ze=new Map,W=(t,i,e,n)=>{let a=n.context||{};const s=Ze.get(i);if(s)switch(n.runningTransition){case"continue":return qe.E;case"stop":t.run(()=>s.transition$.complete()),a=Object.assign(s.context,a),Ze.delete(i)}const r=e(i,n.animation,a)||ds;if(!n.animation||"none"===window.getComputedStyle(i).transitionProperty)return t.run(()=>r()),(0,u.of)(void 0).pipe(function ls(t){return i=>new Pe.y(e=>i.subscribe({next:r=>t.run(()=>e.next(r)),error:r=>t.run(()=>e.error(r)),complete:()=>t.run(()=>e.complete())}))}(t));const _=new k.x,l=new k.x,c=_.pipe(function Q(...t){return i=>(0,U.z)(i,(0,u.of)(...t))}(!0));Ze.set(i,{transition$:_,complete:()=>{l.next(),l.complete()},context:a});const d=function cs(t){const{transitionDelay:i,transitionDuration:e}=window.getComputedStyle(t);return 1e3*(parseFloat(i)+parseFloat(e))}(i);return t.runOutsideAngular(()=>{const g=(0,G.R)(i,"transitionend").pipe((0,I.R)(c),(0,se.h)(({target:f})=>f===i));(function Qe(...t){return 1===(t=Dt(t)).length?(0,le.Xf)(t[0]):new Pe.y(function St(t){return i=>{let e=[];for(let n=0;e&&!i.closed&&n<t.length;n++)e.push((0,le.Xf)(t[n]).subscribe((0,wt.x)(i,a=>{if(e){for(let s=0;s<e.length;s++)s!==n&&e[s].unsubscribe();e=null}i.next(a)})))}}(t))})((0,Nt.H)(d+us).pipe((0,I.R)(c)),g,l).pipe((0,I.R)(c)).subscribe(()=>{Ze.delete(i),t.run(()=>{r(),_.next(),_.complete()})})}),_.asObservable()};let nt=(()=>{class t{constructor(){this.animation=Sn.animation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var M=function(t){return t[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",t}(M||{});typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const $n=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Zn(t){const i=Array.from(t.querySelectorAll($n)).filter(e=>-1!==e.tabIndex);return[i[0],i[i.length-1]]}new Date(1882,10,12),new Date(2174,10,25);class ye{constructor(i,e,n){this.nodes=i,this.viewRef=e,this.componentRef=n}}let mr=(()=>{class t{constructor(e,n){this._el=e,this._zone=n}ngOnInit(){this._zone.onStable.asObservable().pipe((0,re.q)(1)).subscribe(()=>{W(this._zone,this._el.nativeElement,(e,n)=>{n&&Ae(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return W(this._zone,this._el.nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(e,n){2&e&&(o.Tol("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),o.ekj("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[o.jDz],decls:0,vars:0,template:function(e,n){},encapsulation:2}),t})();class oi{update(i){}close(i){}dismiss(i){}}const br=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],vr=["animation","backdropClass"];class yr{_applyWindowOptions(i,e){br.forEach(n=>{fe(e[n])&&(i[n]=e[n])})}_applyBackdropOptions(i,e){vr.forEach(n=>{fe(e[n])&&(i[n]=e[n])})}update(i){this._applyWindowOptions(this._windowCmptRef.instance,i),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,i)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe((0,I.R)(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe((0,I.R)(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(i,e,n,a){this._windowCmptRef=i,this._contentRef=e,this._backdropCmptRef=n,this._beforeDismiss=a,this._closed=new k.x,this._dismissed=new k.x,this._hidden=new k.x,i.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,r)=>{this._resolve=s,this._reject=r}),this.result.then(null,()=>{})}close(i){this._windowCmptRef&&(this._closed.next(i),this._resolve(i),this._removeModalElements())}_dismiss(i){this._dismissed.next(i),this._reject(i),this._removeModalElements()}dismiss(i){if(this._windowCmptRef)if(this._beforeDismiss){const e=this._beforeDismiss();!function Tn(t){return t&&t.then}(e)?!1!==e&&this._dismiss(i):e.then(n=>{!1!==n&&this._dismiss(i)},()=>{})}else this._dismiss(i)}_removeModalElements(){const i=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():(0,u.of)(void 0);i.subscribe(()=>{const{nativeElement:n}=this._windowCmptRef.location;n.parentNode.removeChild(n),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:n}=this._backdropCmptRef.location;n.parentNode.removeChild(n),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),m(i,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var Qt=function(t){return t[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",t}(Qt||{});let Nr=(()=>{class t{constructor(e,n,a){this._document=e,this._elRef=n,this._zone=a,this._closed$=new k.x,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new o.vpe,this.shown=new k.x,this.hidden=new k.x}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":ge(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe((0,re.q)(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:e}=this._elRef,n={animation:this.animation,runningTransition:"stop"},r=m(W(this._zone,e,()=>e.classList.remove("show"),n),W(this._zone,this._dialogEl.nativeElement,()=>{},n));return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){const e={animation:this.animation,runningTransition:"continue"};m(W(this._zone,this._elRef.nativeElement,(s,r)=>{r&&Ae(s),s.classList.add("show")},e),W(this._zone,this._dialogEl.nativeElement,()=>{},e)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{(0,G.R)(e,"keydown").pipe((0,I.R)(this._closed$),(0,se.h)(a=>a.which===M.Escape)).subscribe(a=>{this.keyboard?requestAnimationFrame(()=>{a.defaultPrevented||this._zone.run(()=>this.dismiss(Qt.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let n=!1;(0,G.R)(this._dialogEl.nativeElement,"mousedown").pipe((0,I.R)(this._closed$),(0,on.b)(()=>n=!1),(0,Mi.w)(()=>(0,G.R)(e,"mouseup").pipe((0,I.R)(this._closed$),(0,re.q)(1))),(0,se.h)(({target:a})=>e===a)).subscribe(()=>{n=!0}),(0,G.R)(e,"click").pipe((0,I.R)(this._closed$)).subscribe(({target:a})=>{e===a&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!n&&this._zone.run(()=>this.dismiss(Qt.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){const n=e.querySelector("[ngbAutofocus]"),a=Zn(e)[0];(n||a||e).focus()}}_restoreFocus(){const e=this._document.body,n=this._elWithFocus;let a;a=n&&n.focus&&e.contains(n)?n:e,this._zone.runOutsideAngular(()=>{setTimeout(()=>a.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&W(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(y.K0),o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(e,n){if(1&e&&o.Gf(va,7),2&e){let a;o.iGM(a=o.CRH())&&(n._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(e,n){2&e&&(o.uIk("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),o.Tol("modal d-block"+(n.windowClass?" "+n.windowClass:"")),o.ekj("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[o.jDz],ngContentSelectors:Zo,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(e,n){1&e&&(o.F$t(),o.TgZ(0,"div",0,1)(2,"div",2),o.Hsn(3),o.qZA()()),2&e&&o.Tol("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),t})(),Tr=(()=>{class t{constructor(e){this._document=e}hide(){const e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,a=n.style,{overflow:s,paddingRight:r}=a;if(e>0){const _=parseFloat(window.getComputedStyle(n).paddingRight);a.paddingRight=`${_+e}px`}return a.overflow="hidden",()=>{e>0&&(a.paddingRight=r),a.overflow=s}}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(y.K0))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Dr=(()=>{class t{constructor(e,n,a,s,r,_,l){this._applicationRef=e,this._injector=n,this._environmentInjector=a,this._document=s,this._scrollBar=r,this._rendererFactory=_,this._ngZone=l,this._activeWindowCmptHasChanged=new k.x,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new o.vpe,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const c=this._windowCmpts[this._windowCmpts.length-1];((t,i,e,n=!1)=>{t.runOutsideAngular(()=>{const a=(0,G.R)(i,"focusin").pipe((0,I.R)(e),(0,Be.U)(s=>s.target));(0,G.R)(i,"keydown").pipe((0,I.R)(e),(0,se.h)(s=>s.which===M.Tab),(0,Ot.M)(a)).subscribe(([s,r])=>{const[_,l]=Zn(i);(r===_||r===i)&&s.shiftKey&&(l.focus(),s.preventDefault()),r===l&&!s.shiftKey&&(_.focus(),s.preventDefault())}),n&&(0,G.R)(i,"click").pipe((0,I.R)(e),(0,Ot.M)(a),(0,Be.U)(s=>s[1])).subscribe(s=>s.focus())})})(this._ngZone,c.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(c.location.nativeElement)}})}_restoreScrollBar(){const e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,n,a){const s=a.container instanceof HTMLElement?a.container:fe(a.container)?this._document.querySelector(a.container):this._document.body,r=this._rendererFactory.createRenderer(null,null);if(!s)throw new Error(`The specified modal container "${a.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const _=new oi,l=(e=a.injector||e).get(o.lqb,null)||this._environmentInjector,c=this._getContentRef(e,l,n,_,a);let d=!1!==a.backdrop?this._attachBackdrop(s):void 0,g=this._attachWindowComponent(s,c.nodes),p=new yr(g,c,d,a.beforeDismiss);return this._registerModalRef(p),this._registerWindowCmpt(g),p.hidden.pipe((0,re.q)(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(r.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),_.close=f=>{p.close(f)},_.dismiss=f=>{p.dismiss(f)},_.update=f=>{p.update(f)},p.update(a),1===this._modalRefs.length&&r.addClass(this._document.body,"modal-open"),d&&d.instance&&d.changeDetectorRef.detectChanges(),g.changeDetectorRef.detectChanges(),p}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(n=>n.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let n=(0,o.LMc)(mr,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_attachWindowComponent(e,n){let a=(0,o.LMc)(Nr,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(a.hostView),e.appendChild(a.location.nativeElement),a}_getContentRef(e,n,a,s,r){return a?a instanceof o.Rgc?this._createFromTemplateRef(a,s):ge(a)?this._createFromString(a):this._createFromComponent(e,n,a,s,r):new ye([])}_createFromTemplateRef(e,n){const s=e.createEmbeddedView({$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}});return this._applicationRef.attachView(s),new ye([s.rootNodes],s)}_createFromString(e){const n=this._document.createTextNode(`${e}`);return new ye([[n]])}_createFromComponent(e,n,a,s,r){const _=o.zs3.create({providers:[{provide:oi,useValue:s}],parent:e}),l=(0,o.LMc)(a,{environmentInjector:n,elementInjector:_}),c=l.location.nativeElement;return r.scrollable&&c.classList.add("component-host-scrollable"),this._applicationRef.attachView(l.hostView),new ye([[c]],l.hostView,l)}_setAriaHidden(e){const n=e.parentElement;n&&e!==this._document.body&&(Array.from(n.children).forEach(a=>{a!==e&&"SCRIPT"!==a.nodeName&&(this._ariaHiddenValues.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,n)=>{e?n.setAttribute("aria-hidden",e):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){const n=()=>{const a=this._modalRefs.indexOf(e);a>-1&&(this._modalRefs.splice(a,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(n,n)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{const n=this._windowCmpts.indexOf(e);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.z2F),o.LFG(o.zs3),o.LFG(o.lqb),o.LFG(y.K0),o.LFG(Tr),o.LFG(o.FYo),o.LFG(o.R0b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),wr=(()=>{class t{constructor(e){this._ngbConfig=e,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(e){this._animation=e}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(nt))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ai=(()=>{class t{constructor(e,n,a){this._injector=e,this._modalStack=n,this._config=a}open(e,n={}){const a={...this._config,animation:this._config.animation,...n};return this._modalStack.open(this._injector,e,a)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.zs3),o.LFG(Dr),o.LFG(wr))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),si=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[ai]}),t})();new o.OlP("live announcer delay",{providedIn:"root",factory:function Qr(){return 100}})}}]);