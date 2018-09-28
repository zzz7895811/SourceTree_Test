import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transition1 from '@/components/Transition'
import Rate from '../../user_components/Rate'
import DatePick from '../../user_components/DatePick'
import Radio from '../../user_components/Radio'
import Checkbox from '../../user_components/CheckBox'
import Input from '../../user_components/Input'

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
    }
  ]
})
