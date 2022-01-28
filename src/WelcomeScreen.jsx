import React from 'react';
import './WelcomeScreen.css';
import welcome_logo from './images/welcome_logo.png';
import welcomescreen_logo from './images/welcomescreen_logo.png';

export function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <img
          src={welcomescreen_logo}
          className="welcomesreen_logo"
          alt="Meet Logo"
        />
        <img 
          src={welcome_logo}
          className="welcome_logo"
          alt="Welcome to the Meet App!"
        />
        <h4 className="welcome_message">Hello! Log in to see upcoming events around the world for Full Stack Developers</h4>
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
        </div>
        <a
          href="https://julieprograms.github.io/meetApp/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    ) : null;
}