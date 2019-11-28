(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{k8vR:function(e,a,t){"use strict";t.r(a);t("IzEo");var n=t("bx4M"),l=(t("14J3"),t("BMrR")),r=(t("+L6B"),t("2/Rp")),s=(t("jCWc"),t("kPKH")),c=t("2Taf"),o=t.n(c),i=t("vZ4D"),m=t.n(i),u=t("l4Ni"),d=t.n(u),p=t("ujKo"),E=t.n(p),h=t("MhPg"),f=t.n(h),v=t("q1tI"),g=t.n(v),y=t("y1Nh"),k=t("Xq4P"),b=t("MuoO"),C=t("XfOM"),M=t.n(C),N=t("xFK1"),L=t.n(N),F=(t("5NDa"),t("5rEg")),S=(t("Pwec"),t("CtXQ")),x=t("eHn4"),I=t.n(x),T=t("d6i3"),K=t.n(T),G=(t("miYZ"),t("tsqr")),O=t("p0pE"),w=t.n(O),B=t("1l/V"),_=t.n(B),A=(t("y8nQ"),t("Vl3Y")),D=(t("OaEy"),t("2fM7")),z=t("Yv72"),V=A.a.Item,R=D.a.Option,q=(F.a.TextArea,function(e){function a(e){var t;return o()(this,a),(t=d()(this,E()(a).call(this,e))).onFetchCredentialsList=function(){(0,t.props.dispatch)({type:"system/credentialsList",payload:{domain:"DOCKER_REGISTRY"}})},t.onShowGitModal=function(){t.setState({showGitModal:!0})},t.onGitCancel=function(){t.setState({showGitModal:!1})},t.onAddGitCredentials=function(e){var a=t.props.formItem.setFieldsValue;t.onGitCancel(),t.onFetchCredentialsList(),a({credentialId:e.id})},t.state={projectId:void 0,showGitModal:!1},t}return f()(a,e),m()(a,[{key:"componentDidMount",value:function(){this.onFetchCredentialsList()}},{key:"renderForm",value:function(){var e=this.props,a=e.credentialsList,t=e.formItem,n=e.children,l=e.type,r=t.getFieldDecorator;return g.a.createElement(v.Fragment,null,g.a.createElement(s.a,{md:8,sm:24},g.a.createElement(V,{label:"集群名称",extra:"集群名称不可重复"},r("name",{rules:[{required:!0,message:"服务名为20位以内中文数字字母中横线的组合",pattern:/^[a-zA-z0-9-\u4E00-\u9FA5]{1,20}$/}]})(g.a.createElement(F.a,{placeholder:"请输入集群名称"})))),g.a.createElement(s.a,{md:8,sm:24},g.a.createElement(V,{label:"镜像库",extra:g.a.createElement("div",null,g.a.createElement("p",null,"此集群内容器部署时将使用此镜像库，请保证此镜像库能够被Bazooka服务和集群内slave节点访问"),l&&"mesos"==l&&g.a.createElement("p",null,"推荐在",g.a.createElement("a",{href:"https://github.com/ata-cloud/bazooka/blob/master/docs/install_docker_registry_in_mesos_cluster.md",target:"_black"},"Mesos集群内部自建镜像库")))},r("imageUrl",{rules:[{required:!0,message:"请输入镜像库地址"}]})(g.a.createElement(F.a,{placeholder:"请输入镜像库地址"})))),g.a.createElement(s.a,{md:8,sm:24},g.a.createElement(V,{label:"镜像仓库凭据",extra:g.a.createElement(v.Fragment,null,g.a.createElement("div",null,"用于获取代码仓库的branch、tag列表，以及拉取代码"),g.a.createElement("span",null,"没有我需要的凭据？我可以",g.a.createElement("a",{onClick:this.onShowGitModal},"新建镜像仓库凭据")))},r("credentialId",{initialValue:"-1"})(g.a.createElement(D.a,{placeholder:"请选择镜像仓库凭据",showSearch:!0,optionFilterProp:"children"},g.a.createElement(R,{value:"-1"},"不需要凭据"),a&&a.map(function(e){return g.a.createElement(R,{value:e.id,key:e.id},e.credentialName)}))))),n)}},{key:"render",value:function(){var e=this.props,a=e.onCancel,t=e.onSave,n=e.saveLoading,l=this.state.showGitModal;return g.a.createElement(v.Fragment,null,this.renderForm(),g.a.createElement(s.a,{span:24,className:M.a.marginT},g.a.createElement(r.a,{onClick:a,className:M.a.marginR30},"上一步"),g.a.createElement(r.a,{type:"primary",onClick:t,loading:n},"保存")),l&&g.a.createElement(z.a,{visible:l,onCancel:this.onGitCancel,credentialType:"DOCKER_REGISTRY",onOk:this.onAddGitCredentials}))}}]),a}(g.a.Component)),P=A.a.create()(Object(b.connect)(function(e){return{credentialsList:e.system.credentialsList}})(q)),j=t("t/q1"),U=A.a.Item,J=function(e){function a(e){var t;return o()(this,a),(t=d()(this,E()(a).call(this,e))).onSubmit=function(e){var a=t.props.onCancel;e&&e.preventDefault(),t.props.form.validateFieldsAndScroll(function(){var e=_()(K.a.mark(function e(n,l){var r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=7;break}return t.setState({saveLoading:!0}),e.next=4,j.a.createMesosCluster(w()({},l,{type:"0",keys:void 0,keys1:void 0,credentialId:"-1"==l.credentialId?void 0:l.credentialId}));case 4:(r=e.sent)&&"1"==r.code&&(G.a.success("添加成功"),a()),t.setState({saveLoading:!1});case 7:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}())},t.addKey=function(e){var a=t.props.form,n=a.getFieldValue,l=a.setFieldsValue,r=n(e),s=r.concat(r[r.length-1]+1);l(I()({},e,s))},t.removeKey=function(e,a){var n=t.props.form,l=n.getFieldValue,r=n.setFieldsValue,s=l(a);1!==s.length&&r(I()({},a,s.filter(function(a){return a!==e})))},t.state={saveLoading:!1},t}return f()(a,e),m()(a,[{key:"componentDidMount",value:function(){}},{key:"renderTitle",value:function(){return g.a.createElement("div",{className:M.a.flexCenter},g.a.createElement("img",{src:k.a.MESOS}),g.a.createElement("div",{className:M.a.marginL10},g.a.createElement("div",{className:L.a.clusterTitle},"Mesos集群"),g.a.createElement("span",null,"使用Mesos集群的方式来管理资源")))}},{key:"renderForm",value:function(){var e=this,a=this.props,t=a.onCancel,n=a.form,r=(a.credentialsList,n.getFieldDecorator,this.state.saveLoading);return g.a.createElement(A.a,{onSubmit:this.onSubmit,colon:!1,className:M.a.marginT},g.a.createElement(l.a,{type:"flex",align:"top",gutter:48},g.a.createElement(P,{onCancel:t,onSave:this.onSubmit,formItem:n,type:"mesos",saveLoading:r},g.a.createElement(s.a,{md:8,sm:24},g.a.createElement(U,{label:g.a.createElement(v.Fragment,null,g.a.createElement("span",null,"Master节点ip列表"),g.a.createElement("span",{className:M.a.marginL10},g.a.createElement(S.a,{type:"plus",style:{color:"#1890ff"},onClick:function(){return e.addKey("keys")}}))),required:!0,help:"请填写Mesos集群所有Master节点列表，并保证此节点ip能被Bazooka服务访问"},this.renderMesosIp())),g.a.createElement(s.a,{md:8,sm:24},g.a.createElement(U,{label:g.a.createElement(v.Fragment,null,g.a.createElement("span",null,"Public agent节点ip列表"),g.a.createElement("span",{className:M.a.marginL10},g.a.createElement(S.a,{type:"plus",style:{color:"#1890ff"},onClick:function(){return e.addKey("keys1")}}))),required:!0,help:g.a.createElement("span",null,"请填写Mesos集群所有public agent节点列表，请在public agent节点上",g.a.createElement("a",{href:"https://github.com/ata-cloud/bazooka/blob/master/docs/install_marathon_lb_in_mesos_cluster.md",target:"_black"},"部署marathon-lb容器"),"并保证此节点ip能被Bazooka服务访问")},this.renderPublicIp())))))}},{key:"renderMesosIp",value:function(){var e=this,a=this.props.form,t=a.getFieldDecorator,n=a.getFieldValue;t("keys",{initialValue:[0]});var l=n("keys");return g.a.createElement(v.Fragment,null,l.map(function(a){return g.a.createElement("div",{className:M.a.flex,key:a},g.a.createElement(U,{className:M.a.flex1},t("masterUrls.".concat(a),{rules:[{required:!0,message:"请输入master节点ip"}]})(g.a.createElement(F.a,{placeholder:"请输入master节点ip"}))),g.a.createElement(U,{className:M.a.marginL10},l.length>1&&g.a.createElement(S.a,{type:"minus",style:{color:"#1890ff"},onClick:function(){e.removeKey(a,"keys")}})))}))}},{key:"renderPublicIp",value:function(){var e=this,a=this.props.form,t=a.getFieldDecorator,n=a.getFieldValue;t("keys1",{initialValue:[0]});var l=n("keys1");return g.a.createElement(v.Fragment,null,l.map(function(a){return g.a.createElement("div",{className:M.a.flex,key:a},g.a.createElement(U,{className:M.a.flex1},t("mlbUrls.".concat(a),{rules:[{required:!0,message:"请输入public agent节点ip"}]})(g.a.createElement(F.a,{placeholder:"请输入public agent节点ip"}))),g.a.createElement(U,{className:M.a.marginL10},l.length>1&&g.a.createElement(S.a,{type:"minus",style:{color:"#1890ff"},onClick:function(){e.removeKey(a,"keys1")}})))}))}},{key:"render",value:function(){return g.a.createElement(n.a,null,this.renderTitle(),this.renderForm())}}]),a}(g.a.Component),Z=A.a.create()(Object(b.connect)(function(e){return{credentialsList:e.system.credentialsList}})(J)),Y=(t("giR+"),t("fyUT")),H=A.a.Item,X=D.a.Option,Q=function(e){function a(e){var t;return o()(this,a),(t=d()(this,E()(a).call(this,e))).onFetchCredentialsList=function(){(0,t.props.dispatch)({type:"system/credentialsListTypes",payload:{domain:"NODE_LOGIN"}})},t.onSubmit=function(e){var a=t.props.onCancel;e&&e.preventDefault(),t.props.form.validateFieldsAndScroll(function(){var e=_()(K.a.mark(function e(n,l){var r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=7;break}return t.setState({saveLoading:!0}),e.next=4,j.a.createSingleNodeCluster(w()({},l,{type:"2",keys:void 0,credentialId:"-1"==l.credentialId?void 0:l.credentialId}));case 4:(r=e.sent)&&"1"==r.code&&(G.a.success("添加成功"),a()),t.setState({saveLoading:!1});case 7:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}())},t.addKey=function(e){var a=t.props.form,n=a.getFieldValue,l=a.setFieldsValue,r=n(e),s=r.concat(r[r.length-1]+1);l(I()({},e,s))},t.removeKey=function(e,a){var n=t.props.form,l=n.getFieldValue,r=n.setFieldsValue,s=l(a);1!==s.length&&r(I()({},a,s.filter(function(a){return a!==e})))},t.onAddNodeLogin=function(){t.setState({showGitModal:!0})},t.onGitCancel=function(){t.setState({showGitModal:!1})},t.onAddGitCredentials=function(e){t.onGitCancel(),t.onFetchCredentialsList()},t.state={showGitModal:!1,saveLoading:!1},t}return f()(a,e),m()(a,[{key:"componentDidMount",value:function(){this.onFetchCredentialsList()}},{key:"renderTitle",value:function(){return g.a.createElement("div",{className:M.a.flexCenter},g.a.createElement("img",{src:k.a.BAZOOKA}),g.a.createElement("div",{className:M.a.marginL10},g.a.createElement("div",{className:L.a.clusterTitle},"Bazooka单节点集群"),g.a.createElement("span",null,"单节点集群只是将一系列分配给此业务的节点记录为一个集群，实际上节点间互不访问")))}},{key:"renderForm",value:function(){var e=this,a=this.props,t=a.onCancel,n=a.form,r=(n.getFieldDecorator,this.state.saveLoading);return g.a.createElement(A.a,{onSubmit:this.onSubmit,colon:!1,className:M.a.marginT},g.a.createElement(l.a,{type:"flex",align:"top",gutter:48},g.a.createElement(P,{onCancel:t,onSave:this.onSubmit,formItem:n,saveLoading:r},g.a.createElement(s.a,{span:24},g.a.createElement(H,{required:!0,label:g.a.createElement(v.Fragment,null,g.a.createElement("span",null,"节点列表"),g.a.createElement("span",{className:M.a.marginL10},g.a.createElement(S.a,{type:"plus",style:{color:"#1890ff"},onClick:function(){return e.addKey("keys")}}))),help:g.a.createElement(v.Fragment,null,g.a.createElement("div",null,"请填写集群内所有节点ip，并保证此节点能被Bazooka服务访问"),g.a.createElement("div",null,"每个节点请选择登录凭据，如果没有可用的凭据，您可以",g.a.createElement("a",{onClick:this.onAddNodeLogin},"新建节点登录凭据")))},this.renderNodeList())))))}},{key:"renderNodeList",value:function(){var e=this,a=this.props.credentialsListNODE_LOGIN,t=this.props.form,n=t.getFieldDecorator,r=t.getFieldValue;n("keys",{initialValue:[0]});var c=r("keys");return g.a.createElement(v.Fragment,null,c.map(function(t,r){return g.a.createElement(l.a,{type:"flex",gutter:24,key:t},g.a.createElement(s.a,{span:2},g.a.createElement(H,{label:"序号",colon:!1},g.a.createElement("span",null,r+1))),g.a.createElement(s.a,{span:4},g.a.createElement(H,{label:"节点ip",colon:!1},n("nodeList.".concat(t,".nodeIp"),{rules:[{required:!0,message:"请输入节点ip"}]})(g.a.createElement(F.a,{placeholder:"请输入节点ip"})))),g.a.createElement(s.a,{span:4},g.a.createElement(H,{label:"SSH端口",colon:!1},n("nodeList.".concat(t,".sshPort"),{initialValue:22,rules:[{required:!0,message:"请输入ssh端口"}]})(g.a.createElement(F.a,{placeholder:"请输入ssh端口"})))),g.a.createElement(s.a,{span:4},g.a.createElement(H,{label:"CPU",colon:!1},n("nodeList.".concat(t,".cpu"),{rules:[{required:!0,message:"请输入CPU核数"}]})(g.a.createElement(Y.a,{placeholder:"请输入CPU核数",style:{width:"100%"}})))),g.a.createElement(s.a,{span:4},g.a.createElement(H,{label:"内存",colon:!1},n("nodeList.".concat(t,".memory"),{rules:[{required:!0,message:"请输入内存大小（GiB）"}]})(g.a.createElement(Y.a,{placeholder:"请输入内存大小（GiB）",style:{width:"100%"}})))),g.a.createElement(s.a,{span:5},g.a.createElement(H,{label:"节点登录凭据",colon:!1},n("nodeList.".concat(t,".credentialId"),{rules:[{required:!0,message:"请选择节点登录凭据"}]})(g.a.createElement(D.a,{placeholder:"请选择节点登录凭据"},a&&a.map(function(e){return g.a.createElement(X,{value:e.id,key:e.id},e.credentialName)}))))),c.length>1&&g.a.createElement(H,{className:M.a.marginL10,label:" ",colon:!1},g.a.createElement(S.a,{type:"minus",style:{color:"#1890ff"},onClick:function(){e.removeKey(t,"keys")}})))}))}},{key:"render",value:function(){var e=this.state.showGitModal;return g.a.createElement(n.a,null,this.renderTitle(),this.renderForm(),e&&g.a.createElement(z.a,{visible:e,onCancel:this.onGitCancel,credentialType:"NODE_LOGIN",onOk:this.onAddGitCredentials}))}}]),a}(g.a.Component),W=A.a.create()(Object(b.connect)(function(e){return{credentialsListNODE_LOGIN:e.system.credentialsListNODE_LOGIN}})(Q)),$=function(e){function a(e){var t;return o()(this,a),(t=d()(this,E()(a).call(this,e))).onAdd=function(e){t.setState({showType:e})},t.onCancel=function(){t.setState({showType:""})},t.state={showType:""},t}return f()(a,e),m()(a,[{key:"componentDidMount",value:function(){}},{key:"renderMesos",value:function(){var e=this;return g.a.createElement(n.a,null,g.a.createElement("div",{className:L.a.clusterTitleBox},g.a.createElement("img",{src:k.a.MESOS}),g.a.createElement("span",{className:L.a.clusterTitle},"Mesos集群")),g.a.createElement("div",null,g.a.createElement(l.a,{type:"flex"},g.a.createElement(s.a,{span:10},g.a.createElement("img",{src:k.a.MESOS_JG,className:L.a.jgImg})),g.a.createElement(s.a,{span:14},g.a.createElement("div",{className:L.a.flexRightContent},g.a.createElement("div",null,g.a.createElement("p",null,g.a.createElement("span",{className:L.a.titleSub},"Mesos集群"),"是多主（master）多从（slave）的结构，核心组件为Mesos和Marathon。"),g.a.createElement("p",null,"Mesos slave安装在所有slave节点上，管理节点资源并向Mesos master汇报。",g.a.createElement("br",null),"Mesos master安装在所有master节点上，主从结构，主Mesos处理工作，其余Mesos服务stand by。",g.a.createElement("br",null),"Mesos master收集Mesos slave收集的资源并提供给各个Framework使用。"),g.a.createElement("p",null,"Marathon安装在所有master节点上，主从结构，主Marathon处理工作，其余Marathon服务stand by。",g.a.createElement("br",null),"Marathon在Mesos master注册为Framework之后，接受Mesos master分配的计算资源，在各个Mesos slave节点上，由Docker Executor使用具体的计算资源并启动容器。"),g.a.createElement("p",null,"Zookeeper安装在所有master节点上，提供一个高可用的数据库，保存Mesos集群的各类数据。"),g.a.createElement("p",null,g.a.createElement("a",{href:"https://docs.d2iq.com/mesosphere/dcos/1.11/",target:"_black"},"了解更多"))),g.a.createElement("div",null,g.a.createElement(r.a,{type:"primary",onClick:function(){return e.onAdd("Mesos")}},"+ 添加Mesos集群")))))))}},{key:"renderKubernetes",value:function(){return g.a.createElement(n.a,{className:M.a.marginT},g.a.createElement("div",{className:L.a.clusterTitleBox},g.a.createElement("img",{src:k.a.KUBERNETES}),g.a.createElement("span",{className:L.a.clusterTitle},"Kubernetes集群")),g.a.createElement("div",null,g.a.createElement(l.a,{type:"flex"},g.a.createElement(s.a,{span:10},g.a.createElement("img",{src:k.a.KUBERNETES_JG,className:L.a.jgImg})),g.a.createElement(s.a,{span:12},g.a.createElement("div",{className:L.a.flexRightContent},g.a.createElement("div",null,g.a.createElement("p",null,g.a.createElement("span",{className:L.a.titleSub},"Kubernetes集群"),"是多主（master）多从（slave）的结构，核心组件包括API Server，Scheduler，Controller Manager，Kubelet和etcd。"),g.a.createElement("p",null,"API Server安装在所有master节点上，用于提供所有Kubernetes API，用于Kubernetes各组件之间的通信。",g.a.createElement("br",null),"Scheduler安装在所有master节点上，作用是调度容器到各个节点。",g.a.createElement("br",null),"Controller Manager安装在所有master节点上，是具体的执行者，负责节点故障的通知和响应、控制集群内容器的正确数量，也维护endpoints和命名空间。"),g.a.createElement("p",null,"Kubeket安装在所有slave节点上，接收Kubernetes Master的容器任务，并管理容器以pod的方式在各个slave节点上正确运行。"),g.a.createElement("p",null,"etcd可以安装在master节点、集群外部或者任何能被访问到的地方，提供一个高可用的数据库，保存Kubernetes集群的各类数据。"),g.a.createElement("p",null,g.a.createElement("a",{href:"https://kubernetes.io/docs/home/",target:"_black"},"了解更多"))),g.a.createElement("div",null,g.a.createElement(r.a,{type:"primary",disabled:!0},"+ 添加Kubernetes集群")))))))}},{key:"renderBazooka",value:function(){var e=this;return g.a.createElement(n.a,{className:M.a.marginT},g.a.createElement("div",{className:L.a.clusterTitleBox},g.a.createElement("img",{src:k.a.BAZOOKA}),g.a.createElement("span",{className:L.a.clusterTitle},"Bazooka单节点集群")),g.a.createElement("div",null,g.a.createElement(l.a,{type:"flex"},g.a.createElement(s.a,{span:10},g.a.createElement("img",{src:k.a.BAZOOKA_JG,className:L.a.jgImg})),g.a.createElement(s.a,{span:12},g.a.createElement("div",{className:L.a.flexRightContent},g.a.createElement("div",null,g.a.createElement("p",null,g.a.createElement("span",{className:L.a.titleSub},"Bazooka单节点集群"),"是阿塔云Bazooka自行实现的资源管理插件，所有节点将不安装任何agent，而是通过ssh来部署容器。"),g.a.createElement("p",null,"单节点集群只是将一系列分配给此业务的节点记录为一个集群，实际上节点间互不访问"),g.a.createElement("p",null,"请注意，此方案可以管理单台物理机或者虚拟机，但是没有容器调度、负载均衡、健康检查和容器自愈等功能"),g.a.createElement("p",null,g.a.createElement("a",{href:"https://github.com/ata-cloud/bazooka",target:"_black"},"了解更多"))),g.a.createElement("div",null,g.a.createElement(r.a,{type:"primary",onClick:function(){return e.onAdd("Bazooka")}},"+ 添加Bazooka单节点集群")))))))}},{key:"render",value:function(){var e=this.state.showType;return g.a.createElement(y.PageHeaderWrapper,{content:"可以根据资源的类型不同，添加Mesos集群、Kubernetes集群或者单节点集群",title:"新增资源"},!e&&g.a.createElement(v.Fragment,null,this.renderMesos(),this.renderKubernetes(),this.renderBazooka()),"Mesos"===e&&g.a.createElement(Z,{onCancel:this.onCancel}),"Bazooka"===e&&g.a.createElement(W,{onCancel:this.onCancel}))}}]),a}(g.a.Component);a.default=Object(b.connect)(function(e){e.service;return{}})($)},xFK1:function(e,a,t){e.exports={clusterTitleBox:"antd-pro-pages-cluster-add-cluster-index-clusterTitleBox",clusterTitle:"antd-pro-pages-cluster-add-cluster-index-clusterTitle",titleSub:"antd-pro-pages-cluster-add-cluster-index-titleSub",jgImg:"antd-pro-pages-cluster-add-cluster-index-jgImg",flexRightContent:"antd-pro-pages-cluster-add-cluster-index-flexRightContent"}}}]);