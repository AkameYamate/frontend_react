(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[64],{1590:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,i=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(i=window);var c=t.FrameContext=r.default.createContext({document:l,window:i}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1591:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(21),o=n(143),r=n(1574),l=n(1583),i=n(1553),c=n(2993),s=n(3146),u=n(0),d=n.n(u),m=n(11),p=n(5),f=n(81),h=n(82),y=n(159),b=n(158),v=n(1507),w=n(790),k=n(1545),C=n(1573),E=n(9),g=n(512),O=n(513),x=n(1592),j=n.n(x),N=Object(v.a)({productionPrefix:"iframe-"}),_=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(g.a)(Object(p.a)(Object(p.a)({},Object(w.a)()),{},{plugins:[].concat(Object(m.a)(Object(w.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(k.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager},d.a.createElement(C.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),D=Object(E.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(_);function M(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],p=n[1],f=e.component,h=e.raw,y=e.iframe,b=e.className;return d.a.createElement(l.a,{className:b},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){p(t)}},f&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"remove_red_eye")}),h&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center"},d.a.createElement("div",{className:0===m?"flex flex-1":"hidden"},f&&(y?d.a.createElement(D,null,d.a.createElement(f,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},d.a.createElement(f,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}M.defaultProps={currentTabIndex:0};var P=M},1592:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1590);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1593),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1593:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=d(r),i=d(n(18)),c=d(n(3)),s=n(1590),u=d(n(1594));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},2266:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(21),o=n(0),r=n.n(o),l=n(1552),i=n(1509),c=Object(l.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{onClickAway:function(){l(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},2267:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function ClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},2268:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(21),o=n(0),r=n.n(o),l=n(1552),i=n(1509),c=n(1508),s=Object(l.a)((function(e){return{dropdown:{position:"fixed",width:200,top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function u(){var e=s(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{onClickAway:function(){l(!1)}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement(c.a,null,r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside.")):null))}},2269:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Portal from '@material-ui/core/Portal';\n\nconst useStyles = makeStyles((theme) => ({\n  dropdown: {\n    position: 'fixed',\n    width: 200,\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function PortalClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <Portal>\n            <div className={classes.dropdown}>\n              Click me, I will stay visible until you click outside.\n            </div>\n          </Portal>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},2270:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(21),o=n(0),r=n.n(o),l=n(1552),i=n(1509),c=Object(l.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:function(){l(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},2271:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function LeadingClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener\n      mouseEvent=\"onMouseDown\"\n      touchEvent=\"onTouchStart\"\n      onClickAway={handleClickAway}\n    >\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},3031:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1591),l=(n(143),n(200)),i=n(1558),c=n(1553),s=n(245),u=n(1552),d=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=d();return o.a.createElement(l.a,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(c.a,{className:"text-18",color:"action"},"home"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Documentation"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(s.a,{variant:"h6"},"Click away listener")),o.a.createElement(i.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/click-away-listener",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Click away listener"),o.a.createElement(s.a,{className:"description"},"Detect if a click event happened outside of an element. It listens for clicks that occur somewhere in the document."),o.a.createElement("ul",null,o.a.createElement("li",null,"\ud83d\udce6 ",o.a.createElement("a",{href:"/size-snapshot"},"1.5 kB gzipped"),"."),o.a.createElement("li",null,"\u269b\ufe0f Support portals")),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"For instance, if you need to hide a menu dropdown when people click anywhere else on your page:"),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2266).default,raw:n(2267)})),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Notice that the component only accepts one child element. You can find a more advanced demo on the ",o.a.createElement("a",{href:"/components/menus/#menulist-composition"},"Menu documentation section"),"."),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Portal"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"The following demo uses ",o.a.createElement("a",{href:"/components/portal/"},o.a.createElement("code",null,"Portal")),' to render the dropdown into a new "subtree" outside of current DOM hierarchy.'),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2268).default,raw:n(2269)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Leading edge"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"By default, the component responds to the trailing events (click + touch end). However, you can configure it to respond to the leading events (mouse down + touch start)."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2270).default,raw:n(2271)})),o.a.createElement("blockquote",null,o.a.createElement(s.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f In this mode, only interactions on the scrollbar of the document is ignored.")))})}}}]);