(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+PLT":function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("g9YV"),a("wCAj")),s=(a("P2fV"),a("NJEC")),o=(a("/zsF"),a("PArb")),i=(a("+L6B"),a("2/Rp")),l=(a("5NDa"),a("5rEg")),c=a("d6i3"),u=a.n(c),d=(a("miYZ"),a("tsqr")),p=a("1l/V"),m=a.n(p),h=a("p0pE"),f=a.n(h),g=a("2Taf"),b=a.n(g),v=a("vZ4D"),E=a.n(v),y=a("l4Ni"),O=a.n(y),S=a("ujKo"),I=a.n(S),w=a("MhPg"),k=a.n(w),L=(a("OaEy"),a("2fM7")),C=(a("y8nQ"),a("Vl3Y")),j=a("q1tI"),N=a.n(j),F=a("MuoO"),x=a("wd/R"),T=a.n(x),D=a("a/Iw"),P=(a("k9Yu"),a("XfOM")),z=a.n(P),A=(a("2qtc"),a("kLXV")),M=a("jehZ"),V=a.n(M),R=(a("7Kak"),a("9yH6")),q=C.a.Item,Y=L.a.Option,U=(l.a.TextArea,{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}),Z=function(e){function t(e){var a;return b()(this,t),(a=O()(this,I()(t).call(this,e))).onFetchDetail=function(){var e=a.props.userId;D.a.usergetPage({userId:e}).then(function(e){if(e&&"1"==e.code){var t=e.data&&e.data.rows?e.data.rows[0]:{},n=[];t.userRoles&&t.userRoles.map(function(e){n.push(e.roleId)}),a.setState({detail:f()({},t,{roleIds:n})})}})},a.onFetchItems=function(){var e=a.props,t=e.dispatch,n=e.roleList;0!==Object.getOwnPropertyNames(n).length&&100==n.pageSize||t({type:"auth/roleList",payload:{pageSize:100}})},a.onSubmit=function(e){var t=a.props.onOk;e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,a){e||t(a)})},a.state={detail:{},isResetPasword:0},a}return k()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.props.userId&&this.onFetchDetail(),this.onFetchItems()}},{key:"renderForm",value:function(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldValue,n=this.props,r=n.roleList,s=n.userId,o=this.state,i=o.detail;o.isResetPasword;return N.a.createElement(C.a,V()({},U,{onSubmit:this.onSubmit,autoComplete:"off"}),N.a.createElement(q,{label:"用户名"},t("username",{initialValue:i.username,rules:[{required:!0,message:"用户名为14位以内数字字母下划线的组合",pattern:/^\w{1,14}$/}]})(N.a.createElement(l.a,{placeholder:"请输入用户名",disabled:!!s,autoComplete:"new-password"}))),N.a.createElement(q,{label:"全名"},t("realName",{initialValue:i.realName,rules:[{required:!0,message:"请输入32位以下中文字母标点符号的组合",pattern:/^[a-zA-Z,.?;:，。“”！（）？\u4E00-\u9FA5]{1,32}$/}]})(N.a.createElement(l.a,{placeholder:"请输入真实姓名"}))),N.a.createElement(q,{label:"邮箱"},t("email",{initialValue:i.email,rules:[{required:!0,message:"邮箱格式不正确",pattern:/^\S+@{1}\S+[.]{1}\S+$/},{validator:function(e,t,a){t.length>100?a("最多100个字符"):a()}}]})(N.a.createElement(l.a,{placeholder:"请输入邮箱"}))),N.a.createElement(q,{label:"选择角色"},t("roleIds",{initialValue:i.roleIds?i.roleIds:[],rules:[{required:!0,message:"请选择角色"}]})(N.a.createElement(L.a,{placeholder:"请选择用户角色",showSearch:!0,mode:"multiple",allowClear:!0},r&&r.rows&&r.rows.map(function(e){return N.a.createElement(Y,{value:e.roleId,key:e.roleId},e.roleName)})))),s&&N.a.createElement(q,{label:"是否重置密码"},t("resetPas",{initialValue:0,rules:[{required:!1}]})(N.a.createElement(R.a.Group,null,N.a.createElement(R.a,{value:1},"是"),N.a.createElement(R.a,{value:0},"否")))),(!s||1===a("resetPas"))&&N.a.createElement(q,{label:"密码"},t("password",{initialValue:i.password,rules:[{required:!0,message:"请输入密码(不含空格)",pattern:/^\S*$/}]})(N.a.createElement(l.a.Password,{placeholder:"请输入密码",autoComplete:"new-password"}))))}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.userId,n=e.onCancel,r=this.props.submitLoading;return N.a.createElement(A.a,{visible:t,title:a?"编辑用户":"新增用户",onCancel:n,onOk:this.onSubmit,confirmLoading:r},this.renderForm())}}]),t}(N.a.Component),K=C.a.create()(Object(F.connect)(function(e){return{roleList:e.auth.roleList}})(Z)),H=(C.a.Item,L.a.Option,function(e){function t(e){var a;return b()(this,t),(a=O()(this,I()(t).call(this,e))).onFetchList=function(){var e=a.state.searchObj;(0,a.props.dispatch)({type:"auth/userList",payload:e})},a.onFetchItems=function(){var e=a.props,t=e.dispatch,n=e.roleList;0!==Object.getOwnPropertyNames(n).length&&100==n.pageSize||t({type:"auth/roleList",payload:{pageSize:100}})},a.onFetchUserAll=function(){(0,a.props.dispatch)({type:"auth/userAll",payload:{}})},a.onTableChange=function(e,t,n){var r=e.current,s=e.pageSize,o=n.order,i=n.field,l=a.state.searchObj,c=a.props.list,u=o?{sortValue:"ascend"===o?"asc":"descend"===o?"desc":"",sortName:i||""}:{},d=f()({},l,u,{pageNo:s===c.pageSize?parseInt(r):1,pageSize:parseInt(s)});a.setState({searchObj:d})},a.onEdit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({userId:e.userId,showEdit:!0})},a.onDelete=function(){var e=m()(u.a.mark(function e(t){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.searchObj,e.next=3,D.a.userDelete({userId:t});case 3:(r=e.sent)&&"1"==r.code&&(d.a.success("删除成功"),a.setState({searchObj:f()({},n,{pageNo:1})}),a.onFetchUserAll());case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onCancel=function(){a.setState({showEdit:!1})},a.onOk=function(){var e=m()(u.a.mark(function e(t){var n,r,s,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state,r=n.userId,s=n.searchObj,a.setState({submitLoading:!0}),!r){e.next=10;break}return e.next=5,D.a.userEdit(f()({},t,{userId:r}));case 5:(o=e.sent)&&"1"===o.code&&(a.onCancel(),d.a.success("编辑成功"),a.onFetchList(),a.onFetchUserAll()),a.setState({submitLoading:!1}),e.next=15;break;case 10:return e.next=12,D.a.userAdd(f()({},t));case 12:(i=e.sent)&&"1"===i.code&&(a.onCancel(),d.a.success("添加成功"),a.setState({searchObj:f()({},s,{pageNo:1})}),a.onFetchUserAll()),a.setState({submitLoading:!1});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onSearch=function(e){var t=a.state.searchObj;a.setState({searchObj:f()({},t,{condition:e})})},a.state={searchObj:{},showEdit:!1,userId:void 0,submitLoading:!1},a}return k()(t,e),E()(t,[{key:"componentDidMount",value:function(){var e=this.props.list;0===Object.getOwnPropertyNames(e).length&&this.onFetchList()}},{key:"componentDidUpdate",value:function(e,t){this.state.searchObj!==t.searchObj&&this.onFetchList()}},{key:"componentWillUnmount",value:function(){}},{key:"renderOpera",value:function(){var e=this;return N.a.createElement("div",{className:z.a.flexCenter},N.a.createElement(l.a.Search,{onSearch:this.onSearch,placeholder:"搜索用户"}),N.a.createElement(i.a,{type:"primary",onClick:function(){return e.onEdit()},className:z.a.marginL},"+ 新增用户"))}},{key:"renderTable",value:function(){var e=this,t=this.props,a=t.loading,n=t.list,i=[{title:"用户名",dataIndex:"username"},{title:"全名",dataIndex:"realName"},{title:"邮箱",dataIndex:"email"},{title:"角色",dataIndex:"userRoles",className:z.a.textOver,width:200,render:function(e,t){return N.a.createElement(j.Fragment,null,e.map(function(t,a){return N.a.createElement("span",{key:a},t.roleName,a<e.length-1?"，":"")}))}},{title:"修改人",dataIndex:"updateAuthor"},{title:"修改时间",dataIndex:"updateTime",render:function(e,t){return N.a.createElement("span",null,e?T()(e).format("YYYY-MM-DD HH:mm:ss"):"")}},{title:"操作",dataIndex:"opera",render:function(t,a){return N.a.createElement("div",null,N.a.createElement("span",null,N.a.createElement("a",{onClick:function(){e.onEdit(a)}},"修改"),N.a.createElement(o.a,{type:"vertical"}),N.a.createElement(s.a,{title:"确定删除吗?",onConfirm:function(){return e.onDelete(a.userId)},okText:"确定",cancelText:"取消"},N.a.createElement("a",null,"删除"))))}}];return N.a.createElement(j.Fragment,null,N.a.createElement("div",null,N.a.createElement(r.a,{columns:i,dataSource:n.rows||[],onChange:this.onTableChange,loading:a,pagination:{pageSizeOptions:["10","20","30","50"],total:n.totalCount||0,showTotal:function(e,t){return"共".concat(n.totalCount||0,"条，当前").concat(n.pageNum?n.pageNum:1,"/").concat(n.totalPage?n.totalPage:1,"页")},showSizeChanger:!0,current:n.pageNum?n.pageNum:1,pageSize:n.pageSize?n.pageSize:10},rowKey:function(e){return e.userId}})))}},{key:"render",value:function(){var e=this.state,t=e.showEdit,a=e.userId,r=e.submitLoading;return N.a.createElement(n.a,{title:"用户列表",extra:this.renderOpera(),bordered:!1},N.a.createElement("div",{className:z.a.marginT},this.renderTable(),t&&N.a.createElement(K,{visible:t,userId:a,onCancel:this.onCancel,onOk:this.onOk,submitLoading:r})))}}]),t}(N.a.Component));t.default=C.a.create()(Object(F.connect)(function(e){var t=e.auth,a=e.loading;return{list:t.userList,roleList:t.roleList,loading:a.effects["auth/userList"]}})(H))},XAUj:function(e,t,a){"use strict";a.r(t);var n=a("2Taf"),r=a.n(n),s=a("vZ4D"),o=a.n(s),i=a("l4Ni"),l=a.n(i),c=a("ujKo"),u=a.n(c),d=a("MhPg"),p=a.n(d),m=(a("Znn+"),a("ZTPi")),h=a("q1tI"),f=a.n(h),g=a("y1Nh"),b=a("+n12"),v=a("3a4m"),E=a.n(v),y=a("+PLT"),O=(a("IzEo"),a("bx4M")),S=(a("g9YV"),a("wCAj")),I=(a("14J3"),a("BMrR")),w=(a("+L6B"),a("2/Rp")),k=(a("jCWc"),a("kPKH")),L=(a("5NDa"),a("5rEg")),C=(a("miYZ"),a("tsqr")),j=a("p0pE"),N=a.n(j),F=(a("OaEy"),a("2fM7")),x=(a("y8nQ"),a("Vl3Y")),T=a("MuoO"),D=a("a/Iw"),P=(a("wd/R"),a("XfOM")),z=a.n(P),A=x.a.Item,M=(F.a.Option,function(e){function t(e){var a;return r()(this,t),(a=l()(this,u()(t).call(this,e))).onFetchList=function(e){var t=a.state.searchObj;(0,a.props.dispatch)({type:"auth/roleList",payload:e||t})},a.onSubmit=function(e){var t=a.state.searchObj;e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,n){if(!e){var r=N()({},t,n);a.setState({searchObj:r}),a.onFetchList(N()({},r,{pageNo:1}))}})},a.onTableChange=function(e,t,n){var r=e.current,s=e.pageSize,o=n.order,i=n.field,l=a.state.searchObj,c=o?{sortValue:"ascend"===o?"asc":"descend"===o?"desc":"",sortName:i||""}:{},u=N()({},l,c,{pageNo:s===l.pageSize?parseInt(r):1,pageSize:parseInt(s)});a.setState({searchObj:u},function(){a.onFetchList(N()({},u))})},a.onReset=function(){a.state.searchObj;(0,a.props.form.resetFields)(),a.setState({searchObj:{}})},a.onEdit=function(e){var t=e?{id:e.roleId}:{};a.props.history.push({pathname:"/auth/role/edit",query:t})},a.onDelete=function(e){var t=a.state.searchObj;D.a.roleDelete({roleId:e}).then(function(e){e&&"1"==e.code&&(C.a.success("删除成功"),a.onFetchList(N()({},t,{pageNo:1})))})},a.state={searchObj:{}},a}return p()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this.props.list;0!==Object.getOwnPropertyNames(e).length&&100!=e.pageSize||this.onFetchList()}},{key:"componentWillUnmount",value:function(){}},{key:"renderSearch",value:function(){var e=this.state.searchObj,t=this.props.form.getFieldDecorator;return f.a.createElement(h.Fragment,null,f.a.createElement(x.a,{className:z.a.antAdvancedSearchForm,onSubmit:this.onSubmit},f.a.createElement(I.a,null,f.a.createElement(k.a,{span:8},f.a.createElement(A,{label:"角色名称"},t("roleName",{initialValue:e.roleName})(f.a.createElement(L.a,{placeholder:"请输入角色名称",className:z.a.inputWidth})))),f.a.createElement(k.a,{span:6},f.a.createElement(A,{label:" ",colon:!1},f.a.createElement(w.a,{type:"primary",htmlType:"submit",style:{marginRight:10}},"查询"),f.a.createElement(w.a,{onClick:this.onReset},"重置"))))))}},{key:"renderOpera",value:function(){var e=this;return f.a.createElement(h.Fragment,null,f.a.createElement(w.a,{type:"primary",onClick:function(){return e.onEdit()}},"添加角色"))}},{key:"renderTable",value:function(){var e=this.props,t=e.list,a=e.loading,n=[{title:"角色名称",dataIndex:"roleName",width:150},{title:"描述",dataIndex:"remark",className:z.a.textOver,align:"left"}];return f.a.createElement(h.Fragment,null,f.a.createElement("div",null,f.a.createElement(S.a,{columns:n,dataSource:t.rows||[],onChange:this.onTableChange,loading:a,pagination:!1,rowKey:function(e){return e.roleId}})))}},{key:"render",value:function(){return f.a.createElement(O.a,{title:"角色",bordered:!1},this.renderTable())}}]),t}(f.a.Component)),V=x.a.create()(Object(T.connect)(function(e){var t=e.auth,a=e.loading;return{list:t.roleList,loading:a.effects["auth/roleList"]}})(M)),R=(m.a.TabPane,function(e){function t(e){var a;return r()(this,t),(a=l()(this,u()(t).call(this,e))).onTabChange=function(e){a.setState({key:e})},a.state={key:"1",tabList:[{key:"1",tab:"用户"},{key:"2",tab:"角色"}]},a}return p()(t,e),o()(t,[{key:"componentDidMount",value:function(){Object(b.f)()||E.a.replace("/exception403")}},{key:"render",value:function(){var e=this.state,t=e.key,a=e.tabList;return f.a.createElement(g.PageHeaderWrapper,{tabList:a,onTabChange:this.onTabChange,tabActiveKey:t},"1"===t&&f.a.createElement(y.default,null),"2"===t&&f.a.createElement(V,null))}}]),t}(f.a.Component));t.default=R}}]);