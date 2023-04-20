import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import LandingPageClient from './components/LandingPageClient';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/landingpageclient' element={<LandingPageClient/>} />
      </Routes>
    </div>
  );
}

export default App;
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';

// function App() {
//   return (
//     <Provider store={store}>
//       {/* your app content goes here */}
//     </Provider>
//   );
// }

// export default App;
// Provider component wraps entire React component tree and provides access to the redux store
// Takes the Redux store created as a prop and passes it to the other child components
// Allows you to use useSelector and useDispatch hooks in any component in your application without having to pass down the store as props