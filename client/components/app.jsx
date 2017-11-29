import React from 'react';
import '../css/sign-in-form.scss';
import '../css/sign-up-form.scss';
import '../css/landingpagebody.scss'
import Navbar from './navbar.jsx';
import Signinbody from './signinbody.jsx';
import Signupbody from './signupbody.jsx';
import Signupnavbar from './signupnavbar.jsx';
import Landingpagebody from './landingpagebody.jsx'

const App = () => (
    <div>
      <Navbar />
      <Landingpagebody />
    </div>
)

export default App;
