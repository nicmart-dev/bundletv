// import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  // const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  // const [isHelpOpen, setIsHelpOpen] = useState(false);
  // const [isLegalOpen, setIsLegalOpen] = useState(false);
  // const [isOtherOpen, setIsOtherOpen] = useState(false);

  // const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
  // const toggleHelp = () => setIsHelpOpen(!isHelpOpen);
  // const toggleLegal = () => setIsLegalOpen(!isLegalOpen);
  // const toggleOther = () => setIsOtherOpen(!isOtherOpen);

  return (
    <footer className="telus-footer">
      <hr className="footer-divider" />

      <hr className="footer-divider" />
      <div className="footer-social">
        <ul>
          <li>
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/7oy6SUxAHZmOiicDcj7xd0/b0027a69854fbe5cbf81dc20c3fb48d7/logo-facebook.png"
              alt="Facebook"
            />
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/6mEIrDh526sTmAKY8Ayj38/c636d5ac568d84e59b8336d4aa25e774/X_Logo_Sept14.png"
              alt="Twitter"
            />
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/YBVTvLZlG6HIyhZDqq2Lg/ca9260eec0fca53605fac3b6c8944ea1/instagram_black.png"
              alt="Instagram"
            />
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/1P6VE6ZOJAU3W1ULhZGHg9/db5c57783caafebe1b0bf49444c2637b/linkedin_black.png"
              alt="LinkedIn"
            />
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/3UT98RTJqlPOosADIS0zvT/cf02cb826630ad16c22abcafc278af63/youtube_grey.png"
              alt="YouTube"
            />
          </li>
        </ul>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="logo">
          <img
            src="https://images.ctfassets.net/fikanzmkdlqn/3loH0T0nylM0oqQ5CCbfWa/5c6adb84324374887c8ee92c81f0604a/TELUS_LMTFF_EN_Hor_2021_Digital_RGB__2_.svg"
            alt="TELUS Logo"
          />
        </div>
        <p>&copy; {new Date().getFullYear()} TELUS.</p>
      </div>
    </footer>
  );
};

export default Footer;
