import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transition1 from '@/components/Transition'
import Rate from '../../user_components/Rate'
import DatePick from '../../user_components/DatePick'
import Radio from '../../user_components/Radio'
import Checkbox from '../../user_components/CheckBox'
import Input from '../../user_components/Input'
import Validate from '../../user_components/Validate'
import UiVerify from '../../user_components/Ui-Verify'
import SwitchSlider from '../../user_components/Switch_Slider.vue'
import Token from '../../user_components/Token.vue'
import IMG from "../../user_components/ImgUpLoad.vue"
import Gantt from "../../user_components/GanttDemo.vue"
import ArrayInput from "../../user_components/ArrayInput.vue"
import Formula from "../../user_components/Formula.vue"
import Parent from "../../user_components/Parent.vue"
import TreeDemo from "../../user_components/TreeDemo.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
          path: '/Transition',
          name: 'Transition',
          component: Transition1
      },{
          path: '/Rate',
          name: 'Rate',
          component: Rate
      }
      ,{
          path: '/DatePick',
          name: 'DatePick',
          component: DatePick
      } ,{
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },{
      path: '/Checkbox',
      name: 'Checkbox',
      component: Checkbox
    },{
      path: '/Input',
      name: 'Input',
      component: Input
    },{
      path: '/Validate',
      name: 'Validate',
      component: Validate
    },{
      path: '/UiVerify',
      name: 'UiVerify',
      component: UiVerify
    }
    ,{
      path: '/SwitchSlider',
      name: 'SwitchSlider',
      component: SwitchSlider
    },
    {
      path:'/Token',
      name:'Token',
      component:Token
  },
    {
      path:'/IMG',
      name:'IMG',
      component:IMG
    },
    {
      path:'/Gantt',
      name:'Gantt',
      component:Gantt
    },
    {
      path:'/ArrayInput',
      name:'ArrayInput',
      component:ArrayInput
    },
    {
      path:'/Formula',
      name:'Formula',
      component:Formula
    },
    {
      path:'/Parent',
      name:'Parent',
      component:Parent
    },

    {
      path:'/TreeDemo',
      name:'TreeDemo',
      component:TreeDemo
    },

  ]
})
