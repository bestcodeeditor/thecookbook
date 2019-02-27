import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">The Cookbook</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https:\\facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https:\\twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>

        <li>
          <a
            href="https:\\instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>

        <li>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="google"
          >
            <i className="fab fa-google-plus-g fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
