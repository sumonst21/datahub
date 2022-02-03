"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2923],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,k=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],l={title:"Deploying with Docker",hide_title:!0,sidebar_label:"Deploying with Docker",slug:"/docker",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/README.md"},c="Docker Images",d={unversionedId:"docker/README",id:"docker/README",isDocsHomePage:!1,title:"Deploying with Docker",description:"Prerequisites",source:"@site/genDocs/docker/README.md",sourceDirName:"docker",slug:"/docker",permalink:"/docs/docker",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/README.md",tags:[],version:"current",frontMatter:{title:"Deploying with Docker",hide_title:!0,sidebar_label:"Deploying with Docker",slug:"/docker",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/README.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Kafka",permalink:"/docs/how/kafka-config"},next:{title:"Deploying with Kubernetes",permalink:"/docs/deploy/kubernetes"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Quickstart",id:"quickstart",children:[{value:"Ingesting demo data.",id:"ingesting-demo-data",children:[],level:3}],level:2},{value:"Using Docker Images During Development",id:"using-docker-images-during-development",children:[],level:2},{value:"Building And Deploying Docker Images",id:"building-and-deploying-docker-images",children:[{value:"Building images",id:"building-images",children:[],level:3}],level:2},{value:"Ember",id:"ember",children:[{value:"Serving Ember Only",id:"serving-ember-only",children:[{value:"All Containers",id:"all-containers",children:[],level:4},{value:"The Bare Minimum",id:"the-bare-minimum",children:[],level:4}],level:3},{value:"Serving React + Ember",id:"serving-react--ember",children:[{value:"All Containers",id:"all-containers-1",children:[],level:4},{value:"The Bare Minimum",id:"the-bare-minimum-1",children:[],level:4}],level:3}],level:2}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-images"},"Docker Images"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"docker")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," (if using Linux; on Windows and Mac compose is included with\nDocker Desktop)."),(0,i.kt)("p",null,"Make sure to allocate enough hardware resources for Docker engine. Tested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap\narea."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"The easiest way to bring up and test DataHub is using DataHub ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," images\nwhich are continuously deployed to ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/linkedin"},"Docker Hub")," with every commit to repository."),(0,i.kt)("p",null,"You can easily download and run all these images and their dependencies with our\n",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"quick start guide"),"."),(0,i.kt)("p",null,"DataHub Docker Images:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/linkedin/datahub-ingestion"},"linkedin/datahub-ingestion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-gms/"},"linkedin/datahub-gms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-frontend-react/"},"linkedin/datahub-frontend-react")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-mae-consumer/"},"linkedin/datahub-mae-consumer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-mce-consumer/"},"linkedin/datahub-mce-consumer"))),(0,i.kt)("p",null,"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Zookeeper, and Schema Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/elasticsearch-setup"},"Elasticsearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/mysql"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/neo4j"},"(Optional) Neo4j"))),(0,i.kt)("h3",{id:"ingesting-demo-data"},"Ingesting demo data."),(0,i.kt)("p",null,"If you want to test ingesting some data once DataHub is up, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"./docker/ingestion/ingestion.sh")," script or ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub docker ingest-sample-data"),". See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"quickstart guide")," for more details."),(0,i.kt)("h2",{id:"using-docker-images-during-development"},"Using Docker Images During Development"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development"),"."),(0,i.kt)("h2",{id:"building-and-deploying-docker-images"},"Building And Deploying Docker Images"),(0,i.kt)("p",null,"We use GitHub Actions to build and continuously deploy our images. There should be no need to do this manually; a\nsuccessful release on Github will automatically publish the images."),(0,i.kt)("h3",{id:"building-images"},"Building images"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is ",(0,i.kt)("strong",{parentName:"p"},"not")," our recommended development flow and most developers should be following the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development")," guide.")),(0,i.kt)("p",null,"To build the full images (that we are going to publish), you need to run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -p datahub build\n")),(0,i.kt)("p",null,"This is because we're relying on builtkit for multistage builds. It does not hurt also set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATAHUB_VERSION")," to\nsomething unique."),(0,i.kt)("h2",{id:"ember"},"Ember"),(0,i.kt)("p",null,"To serve the legacy Ember UI, follow the instructions below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Before continuing"),": If you've already run a deploy script, don't forget to clear containers using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container prune"))),(0,i.kt)("h3",{id:"serving-ember-only"},"Serving Ember Only"),(0,i.kt)("h4",{id:"all-containers"},"All Containers"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart-ember.sh")," script to launch all containers in DataHub, including a frontend server that serves the Ember UI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./quickstart-ember.sh\n")),(0,i.kt)("h4",{id:"the-bare-minimum"},"The Bare Minimum"),(0,i.kt)("p",null,"Run the following command to launch only the Ember server and its required dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.ember.yml -f docker-compose.yml -f docker-compose.override.yml up datahub-frontend-ember\n")),(0,i.kt)("p",null,"Once complete, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9001")," in your browser to see the legacy Ember app."),(0,i.kt)("h3",{id:"serving-react--ember"},"Serving React + Ember"),(0,i.kt)("p",null,"If you'd like to serve the React and Ember UIs side-by-side, you can deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-frontend-ember")," service manually."),(0,i.kt)("h4",{id:"all-containers-1"},"All Containers"),(0,i.kt)("p",null,"To deploy all DataHub containers, run the quickstart script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./quickstart.sh\n")),(0,i.kt)("p",null,"Next, deploy the container that serves the Ember UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.ember.yml -f docker-compose.yml -f docker-compose.override.yml up --no-deps datahub-frontend-ember\n")),(0,i.kt)("h4",{id:"the-bare-minimum-1"},"The Bare Minimum"),(0,i.kt)("p",null,"First, start the React frontend server & its required dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose up datahub-frontend-react\n")),(0,i.kt)("p",null,"Then, start the Ember frontend server & its required dependencies: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.ember.yml -f docker-compose.yml -f docker-compose.override.yml up datahub-frontend-ember\n")),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9002/")," to view the React app & ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9001/")," to view the legacy Ember app."))}p.isMDXComponent=!0}}]);