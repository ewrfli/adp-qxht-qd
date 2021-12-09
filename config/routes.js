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
    name: '首页',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/monitor',
    name: '监控',
    icon: 'crown',
    // access: 'canAdmin',
    component: './Monitor',
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
    name: '资讯',
    icon: 'crown',
    path: '/bbs',
    component: './BBS',
    routes: [{
        path: '/bbs/articles',
        name: '讨论',
        icon: 'smile',
        component: './BBS/articles',
      },
      {
        path: '/bbs/applications',
        name: '公司',
        icon: 'smile',
        component: './BBS/applications',
      },
      {
        path: '/bbs/projects',
        name: '项目',
        icon: 'smile',
        component: './BBS/projects',
      },
      {
        component: './404',
      },
    ]
  },
  {
    name: '服务',
    icon: 'table',
    path: '/vip',
    component: './VIP',
  },
  {
    name: '个人',
    icon: 'smile',
    path: '/account/center',
    component: './account/center',
  },
  {
    name: '设置',
    icon: 'smile',
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
