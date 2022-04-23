import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/profile/Profile'
import Album from '@/components/album/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    }
  ]
})
