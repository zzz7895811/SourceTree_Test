(function()
{
    //向外暴露的插件对象
    const MyPlugin={}
    window.MyPlugin=MyPlugin
    MyPlugin.insatll=function(Vue,options)
    {
        Vue.myGlobalMethod=function()
        {
            console.log("myGlobalMethod方法")
        }
        Vue.directive("my-directive",function(el,binding)
        {
            el.textContent=binding.value.toUpperCase()
        })

        Vue.prototype.$myMethod=function()
        {
            console.log("myMethod")            
        }
    }
})