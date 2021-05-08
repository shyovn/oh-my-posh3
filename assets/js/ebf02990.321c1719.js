(window.webpackJsonp=window.webpackJsonp||[]).push([[47,18,25,26],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(0),n(125)),l=(n(127),n(128),n(59)),s=n(57),c=n(58),i={id:"linux",title:"Linux",sidebar_label:"\ud83d\udc27 Linux"},u={unversionedId:"linux",id:"linux",isDocsHomePage:!1,title:"Linux",description:"Setup your terminal",source:"@site/docs/install-linux.mdx",slug:"/linux",permalink:"/docs/linux",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-linux.mdx",version:"current",sidebar_label:"\ud83d\udc27 Linux",sidebar:"docs",previous:{title:"macOS",permalink:"/docs/macos"},next:{title:"Configuration",permalink:"/docs/configure"}},b=[{value:"Setup your terminal",id:"setup-your-terminal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Replace your existing prompt",id:"replace-your-existing-prompt",children:[]},{value:"Customize",id:"customize",children:[]}],p={toc:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"setup-your-terminal"},"Setup your terminal"),Object(r.b)("p",null,"Oh my Posh uses ANSI color codes under the hood, these should work in every terminal,\nbut you may have to set the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"$TERM")," to ",Object(r.b)("inlineCode",{parentName:"p"},"xterm-256color")," for it to work."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\nsudo chmod +x /usr/local/bin/oh-my-posh\n")),Object(r.b)("h4",{id:"download-the-themes"},"Download the themes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.poshthemes\nwget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip\nunzip ~/.poshthemes/themes.zip -d ~/.poshthemes\nchmod u+rw ~/.poshthemes/*.json\nrm ~/.poshthemes/themes.zip\n")),Object(r.b)("h4",{id:"preview-the-themes"},"Preview the themes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'for file in ~/.poshthemes/*.omp.json; do echo "$file\\n"; oh-my-posh --config $file --shell universal; echo "\\n"; done;\n')),Object(r.b)("h3",{id:"replace-your-existing-prompt"},"Replace your existing prompt"),Object(r.b)(l.default,{mdxType:"Shells"}),Object(r.b)("h3",{id:"customize"},"Customize"),Object(r.b)(s.default,{mdxType:"Customize"}),Object(r.b)(c.default,{mdxType:"CustomizeCmd"}),Object(r.b)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}m.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||r;return n?o.a.createElement(d,s(s({ref:t},i),{},{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},127:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(130),l=n(126),s=n(56),c=n.n(s);var i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(r.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,j=Object(a.useState)(s),O=j[0],g=j[1],y=a.Children.toArray(e.children),v=[];if(null!=p){var N=h[p];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&g(N)}var w=function(e){var t=e.target,n=v.indexOf(t),a=y[n].props.value;g(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,o,r,l,s,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,s=l.innerHeight,i=l.innerWidth,n>=0&&r<=i&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case i:var o=v.indexOf(e.target)-1;n=v[o]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},128:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},130:function(e,t,n){"use strict";var a=n(0),o=n(131);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(125)),l={},s={unversionedId:"install-customize",id:"install-customize",isDocsHomePage:!1,title:"install-customize",description:"At this point you're good to go. The jandedobbeleer.omp.json theme displays most common use-cases",source:"@site/docs/install-customize.md",slug:"/install-customize",permalink:"/docs/install-customize",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize.md",version:"current"},c=[],i={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"At this point you're good to go. The ",Object(r.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," theme displays most common use-cases\nin your prompt so 9/10 you'll be more than happy with it. However, if you want to explore additional\nfunctionality, going through the additional steps below will help you get started."),Object(r.b)("h4",{id:"change-the-theme"},"Change the theme"),Object(r.b)("p",null,"We downloaded all the themes and set ",Object(r.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," as the one to use.\nHowever, there are ",Object(r.b)("a",{parentName:"p",href:"/docs/themes"},"a lot more")," to be discovered and maybe there are some you like better."),Object(r.b)("h4",{id:"override-the-theme-settings"},"Override the theme settings"),Object(r.b)("p",null,"Maybe there's a theme you like, but you don't fancy the colors. Or, maybe there's a segment you\nwant to tweak/add, or replace some of the icons with a different one. Whatever the case, read through all\navailable options first, by starting with the ",Object(r.b)("a",{parentName:"p",href:"/docs/configure"},"configuration guide"),"."),Object(r.b)("p",null,"You can output the current theme to the format you like (",Object(r.b)("inlineCode",{parentName:"p"},"json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak\nand store as your custom theme."))}u.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(125)),l=n(127),s=n(128),c={},i={unversionedId:"install-customize-cmd",id:"install-customize-cmd",isDocsHomePage:!1,title:"install-customize-cmd",description:"<Tabs",source:"@site/docs/install-customize-cmd.mdx",slug:"/install-customize-cmd",permalink:"/docs/install-customize-cmd",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize-cmd.mdx",version:"current"},u=[],b={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l.a,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-powershell"},"Export-PoshTheme -FilePath ~/.mytheme.omp.json -Format json\n")),Object(r.b)("p",null,"Once you're done editing, adjust your ",Object(r.b)("inlineCode",{parentName:"p"},"$PROFILE")," to use your newly created theme."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-powershell"},"Invoke-Expression (oh-my-posh --init --shell pwsh --config ~/mytheme.omp.json)\n"))),Object(r.b)(s.a,{value:"zsh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(r.b)("p",null,"Once you're done editing, adjust ",Object(r.b)("inlineCode",{parentName:"p"},"~/.zshrc")," to use your newly created theme."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),Object(r.b)("p",null,"When adjusted, reload your profile for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.zshrc\n"))),Object(r.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(r.b)("p",null,"Once you're done editing, adjust ",Object(r.b)("inlineCode",{parentName:"p"},"~/.bashrc")," to use your newly created theme."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),Object(r.b)("p",null,"When adjusted, reload your profile for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n"))),Object(r.b)(s.a,{value:"fish",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(r.b)("p",null,"Once you're done editing, adjust ",Object(r.b)("inlineCode",{parentName:"p"},"config.fish")," to use your newly created theme."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.mytheme.omp.json | source\n")),Object(r.b)("p",null,"Once adjusted, reload your config for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n")))))}p.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(125)),l=n(127),s=n(128),c={},i={unversionedId:"install-shells",id:"install-shells",isDocsHomePage:!1,title:"install-shells",description:"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant",source:"@site/docs/install-shells.mdx",slug:"/install-shells",permalink:"/docs/install-shells",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-shells.mdx",version:"current"},u=[],b={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant\nfor the Powershell module)."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --print-shell\n")),Object(r.b)(l.a,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(r.b)("p",null,"Edit ",Object(r.b)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following line."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-powershell"},"Invoke-Expression (oh-my-posh --init --shell pwsh --config ~/mytheme.omp.json)\n")),Object(r.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-powershell"},". $PROFILE\n"))),Object(r.b)(s.a,{value:"zsh",mdxType:"TabItem"},Object(r.b)("p",null,"Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/mytheme.omp.json)"\n')),Object(r.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n"))),Object(r.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/mytheme.omp.json)"\n')),Object(r.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n")),Object(r.b)("p",null,"Or, when using ",Object(r.b)("inlineCode",{parentName:"p"},"~/.profile"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.profile\n"))),Object(r.b)(s.a,{value:"fish",mdxType:"TabItem"},Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It's advised to be on the latest version of fish. Versions below 3.1.2 have issues displaying the prompt."))),Object(r.b)("p",null,"Initialize Oh my Posh in ",Object(r.b)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.poshthemes/jandedobbeleer.omp.json | source\n")),Object(r.b)("p",null,"Once added, reload your config for the changes to take effect."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n"))),Object(r.b)(s.a,{value:"nu",mdxType:"TabItem"},Object(r.b)("p",null,"Set the prompt and restart nu shell:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "= `{{$(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)}}`"\n')),Object(r.b)("p",null,"Restart nu shell for the changes to take effect."))))}p.isMDXComponent=!0}}]);