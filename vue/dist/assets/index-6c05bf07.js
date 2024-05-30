import{d as z,bg as D,Z as A,cb as j,a3 as k,ao as V,cc as B,cd as y,e as $,c as a,_ as T,h as r,a as P,br as M,P as b}from"./index-a5621346.js";var O=["class","style"],W=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:b.any,delay:Number,indicator:b.any}},p=null;function Z(t,n){return!!t&&!!n&&!isNaN(Number(n))}function F(t){var n=t.indicator;p=typeof n=="function"?n:function(){return a(n,null,null)}}const G=z({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:D(W(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:A("configProvider",j)}},data:function(){var n=this.spinning,e=this.delay,i=Z(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;k(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=V(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=B(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),y(i)?$(i,{class:e}):p&&y(p())?$(p(),{class:e}):a("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[a("i",{class:"".concat(n,"-dot-item")},null),a("i",{class:"".concat(n,"-dot-item")},null),a("i",{class:"".concat(n,"-dot-item")},null),a("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,o=this.$props,f=o.size,x=o.prefixCls,h=o.tip,d=h===void 0?(n=(e=this.$slots).tip)===null||n===void 0?void 0:n.call(e):h,N=o.wrapperClassName,l=this.$attrs,v=l.class,_=l.style,C=T(l,O),S=this.configProvider,U=S.getPrefixCls,E=S.direction,s=U("spin",x),u=this.sSpinning,I=(i={},r(i,s,!0),r(i,"".concat(s,"-sm"),f==="small"),r(i,"".concat(s,"-lg"),f==="large"),r(i,"".concat(s,"-spinning"),u),r(i,"".concat(s,"-show-text"),!!d),r(i,"".concat(s,"-rtl"),E==="rtl"),r(i,v,!!v),i),m=a("div",P(P({},C),{},{style:_,class:I}),[this.renderIndicator(s),d?a("div",{class:"".concat(s,"-text")},[d]):null]),g=M(this);if(g&&g.length){var c,w=(c={},r(c,"".concat(s,"-container"),!0),r(c,"".concat(s,"-blur"),u),c);return a("div",{class:["".concat(s,"-nested-loading"),N]},[u&&a("div",{key:"loading"},[m]),a("div",{class:w,key:"container"},[g])])}return m}});export{G as S,F as s};
