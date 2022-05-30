// import React, { Component } from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// import './scss/style.scss';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// // Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// class App extends Component {

//   render() {
//     return (
//       <HashRouter>
//           <React.Suspense fallback={loading}>
//             <Switch>
//               <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
//               <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
//               <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
//               <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
//               <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
//             </Switch>
//           </React.Suspense>
//       </HashRouter>
//     );
//   }
// }

// export default App;

// import React from "react";
// import { BrowserRoute,Switch,Route, BrowserRouter,Redirect } from "react-router-dom";
// // import Home from './views/pages/home/homeIndex';
// // import ProfileIndex from "./views/pages/profile/profileIndex";
// // import FruitIndex from "./views/pages/fruits/fruitIndex";

// const Home = React.lazy(()=> import ("./views/pages/home/homeIndex"));
// const ProfileIndex = React.lazy(()=> import ("./views/pages/profile/profileIndex"));
// const FruitIndex = React.lazy(()=> import ("./views/pages/fruits/fruitIndex"));

// const App = () =>{

//   const Loading = (
//     <div><h1>Loading</h1></div>
//   )

//   return(
//     <BrowserRouter>
//       <React.Suspense fallback={Loading} >
//       <Switch>
//         <Route exact path="/" component={Home}  />
//         <Route exact path="/profile" component={ProfileIndex} />
//         <Route exact path="/fruit" component={FruitIndex} />
//         <Route>
//           <Redirect to="/" />
//         </Route>
//       </Switch>
//       </React.Suspense>
//     </BrowserRouter>
//   )
// }

// export default App;

// import React from "react";
// import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
// // import TestOneIndex from "./views/pages/testOne/TestOneIndex";
// // import TestTwoIndex from "./views/pages/testTwo/TestTwoIndex";
// const TestOneIndex = React.lazy(()=>import("./views/pages/testOne/TestOneIndex"));
// const TestTwoIndex = React.lazy(()=>import('./views/pages/testTwo/TestTwoIndex'))

// const App = () =>{

//   const loading = () =>{
//     return(
//       <h4>load</h4>
//     )
//   }

//   return(
    // <BrowserRouter>
    //   <React.Suspense fallback={loading} >
    //   <Switch>
    //     <Route exact path="/" component={TestOneIndex}  />
    //     <Route exact path="/two" component={TestTwoIndex} />
    //     <Route>
    //       <Redirect  to="/" />
    //     </Route> 
    //   </Switch>
    //   </React.Suspense>
    // </BrowserRouter>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter,Switch,Route, Redirect } from "react-router-dom";
import HomePageIndex from "./views/pages/homePage/HomePageIndex";
import RegisterIndex from "./views/pages/reg/RegisterIndex";
import EmployeeListIndex from "./views/pages/employee/EmployeeListIndex";
import AboutUs from "./views/pages/about/AboutUs";
import Detail from "./views/pages/detail/Detail";
import Error from "./views/pages/error/Error";
import UserList from "./views/pages/userList/UserList";
import UserDetailIndex from "./views/pages/userDetail/UserDetailIndex";

const App = () =>{
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/homePage"/></Route>
      <Route exact path="/homePage" component={HomePageIndex} />
      <Route exact path="/reg" component={RegisterIndex}  />
      <Route exact path="/employee" component={EmployeeListIndex}  />
      <Route exact path="/about" component={AboutUs}  />
      <Route exact path="/detail" component={Detail}  />
      <Route exact path="/userDetail" component={UserDetailIndex}  />
      <Route exact path="/userList" component={UserList}  />
      <Route exact path="/error" component={Error}></Route>
      <Route>
        <Redirect to="/error" />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App;