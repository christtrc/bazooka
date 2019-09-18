import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import pwa from './zh-CN/pwa';
import component from './zh-CN/component';
export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.login.message-invalid-credentials': '账户或密码错误（admin/ant.design）',
  'app.login.message-invalid-verification-code': '验证码错误',
  'app.login.tab-login-credentials': '账户密码登录',
  'app.login.tab-login-mobile': '手机号登录',
  'app.login.remember-me': '自动登录',
  'app.login.forgot-password': '忘记密码',
  'app.login.sign-in-with': '其他登录方式',
  'app.login.signup': '注册账户',
  'app.login.login': '登录',
  'app.register.register': '注册',
  'app.register.get-verification-code': '获取验证码',
  'app.register.sing-in': '使用已有账户登录',
  'app.register-result.msg': '你的账户：{email} 注册成功',
  'app.register-result.activation-email':
    '激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。',
  'app.register-result.back-home': '返回首页',
  'form.captcha': '获取验证码',
  'form.captcha.second': '秒',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};