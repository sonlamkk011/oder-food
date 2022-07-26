import "./Login.scss";
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Login = () => {
    return(
        <>
        <div id="login">
            <div className="container">
            <>
  <div className="row g-0 app-auth-wrapper">
    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
      <div className="d-flex flex-column align-content-end">
        <div className="app-auth-body mx-auto">
          <div className="app-auth-branding mb-4">
            <a className="app-logo" href="/">
              <FastfoodIcon className="icon" />
            </a>
          </div>
          <h2 className="auth-heading text-center mb-5">Log in </h2>
          <div className="auth-form-container text-start">
            <form className="auth-form login-form">
              <div className="email mb-3">
                <label className="sr-only" htmlFor="signin-email">
                  Email
                </label>
                <input
                  id="signin-email"
                  name="signin-email"
                  type="email"
                  className="form-control signin-email"
                  placeholder="Email address"
                  required="required"
                />
              </div>
              {/*//form-group*/}
              <div className="password mb-3">
                <label className="sr-only" htmlFor="signin-password">
                  Password
                </label>
                <input
                  id="signin-password"
                  name="signin-password"
                  type="password"
                  className="form-control signin-password"
                  placeholder="Password"
                  required="required"
                />
                <div className="extra mt-3 row justify-content-between">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="RememberPassword"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="RememberPassword"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/*//col-6*/}
                  <div className="col-6">
                    <div className="forgot-password text-end">
                      <a href="reset-password.html">Forgot password?</a>
                    </div>
                  </div>
                  {/*//col-6*/}
                </div>
                {/*//extra*/}
              </div>
              {/*//form-group*/}
              <div className="text-center">
                <a href="/">
                <button
                  type="submit"
                  className="btn app-btn-primary w-100 theme-btn mx-auto"
                  href="/"
                  
                >
                  Log In
                </button>
                </a>
                
              </div>
            </form>
            <div className="auth-option text-center pt-5">
              No Account? Sign up{" "}
              <a className="text-link" href="register">
                here
              </a>
              .
            </div>
          </div>
        </div>
       
      </div>
    </div>
        
  </div>
</>


            </div>
        </div>
        
        </>
    )
}
export default Login;