(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[86],{1590:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,c=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(c=window);var i=t.FrameContext=r.default.createContext({document:l,window:c}),u=i.Provider,s=i.Consumer;t.FrameContextProvider=u,t.FrameContextConsumer=s},1591:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(21),o=n(143),r=n(1574),l=n(1583),c=n(1553),i=n(2993),u=n(3146),s=n(0),d=n.n(s),m=n(11),f=n(5),p=n(81),h=n(82),y=n(159),v=n(158),b=n(1507),E=n(790),g=n(1545),x=n(1573),w=n(9),j=n(512),_=n(513),C=n(1592),M=n.n(C),O=Object(b.a)({productionPrefix:"iframe-"}),D=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.a)(Object(f.a)(Object(f.a)({},Object(E.a)()),{},{plugins:[].concat(Object(m.a)(Object(E.a)().plugins),[Object(_.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(M.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(g.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},d.a.createElement(x.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),N=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(D);function P(e){var t=Object(s.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],p=e.component,h=e.raw,y=e.iframe,v=e.className;return d.a.createElement(l.a,{className:v},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},p&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),h&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center"},d.a.createElement("div",{className:0===m?"flex flex-1":"hidden"},p&&(y?d.a.createElement(N,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}P.defaultProps={currentTabIndex:0};var T=P},1592:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1590);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1593),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1593:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=d(r),c=d(n(18)),i=d(n(3)),u=n(1590),s=d(n(1594));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(s.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(u.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);u.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=u},2941:function(e,t,n){"use strict";n.r(t);var a=n(1553),o=n(1559),r=n(245),l=n(1895),c=n.n(l),i=n(0),u=n.n(i);function s(e){var t=e.text;return u.a.createElement(o.a,{title:t,placement:"top"},u.a.createElement(a.a,{className:"text-red"},"place"))}t.default=function(){return u.a.createElement("div",{className:"w-full"},u.a.createElement(r.a,{className:"h2 mb-16"},"Simple Map Example"),u.a.createElement("div",{className:"w-full h-512"},u.a.createElement(c.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:12,defaultCenter:[-34.397,150.64]},u.a.createElement(s,{text:"Marker Text",lat:"-34.397",lng:"150.644"}))))}},2942:function(e,t,n){"use strict";n.r(t),t.default='import Icon from \'@material-ui/core/Icon\';\nimport Tooltip from \'@material-ui/core/Tooltip\';\nimport Typography from \'@material-ui/core/Typography\';\nimport GoogleMap from \'google-map-react\';\nimport React from \'react\';\n\nfunction Marker({ text }) {\n\treturn (\n\t\t<Tooltip title={text} placement="top">\n\t\t\t<Icon className="text-red">place</Icon>\n\t\t</Tooltip>\n\t);\n}\n\nfunction SimpleExample() {\n\treturn (\n\t\t<div className="w-full">\n\t\t\t<Typography className="h2 mb-16">Simple Map Example</Typography>\n\t\t\t<div className="w-full h-512">\n\t\t\t\t<GoogleMap\n\t\t\t\t\tbootstrapURLKeys={{\n\t\t\t\t\t\tkey: process.env.REACT_APP_MAP_KEY\n\t\t\t\t\t}}\n\t\t\t\t\tdefaultZoom={12}\n\t\t\t\t\tdefaultCenter={[-34.397, 150.64]}\n\t\t\t\t>\n\t\t\t\t\t<Marker text="Marker Text" lat="-34.397" lng="150.644" />\n\t\t\t\t</GoogleMap>\n\t\t\t</div>\n\t\t</div>\n\t);\n}\n\nexport default SimpleExample;\n'},3075:function(e,t,n){"use strict";n.r(t);var a=n(1591),o=n(200),r=n(1558),l=n(1553),c=n(245),i=n(0),u=n.n(i),s=n(26);t.default=function(){return u.a.createElement(o.a,{header:u.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},u.a.createElement("div",{className:"flex flex-col"},u.a.createElement("div",{className:"flex items-center mb-16"},u.a.createElement(l.a,{className:"text-18",color:"action"},"home"),u.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),u.a.createElement(c.a,{color:"textSecondary"},"Documentation"),u.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),u.a.createElement(c.a,{color:"textSecondary"},"3rd Party Components")),u.a.createElement(c.a,{variant:"h6"},"Google Map React")),u.a.createElement(r.a,{className:"normal-case",variant:"contained",component:"a",href:"https://github.com/google-map-react/google-map-react",target:"_blank",role:"button"},u.a.createElement(l.a,null,"link"),u.a.createElement("span",{className:"mx-4"},"Reference"))),content:u.a.createElement("div",{className:"p-24 max-w-2xl"},u.a.createElement(c.a,{className:"mb-16",component:"p"},u.a.createElement("code",null,"google-map-react")," is a component written over a small set of the Google Maps API."),u.a.createElement("hr",null),u.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example Usages"),u.a.createElement(a.a,{className:"mb-64",component:n(2941).default,raw:n(2942)}),u.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Demos"),u.a.createElement("ul",null,u.a.createElement("li",{className:"mb-8"},u.a.createElement(s.a,{to:"/apps/dashboards/analytics"},"Analytics Dashboard"))))})}}}]);