/**
 * Created by Cloudfield on 2018/9/29.
 */
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'; //引入中文包，提示信息可以以中文形式显示
import { Validator } from 'vee-validate';

// 配置中文
Validator.addLocale(zh_CN);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      name: '账号',
      phone: '手机'
    }
  }
};

Validator.updateDictionary(dictionary);

Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

