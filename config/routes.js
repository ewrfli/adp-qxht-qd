export default [{
    path: '/user',
    layout: false,
    routes: [{
        path: '/user',
        routes: [{
          name: 'login',
          path: '/user/login',
          component: './user/Login',
        }, ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'page1',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'page2',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    // routes: [
    //   {
    //     path: '/admin/sub-page',
    //     name: 'sub-page',
    //     icon: 'smile',
    //     component: './Welcome',
    //   },
    //   {
    //     component: './404',
    //   },
    // ],
  },
  {
    name: 'page3',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'page4',
    icon: 'crown',
    path: '/BBS',
    component: './BBS',
  },
  {
    name: '个人',
    icon: 'crown',
    path: '/account/settings',
    component: './account/settings',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
