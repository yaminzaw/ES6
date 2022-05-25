export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu',
        to: '/menus/sub-menu',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/testcode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Form',
        to: '/menus/student',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Student',
        to: '/menus/edit',
      }
    ]
  },
  {
    // _tag: 'CSidebarNavDropdown',
    // name: 'Pages',
    // route: '/pages',
    // icon: 'cil-star',
    // _children: [
    //   {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      // }
      // ,
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Register',
      //   to: '/register',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 500',
      //   to: '/500',
      // },
    // ]
  }
]

