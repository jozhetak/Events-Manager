import React from 'react';

class Signinform extends React.Component {
    render() {
      return(
			  <section id='signin-form'>
				  <div className="container">
					  <div className="row">
						  <form action="../events-centre-details/index.html" method="post">
			          <div className="form-group">
									<h3>Login</h3>
									<p>Fill in the form to log into Events Manager</p>
									<label htmlFor="exampleInputUsername">Username</label>
				 					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/> 
							  </div>
			          <div className="form-group">
				          <label htmlFor="exampleInputPassword1">Password</label>
				          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
			          </div>
								<button type="submit" className="btn">Login</button>
								<a id='forgotten-password' href='#'><small>forgotten password?</small></a>
							</form>
							</div>
						</div>
					</section>
      )
    }
}

export default Signinform