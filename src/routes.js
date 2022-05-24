import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const TestCode = React.lazy(() => import('./views/menus/testcode/testcode.js'));
const StudentForm = React.lazy(() => import('./views/menus/student/StudentForm.js'));
// const calculator = React.lazy(() => import('./views/menus/calculator/calculatorNew'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/menus/testcode', name: 'Test Code', component: TestCode },
  { path: '/menus/student', name: 'Student', component: StudentForm },
  // { path: '/menus/calculator', name: 'calculator', component: calculator },
];

export default routes;
