"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9039],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},34259:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const d="tabList__CuJ",u="tabItem_LNqP";function c(t){var e,n;const{lazy:i,block:c,defaultValue:m,values:g,groupId:f,className:k}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),N=(0,o.l)(h,((t,e)=>t.value===e.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(e=null!=m?m:null==(n=b.find((t=>t.props.default)))?void 0:n.props.value)?e:b[0].props.value;if(null!==y&&!h.some((t=>t.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:_}=(0,s.U)(),[w,D]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=f){const t=v[f];null!=t&&t!==w&&h.some((e=>e.value===t))&&D(t)}const C=t=>{const e=t.currentTarget,n=T.indexOf(e),a=h[n].value;a!==w&&(P(e),D(a),null!=f&&_(f,String(a)))},S=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=T.indexOf(t.currentTarget)+1;n=null!=(a=T[e])?a:T[0];break}case"ArrowLeft":{var r;const e=T.indexOf(t.currentTarget)-1;n=null!=(r=T[e])?r:T[T.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},h.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>T.push(t),onKeyDown:S,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(b.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function m(t){const e=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},51682:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const o={title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},s="LDAP",p={unversionedId:"docs/generated/ingestion/sources/ldap",id:"docs/generated/ingestion/sources/ldap",title:"LDAP",description:"Module ldap",source:"@site/genDocs/docs/generated/ingestion/sources/ldap.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/ldap",permalink:"/docs/generated/ingestion/sources/ldap",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md",tags:[],version:"current",frontMatter:{title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},sidebar:"overviewSidebar",previous:{title:"Kafka",permalink:"/docs/generated/ingestion/sources/kafka"},next:{title:"Looker",permalink:"/docs/generated/ingestion/sources/looker"}},d={},u=[{value:"Module <code>ldap</code>",id:"module-ldap",level:2},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ldap"},"LDAP"),(0,r.kt)("h2",{id:"module-ldap"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"ldap")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"People"),(0,r.kt)("li",{parentName:"ul"},"Names, emails, titles, and manager information for each person"),(0,r.kt)("li",{parentName:"ul"},"List of groups")),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[ldap]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "ldap"\n  config:\n    # Coordinates\n    ldap_server: ldap://localhost\n\n    # Credentials\n    ldap_user: "cn=admin,dc=example,dc=org"\n    ldap_password: "admin"\n\n    # Options\n    base_dn: "dc=example,dc=org"\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The platform that this source connects to"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldap_server"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP server URL."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldap_user"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP user."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldap_password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP password."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base_dn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP DN."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP extractor filter."),(0,r.kt)("td",{parentName:"tr",align:null},"(objectClass=*)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attrs_list"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieved attributes list"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop_missing_first_last_name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, any users without first and last names will be dropped."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_size"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of each page to fetch when extracting metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_attrs_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_attrs_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"StatefulStaleMetadataRemovalConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.enabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_old_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the previous checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_new_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the current checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.remove_stale_metadata"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "LDAPSourceConfig",\n  "description": "Config used by the LDAP Source.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "The platform that this source connects to",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "ldap_server": {\n      "title": "Ldap Server",\n      "description": "LDAP server URL.",\n      "type": "string"\n    },\n    "ldap_user": {\n      "title": "Ldap User",\n      "description": "LDAP user.",\n      "type": "string"\n    },\n    "ldap_password": {\n      "title": "Ldap Password",\n      "description": "LDAP password.",\n      "type": "string"\n    },\n    "base_dn": {\n      "title": "Base Dn",\n      "description": "LDAP DN.",\n      "type": "string"\n    },\n    "filter": {\n      "title": "Filter",\n      "description": "LDAP extractor filter.",\n      "default": "(objectClass=*)",\n      "type": "string"\n    },\n    "attrs_list": {\n      "title": "Attrs List",\n      "description": "Retrieved attributes list",\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "drop_missing_first_last_name": {\n      "title": "Drop Missing First Last Name",\n      "description": "If set to true, any users without first and last names will be dropped.",\n      "default": true,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "Size of each page to fetch when extracting metadata.",\n      "default": 20,\n      "type": "integer"\n    },\n    "user_attrs_map": {\n      "title": "User Attrs Map",\n      "default": {},\n      "type": "object"\n    },\n    "group_attrs_map": {\n      "title": "Group Attrs Map",\n      "default": {},\n      "type": "object"\n    }\n  },\n  "required": [\n    "ldap_server",\n    "ldap_user",\n    "ldap_password",\n    "base_dn"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_old_state": {\n          "title": "Ignore Old State",\n          "description": "If set to True, ignores the previous checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_new_state": {\n          "title": "Ignore New State",\n          "description": "If set to True, ignores the current checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.ldap.LDAPSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/ldap.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for LDAP, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);