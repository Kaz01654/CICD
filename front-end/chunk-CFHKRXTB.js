import{c as b,e as I,o as M}from"./chunk-VE3AD5Y3.js";import{p as m}from"./chunk-QSIHMZNO.js";import{$ as a,Ca as h,Cb as f,Za as s,gb as c,ja as r,ka as u,pb as p,tc as g,za as d,zc as v}from"./chunk-II3ZEASU.js";var w=(()=>{class e{el;ngModel;control;cd;config;autoResize;variant="outlined";onResize=new d;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(i,t,n,l,o){this.el=i,this.ngModel=t,this.control=n,this.cd=l,this.config=o}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||e)(s(h),s(I,8),s(b,8),s(g),s(M))};static \u0275dir=u({type:e,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:6,hostBindings:function(t,n){t&1&&f("input",function(o){return n.onInput(o)}),t&2&&p("p-filled",n.filled)("p-inputtextarea-resizable",n.autoResize)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled")},inputs:{autoResize:[2,"autoResize","autoResize",v],variant:"variant"},outputs:{onResize:"onResize"},features:[c]})}return e})(),T=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=r({type:e});static \u0275inj=a({imports:[m]})}return e})();export{w as a,T as b};
