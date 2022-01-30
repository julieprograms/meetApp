import React from 'react';
import './WelcomeScreen.css';

export function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="welcome-header-wrapper">
            <h4 className="welcome_message">Hello!</h4>
            <h3 className="welcome_message welcome-subtitle">See upcoming events around the world for Full Stack Developers</h3>
            </div>
        
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with Google</b>
            </button>
          
        </div>
        <div className="privacy-link"><a
        
          href="https://julieprograms.github.io/meetApp/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a></div> </div>
      </div>
    ) : null;
}