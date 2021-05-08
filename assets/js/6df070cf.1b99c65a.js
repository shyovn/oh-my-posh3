(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(125)),a={id:"ytm",title:"YouTube Music",sidebar_label:"YouTube Music"},c={unversionedId:"ytm",id:"ytm",isDocsHomePage:!1,title:"YouTube Music",description:"What",source:"@site/docs/segment-ytm.md",slug:"/ytm",permalink:"/docs/ytm",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-ytm.md",version:"current",sidebar_label:"YouTube Music",sidebar:"docs",previous:{title:"Time",permalink:"/docs/time"},next:{title:"Get Started",permalink:"/docs/contributing_started"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what"},"What"),Object(i.b)("p",null,"Shows the currently playing song in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ytmdesktop/ytmdesktop"},"YouTube Music Desktop App"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE"),": You ",Object(i.b)("strong",{parentName:"p"},"must")," enable Remote Control in YTMDA for this segment to work: ",Object(i.b)("inlineCode",{parentName:"p"},"Settings > Integrations > Remote Control")),Object(i.b)("p",null,"It is fine if ",Object(i.b)("inlineCode",{parentName:"p"},"Protect remote control with password")," is automatically enabled. This segment does not require the\nRemote Control password."),Object(i.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ytm",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#FF0000",\n  "properties": {\n    "prefix": "\\uF16A ",\n    "playing_icon": "\\uE602 ",\n    "paused_icon": "\\uF8E3 ",\n    "stopped_icon": "\\uF04D ",\n    "track_separator" : " - "\n  }\n}\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"playing_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when playing - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"\\uE602 ")),Object(i.b)("li",{parentName:"ul"},"paused_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when paused - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"\\uF8E3 ")),Object(i.b)("li",{parentName:"ul"},"stopped_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when paused - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"\\uF04D ")),Object(i.b)("li",{parentName:"ul"},"track_separator: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - text/icon to put between the artist and song name - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"-")),Object(i.b)("li",{parentName:"ul"},"api_url: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the YTMDA Remote Control API URL- defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:9863"))))}u.isMDXComponent=!0}}]);