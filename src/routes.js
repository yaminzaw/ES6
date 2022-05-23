import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
];

export default routes;
