(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,p(p({ref:t},l),{},{components:n})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(125)),i={id:"spotify",title:"Spotify",sidebar_label:"Spotify"},p={unversionedId:"spotify",id:"spotify",isDocsHomePage:!1,title:"Spotify",description:"What",source:"@site/docs/segment-spotify.md",slug:"/spotify",permalink:"/docs/spotify",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-spotify.md",version:"current",sidebar_label:"Spotify",sidebar:"docs",previous:{title:"Shell",permalink:"/docs/shell"},next:{title:"Terraform Context",permalink:"/docs/terraform"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Show the currently playing song in the Spotify MacOS/Windows client.",Object(a.b)("br",{parentName:"p"}),"\n","On Windows, only the playing state is supported (no information when paused/stopped).",Object(a.b)("br",{parentName:"p"}),"\n","On macOS, all states are supported (playing/paused/stopped).",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Be aware this can make the prompt a tad bit slower as it needs to get a response from the Spotify player."),"  "),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "spotify",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#1BD760",\n  "properties": {\n    "prefix": "\\uF9C6 ",\n    "playing_icon": "\\uE602 ",\n    "paused_icon": "\\uF8E3 ",\n    "stopped_icon": "\\uF04D ",\n    "track_separator" : " - "\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"playing_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when playing - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"\\uE602 ")),Object(a.b)("li",{parentName:"ul"},"paused_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when paused - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"\\uF8E3 ")),Object(a.b)("li",{parentName:"ul"},"stopped_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text/icon to show when stopped - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"\\uF04D ")),Object(a.b)("li",{parentName:"ul"},"track_separator: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text/icon to put between the artist and song name - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"-"))))}s.isMDXComponent=!0}}]);