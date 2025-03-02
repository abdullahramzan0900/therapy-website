import React from 'react';
import '../styles/CookiesPolicy.scss'; // Import specific SCSS file

const CookiesPolicy = () => {
  return (
    <div className="cookies-policy">
      <h2>Cookies Policy</h2>
      <p><strong>Last Updated:</strong> 05/04/225</p>
      <p>Nova Counselling & Psychotherapy ("we", "our", "us") uses cookies to improve your experience on our website and ensure compliance with the UK GDPR and the Privacy and Electronic Communications Regulations (PECR).</p>
      
      <h3>1. What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device when you visit our website. They help us enhance site functionality, track performance, and improve user experience.</p>
      
      <h3>2. Types of Cookies We Use</h3>
      <p><strong>Essential Cookies:</strong> Necessary for website functionality (e.g., security, login sessions).</p>
      <p><strong>Analytical Cookies:</strong> Help us track website traffic and improve services (e.g., Google Analytics).</p>
      <p><strong>Functional Cookies:</strong> Enhance user experience (e.g., saving language preferences).</p>
      <p><strong>Marketing Cookies:</strong> Used for advertising and social media features.</p>
      
      <h3>3. How We Use Cookies</h3>
      <p>We use cookies to:</p>
      <ul>
        <li>Improve website functionality and security.</li>
        <li>Analyze visitor interactions to enhance services.</li>
        <li>Ensure compliance with legal and regulatory requirements.</li>
      </ul>
      
      <h3>4. Managing Your Cookie Preferences</h3>
      <p>You can manage or disable cookies through your browser settings. Note that disabling essential cookies may affect website functionality.</p>
      <p>To adjust cookie settings:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome: Guide</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox: Guide</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari: Guide</a></li>
      </ul>
      <p>For further assistance, contact us at <a href="mailto:info@ncptherapy.com">info@ncptherapy.com</a>.</p>
    </div>
  );
};

export default CookiesPolicy;