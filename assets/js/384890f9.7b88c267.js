(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(125)),o={id:"kubectl",title:"Kubectl Context",sidebar_label:"Kubectl"},c={unversionedId:"kubectl",id:"kubectl",isDocsHomePage:!1,title:"Kubectl Context",description:"What",source:"@site/docs/segment-kubectl.md",slug:"/kubectl",permalink:"/docs/kubectl",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-kubectl.md",version:"current",sidebar_label:"Kubectl",sidebar:"docs",previous:{title:"Julia",permalink:"/docs/julia"},next:{title:"Node",permalink:"/docs/node"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Template Properties",id:"template-properties",children:[]},{value:"Tips",id:"tips",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what"},"What"),Object(i.b)("p",null,"Display the currently active Kubernetes context name and namespace name."),Object(i.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kubectl",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#000000",\n  "background": "#ebcc34",\n  "properties": {\n    "prefix": " \\uFD31 ",\n    "template": "{{.Context}}{{if .Namespace}} :: {{.Namespace}}{{end}}"\n  }\n}\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"template: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - A go ",Object(i.b)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},"text/template")," template extended with ",Object(i.b)("a",{parentName:"li",href:"https://masterminds.github.io/sprig/"},"sprig")," utilizing the\nproperties below. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"{{.Context}}{{if .Namespace}} :: {{.Namespace}}{{end}}")),Object(i.b)("li",{parentName:"ul"},"display_error: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the kubectl information - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"))),Object(i.b)("h2",{id:"template-properties"},"Template Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".Context"),": ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the current kubectl context"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".Namespace"),": ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the current kubectl namespace")),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("p",null,'It is common for the Kubernetes "default" namespace to be used when no namespace is provided. If you want your prompt to\nrender an empty current namespace using the word "default", you can use something like this for the template:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"{{.Context}} :: {{if .Namespace}}{{.Namespace}}{{else}}default{{end}}")))}u.isMDXComponent=!0}}]);