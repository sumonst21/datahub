"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5694],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return b}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(a),b=o,m=c["".concat(s,".").concat(b)]||c[b]||p[b]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62673:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),l=["components"],r={title:"Azkaban Flows and Jobs",slug:"/rfc/active/1820-azkaban-flow-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1820-azkaban-flow-job/README.md"},s=void 0,d={unversionedId:"docs/rfc/active/1820-azkaban-flow-job/README",id:"docs/rfc/active/1820-azkaban-flow-job/README",isDocsHomePage:!1,title:"Azkaban Flows and Jobs",description:"- Start Date: 2020-08-25",source:"@site/genDocs/docs/rfc/active/1820-azkaban-flow-job/README.md",sourceDirName:"docs/rfc/active/1820-azkaban-flow-job",slug:"/rfc/active/1820-azkaban-flow-job",permalink:"/docs/rfc/active/1820-azkaban-flow-job",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1820-azkaban-flow-job/README.md",tags:[],version:"current",frontMatter:{title:"Azkaban Flows and Jobs",slug:"/rfc/active/1820-azkaban-flow-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1820-azkaban-flow-job/README.md"},sidebar:"overviewSidebar",previous:{title:"Machine Learning Models",permalink:"/docs/rfc/active/1812-ml_models"},next:{title:"RFC - Field Level Lineage",permalink:"/docs/rfc/active/1841-lineage/field_level_lineage"}},u=[{value:"Summary",id:"summary",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Non Requirements",id:"non-requirements",children:[],level:2},{value:"Detailed design",id:"detailed-design",children:[{value:"Entities",id:"entities",children:[],level:3},{value:"URN Representation",id:"urn-representation",children:[],level:3},{value:"Azkaban Flow metadata",id:"azkaban-flow-metadata",children:[],level:3},{value:"Azkaban Job metadata",id:"azkaban-job-metadata",children:[],level:3}],level:2},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],p={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Date: 2020-08-25"),(0,i.kt)("li",{parentName:"ul"},"RFC PR: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/1820"},"https://github.com/datahub-project/datahub/pull/1820")),(0,i.kt)("li",{parentName:"ul"},"Implementation PR(s): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/1732"},"https://github.com/datahub-project/datahub/pull/1732"))),(0,i.kt)("h1",{id:"azkaban-flows-and-jobs"},"Azkaban Flows and Jobs"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Adding support for ",(0,i.kt)("a",{parentName:"p",href:"https://azkaban.github.io/"},"Azkaban")," job and flow metadata and enabling search and discovery for them. "),(0,i.kt)("p",null,"The design includes the metadata needed to represent Azkaban jobs and flows as data job entities and their relationships to other\nentities like Datasets."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Azkaban is a popular open source workflow manager created and extensively used at LinkedIn. Azkaban metadata is a critical piece\nin the metadata graph since data processing jobs are the primary driver of data movement and creation."),(0,i.kt)("p",null,"Without job metadata, it is not possible to understand the data flow across an organization. Additionally, jobs are needed in the\nlineage graph to surface operational metadata and have a complete view of data movement and processing. Capturing jobs and flows\nmetadata in the lineage graph also allows in understanding dependency between multiple flows and jobs and structure of data\npipelines in end to end data flow."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The following requirements exists as part of this rfc:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define Data flow and job as entities and model metadata for azkaban data job and flows"),(0,i.kt)("li",{parentName:"ul"},"Enable Search & Discovery for Data jobs and flows"),(0,i.kt)("li",{parentName:"ul"},"Link DataJob entities to existing entities like Datasets to build a more complete metadata graph"),(0,i.kt)("li",{parentName:"ul"},"Automatically derive dataset upstream lineage from data job metadata (inputs and outputs)")),(0,i.kt)("h2",{id:"non-requirements"},"Non Requirements"),(0,i.kt)("p",null,"Azkaban has its own application to surface jobs, flows, operational metadata and job logs. DataHub doesn't intend to be\na replacement for it. Users will still need to go to Azkaban UI to look at logs and debug issues. DataHub will only show\nimportant and high level metadata in the context of search, discovery and exploration including lineage and will link to\nAzkaban UI for further debugging or finer grained information."),(0,i.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"high level design",src:a(68818).Z})),(0,i.kt)("p",null,"The graph diagram above shows the relationships and high level metadata associated with Data Job and Flow entities."),(0,i.kt)("p",null,"An Azkaban flow is a DAG of one or more Azkaban jobs. Usually, most data processing jobs consume one or more inputs and\nproduce one of more outputs (represented by datasets in the diagram). There can be other kinds of housekeeping jobs as well\nlike cleanup jobs which don't have any data processing involved."),(0,i.kt)("p",null,"In the diagram above, the Azkaban job node consumes datasets ",(0,i.kt)("inlineCode",{parentName:"p"},"ds1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ds2")," and produces ",(0,i.kt)("inlineCode",{parentName:"p"},"ds3"),". It is also linked to the\nflow it is part of. As shown in the diagram, dataset upstream lineage is derived from the azkaban job metadata which results\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"ds1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ds2")," being upstreams of ",(0,i.kt)("inlineCode",{parentName:"p"},"ds3"),"."),(0,i.kt)("h3",{id:"entities"},"Entities"),(0,i.kt)("p",null,"There will be 2 top level GMA ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," in the design: DataJob and DataFlow."),(0,i.kt)("h3",{id:"urn-representation"},"URN Representation"),(0,i.kt)("p",null,"We'll define two ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DataJobUrn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFlowUrn"),".\nThese URNs should allow for unique identification for a Data job and flow respectively."),(0,i.kt)("p",null,"DataFlow URN will consist of the following parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Workflow manager type (e.g. azkaban, airflow etc)"),(0,i.kt)("li",{parentName:"ol"},"Flow id - Id of a flow unique within a cluster"),(0,i.kt)("li",{parentName:"ol"},"Cluster - Cluster where the flow is deployed/executed")),(0,i.kt)("p",null,"DataJob URN will consist of the following parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Flow Urn - Urn of the data flow this job is part of"),(0,i.kt)("li",{parentName:"ol"},"Job id - Unique id of the job within the flow")),(0,i.kt)("p",null,"An example DataFlow URN will look like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dataFlow:(azkaban,flow_id,cluster)\n")),(0,i.kt)("p",null,"An example DataJob URN will look like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dataJob:(urn:li:dataFlow:(azkaban,flow_id,cluster),job_id)\n")),(0,i.kt)("h3",{id:"azkaban-flow-metadata"},"Azkaban Flow metadata"),(0,i.kt)("p",null,"Below is a list of metadata which can be associated with an azkaban flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project for the flow (the concept of project may not exist for other workflow managers so it may not apply in all cases)"),(0,i.kt)("li",{parentName:"ul"},"Flow name"),(0,i.kt)("li",{parentName:"ul"},"Ownership")),(0,i.kt)("h3",{id:"azkaban-job-metadata"},"Azkaban Job metadata"),(0,i.kt)("p",null,"Below is a list of metadata which can be associated with an azkaban job:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Job name"),(0,i.kt)("li",{parentName:"ul"},"Job type (could be spark, mapreduce, hive, presto. command etc)"),(0,i.kt)("li",{parentName:"ul"},"Inputs consumed by the job"),(0,i.kt)("li",{parentName:"ul"},"Outputs produced by the job")),(0,i.kt)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),(0,i.kt)("p",null,"The design references open source Azkaban so it is adoptable by anyone using Azkaban as their\nworkflow manager."),(0,i.kt)("h2",{id:"future-work"},"Future Work"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding operational metadata associated with Azkaban entities"),(0,i.kt)("li",{parentName:"ol"},"Adding azkaban references in Upstream lineage so that the jobs show up in the lineage graph")))}c.isMDXComponent=!0},68818:function(e,t,a){t.Z=a.p+"assets/images/graph-ff33413b390f0a17ab55c1c96bc7677e.png"}}]);