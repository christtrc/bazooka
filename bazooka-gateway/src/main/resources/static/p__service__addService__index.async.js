(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5cng":function(e,t,a){"use strict";a.r(t);a("+L6B");var n=a("2/Rp"),r=(a("IzEo"),a("bx4M")),i=(a("14J3"),a("BMrR")),l=(a("jCWc"),a("kPKH")),c=(a("miYZ"),a("tsqr")),o=a("d6i3"),s=a.n(o),m=a("1l/V"),d=a.n(m),u=a("2Taf"),p=a.n(u),h=a("vZ4D"),E=a.n(h),v=a("l4Ni"),f=a.n(v),g=a("ujKo"),y=a.n(g),C=a("MhPg"),S=a.n(C),I=a("q1tI"),b=a.n(I),k=a("y1Nh"),x=a("MuoO"),A=a("Xq4P"),G=a("Onig"),D=a("p0pE"),w=a.n(D),F=(a("OaEy"),a("2fM7")),P=(a("y8nQ"),a("Vl3Y")),T=(a("5NDa"),a("5rEg")),j=a("XfOM"),O=a.n(j),N=P.a.Item,L=F.a.Option,M=T.a.TextArea,R=function(e){function t(e){var a;return p()(this,t),(a=f()(this,y()(t).call(this,e))).onFetchListAdmin=function(){(0,a.props.dispatch)({type:"project/projectListAdmin",payload:{}})},a.state={projectId:void 0},a}return S()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.props.projectListAdmin.length||this.onFetchListAdmin()}},{key:"renderForm",value:function(){var e=this.props,t=e.userAll,a=e.projectListAdmin,n=e.formItem,r=e.children,i=e.projectId,c=n.getFieldDecorator;return b.a.createElement(I.Fragment,null,b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(N,{label:"所属项目",extra:"此服务所属的项目，项目管理计算资源和用户权限"},c("projectId",{initialValue:i?parseInt(i):void 0,rules:[{required:!0,message:"请选择所属项目"}]})(b.a.createElement(F.a,{placeholder:"请选择所属项目",showSearch:!0,optionFilterProp:"children",disabled:!!i},a&&a.map(function(e){return b.a.createElement(L,{value:e.id,key:e.id},e.projectName)}))))),b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(N,{label:"服务名",extra:"可以使用中文、字母（大小写）、数字、中横线，在当前项目内不可重复"},c("appName",{rules:[{required:!0,message:"服务名为20位以内中文数字字母中横线的组合",pattern:/^[a-zA-z0-9-\u4E00-\u9FA5]{1,20}$/}]})(b.a.createElement(T.a,{placeholder:"请输入服务名"})))),b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(N,{label:"服务负责人",extra:"服务负责人能够修改服务信息和发布配置等"},c("leaderId",{rules:[{required:!0,message:"请选择服务负责人"}]})(b.a.createElement(F.a,{placeholder:"请选择服务负责人",showSearch:!0,optionFilterProp:"children"},t&&t.rows&&t.rows.map(function(e){return b.a.createElement(L,{value:e.userId,key:e.userId},e.realName)}))))),b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(N,{label:"服务CODE",extra:b.a.createElement(I.Fragment,null,b.a.createElement("div",null,"作为服务的唯一标识，创建后不能修改，将用于代码库、镜像、容器管理"),b.a.createElement("span",null,"可以使用字母（小写）、数字、中横线"))},c("appCode",{rules:[{required:!0,message:"CODE为20位以内数字小写字母中横线的组合",pattern:/^[a-z0-9-]{1,20}$/}]})(b.a.createElement(T.a,{placeholder:"请输入服务CODE，创建后不能修改"})))),r,b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(N,{label:"服务描述",help:"服务的简单描述，不超过100字"},c("description",{rules:[{pattern:/^[\S ]{0,500}$/,message:"最多500个字符"}]})(b.a.createElement(M,{placeholder:"请输入描述",rows:4})))))}},{key:"render",value:function(){var e=this.props,t=e.onCancel,a=e.onSave;return b.a.createElement(I.Fragment,null,this.renderForm(),b.a.createElement(l.a,{span:24,className:O.a.marginT},b.a.createElement(n.a,{onClick:t,className:O.a.marginR30},"上一步"),b.a.createElement(n.a,{type:"primary",onClick:a},"保存")))}}]),t}(b.a.Component),B=P.a.create()(Object(x.connect)(function(e){var t=e.auth,a=e.project;return{userAll:t.userAll,projectListAdmin:a.projectListAdmin}})(R)),q=(P.a.Item,F.a.Option,function(e){function t(e){var a;return p()(this,t),(a=f()(this,y()(t).call(this,e))).onSubmit=function(e){var t=a.props.onSave;e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,a){e||t(w()({},a,{appKind:"OPS_GITLAB"}))})},a.state={},a}return S()(t,e),E()(t,[{key:"componentDidMount",value:function(){}},{key:"renderTitle",value:function(){return b.a.createElement(I.Fragment,null,b.a.createElement("div",null,b.a.createElement("img",{src:A.a.GITLAB}),b.a.createElement("h3",null,"OPS托管Gitlab"),b.a.createElement("p",null,"OPS安装时附带安装的托管Gitlab，OPS将自动管理此Gitlab，自动创建和管理项目和服务，拉取代码时使用token，不需要额外设置凭据")))}},{key:"renderForm",value:function(){var e=this.props,t=e.onCancel,a=e.form,n=e.projectId;a.getFieldDecorator;return b.a.createElement(P.a,{onSubmit:this.onSubmit},b.a.createElement(i.a,{type:"flex",align:"top",gutter:120},b.a.createElement(B,{onCancel:t,onSave:this.onSubmit,formItem:a,projectId:n})))}},{key:"render",value:function(){return b.a.createElement(r.a,null,this.renderTitle(),this.renderForm())}}]),t}(b.a.Component)),V=P.a.create()(q),H=a("Yv72"),z=a("HUA2"),K=P.a.Item,_=F.a.Option,U=function(e){function t(e){var a;return p()(this,t),(a=f()(this,y()(t).call(this,e))).onFetchCredentialsList=function(){(0,a.props.dispatch)({type:"system/credentialsList",payload:{domain:"GIT_SERVER"}})},a.onSubmit=function(e){var t=a.props.onSave;e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,a){if(!e){var n=w()({},a);"-1"==a.gitCredentialId&&(n=w()({},a,{gitCredentialId:void 0})),t(w()({},n,{appKind:"GIT_REPOSITORY"}))}})},a.showGitModal=function(){a.setState({showGitModal:!0})},a.onGitCancel=function(){a.setState({showGitModal:!1})},a.onAddGitCredentials=function(){var e=d()(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.form.setFieldsValue,e.next=3,z.a.credentialsAdd(w()({},t,{credentialType:"USERNAME_WITH_PASSWORD"}));case 3:(r=e.sent)&&"1"==r.code&&(c.a.success("添加成功"),a.setState({showGitModal:!1}),a.onFetchCredentialsList(),n({gitCredentialId:r.data.id}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={showGitModal:!1},a}return S()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.onFetchCredentialsList()}},{key:"renderTitle",value:function(){return b.a.createElement(I.Fragment,null,b.a.createElement("div",null,b.a.createElement("img",{src:A.a.GIT}),b.a.createElement("h3",null,"Git代码仓库"),b.a.createElement("p",null,"使用外部的代码仓库（非OPS托管Gitlab），请提供此服务对应的完整代码仓库地址和相应的凭据")))}},{key:"renderForm",value:function(){var e=this.props,t=e.onCancel,a=e.form,n=e.credentialsList,r=e.projectId,c=a.getFieldDecorator;return b.a.createElement(P.a,{onSubmit:this.onSubmit},b.a.createElement(i.a,{type:"flex",align:"top",gutter:120},b.a.createElement(B,{onCancel:t,onSave:this.onSubmit,formItem:a,projectId:r},b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(K,{label:"代码仓库地址",extra:b.a.createElement(I.Fragment,null,b.a.createElement("div",null,"服务对应的完整代码仓库地址，例如"),b.a.createElement("span",null,"http://registry.ata.cloud.com/ata/ata-ops.git"))},c("gitUrl",{rules:[{required:!0,message:"请输入"}]})(b.a.createElement(T.a,{placeholder:"请输入代码仓库地址"})))),b.a.createElement(l.a,{md:12,sm:24},b.a.createElement(K,{label:"代码仓库凭据",extra:b.a.createElement(I.Fragment,null,b.a.createElement("div",null,"用于获取代码仓库的branch、tag列表，以及拉取代码"),b.a.createElement("span",null,"没有我需要的凭据？我可以",b.a.createElement("a",{onClick:this.showGitModal},"新建代码仓库凭据")))},c("gitCredentialId",{initialValue:"-1"})(b.a.createElement(F.a,{placeholder:"请选择代码仓库凭据",showSearch:!0,optionFilterProp:"children"},b.a.createElement(_,{value:"-1"},"不需要凭据"),n&&n.map(function(e){return b.a.createElement(_,{value:e.id,key:e.id},e.credentialName)}))))))))}},{key:"render",value:function(){var e=this.props,t=(e.onCancel,e.projectId),a=this.state.showGitModal;return b.a.createElement(r.a,null,this.renderTitle(),this.renderForm(),a&&b.a.createElement(H.a,{visible:a,onCancel:this.onGitCancel,credentialType:"GIT_SERVER",onOk:this.onAddGitCredentials,projectId:t}))}}]),t}(b.a.Component),Y=P.a.create()(Object(x.connect)(function(e){return{credentialsList:e.system.credentialsList}})(U)),W=a("3a4m"),Z=a.n(W),J=[{type:"GitLab",imgPath:A.a.GITLAB,text:"OPS托管Gitlab"},{type:"Git",imgPath:A.a.GIT,text:"git代码仓库"},{type:"GitHub",imgPath:A.a.GITHUB,text:"GitHub代码仓库",isDev:!0},{type:"SVN",imgPath:A.a.SVN,text:"SVN",isDev:!0}],$=[{type:"Docker",imgPath:A.a.DOCKER,text:"外部镜像库",isDev:!0}],Q=[{type:"Redies",imgPath:A.a.REDIES,text:"Redies",version:"5.0.5",desc:"官方",isDev:!0},{type:"Zookeeper",imgPath:A.a.ZOOKEEPER,text:"zookeeper",version:"3.5.5",desc:"社区",isDev:!0},{type:"Mysql",imgPath:A.a.MYSQL,text:"Mysql-Server",version:"5.2.27",desc:"官方",isDev:!0},{type:"springcloud",imgPath:A.a.SPRINGCLOUD,text:"Spring cloud eureka",version:"2.0",desc:"官方",isDev:!0},{type:"Pinpoint",imgPath:A.a.PINPOINT,text:"pinpoint集群",version:"1.8.4",desc:"官方",isDev:!0,isAtaGitlab:!1}],X=function(e){function t(e){var a;return p()(this,t),(a=f()(this,y()(t).call(this,e))).onFetchIsAtaGitlab=d()(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.isAtaGitlab();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:t=e.t0,a.setState({isAtaGitlab:!!t.data});case 7:case"end":return e.stop()}},e)})),a.onAdd=function(e){e.isDev?c.a.info("规划中..."):a.setState({showType:e.type})},a.onCancel=function(){a.setState({showType:""})},a.onSave=function(e){a.onFetchAppCreate(e)},a.onFetchAppCreate=function(){var e=d()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.appCreate(t);case 2:(n=e.sent)&&"1"==n.code&&(c.a.success("添加成功"),a.setState({showType:""}),Z.a.goBack());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={showType:"",projectId:void 0},a}return S()(t,e),E()(t,[{key:"componentDidMount",value:function(){var e=this.props.location.query||{};this.setState({projectId:e.projectId}),this.onFetchIsAtaGitlab()}},{key:"renderCodeBegin",value:function(){var e=this,t=this.state.isAtaGitlab;return b.a.createElement(r.a,{title:"从代码开始"},b.a.createElement(i.a,{type:"flex",gutter:36,align:"middle"},J.map(function(a){return b.a.createElement(l.a,{className:O.a.textC,key:a.type,style:{width:"20%"}},a.isDev?b.a.createElement("div",null,b.a.createElement("img",{src:a.imgPath,title:"规划中"}),b.a.createElement("p",{className:O.a.disabledColor},a.text)):"GitLab"!=a.type||t?b.a.createElement("div",{onClick:function(){e.onAdd(a)}},b.a.createElement("img",{src:a.imgPath,title:a.text}),b.a.createElement("p",null,a.text)):b.a.createElement("div",null,b.a.createElement("img",{src:A.a.GITLABDISABLED,title:"未安装"}),b.a.createElement("p",{className:O.a.disabledColor},a.text)))})))}},{key:"renderDockerBegin",value:function(){var e=this;return b.a.createElement(r.a,{title:"从镜像开始",className:O.a.marginT},b.a.createElement(i.a,{type:"flex",gutter:36,align:"middle"},$.map(function(t){return b.a.createElement(l.a,{className:O.a.textC,key:t.type,style:{width:"20%"},onClick:function(){e.onAdd(t)}},b.a.createElement("img",{src:t.imgPath,title:t.isDev?"规划中":t.text}),b.a.createElement("p",{className:t.isDev?O.a.disabledColor:""},t.text))})))}},{key:"renderAppBegin",value:function(){var e=this;return b.a.createElement(r.a,{title:"从应用市场开始",className:O.a.marginT},b.a.createElement(i.a,{type:"flex",align:"middle",gutter:36},Q.map(function(t){return b.a.createElement(l.a,{className:O.a.textC,key:t.type,style:{width:"20%"}},b.a.createElement(r.a,{onClick:function(){e.onAdd(t)}},b.a.createElement("div",{style:{height:64,lineHeight:"64px"}},b.a.createElement("img",{src:t.imgPath,title:t.isDev?"规划中":t.text})),b.a.createElement("p",{className:t.isDev?O.a.disabledColor:""},t.text),b.a.createElement("p",{className:t.isDev?O.a.disabledColor:""},"最高版本：",t.version),b.a.createElement(n.a,{disabled:!0,size:"small"},t.desc)))})))}},{key:"renderAddItem",value:function(){var e=this.state,t=e.showType,a=e.projectId;return b.a.createElement(I.Fragment,null,"GitLab"===t&&b.a.createElement(V,{onCancel:this.onCancel,onSave:this.onSave,projectId:a}),"Git"===t&&b.a.createElement(Y,{onCancel:this.onCancel,onSave:this.onSave,projectId:a}))}},{key:"render",value:function(){var e=this.state.showType;return b.a.createElement(k.PageHeaderWrapper,{title:"新增服务",content:"可以根据服务的类型不同，从代码、镜像或者应用市场创建自己的服务"},!e&&b.a.createElement(I.Fragment,null,this.renderCodeBegin(),this.renderDockerBegin(),this.renderAppBegin()),this.renderAddItem())}}]),t}(b.a.Component);t.default=Object(x.connect)(function(e){e.service;return{}})(X)}}]);