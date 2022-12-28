import {
  faInbox,
  faLink,
  faMapMarker,
  faPhone,
  faSignIn,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/logo.png";
import style from "./style.module.css";
const Footer = () => {
  return (
    <div className={style.cFooterWrapper}>
      <hr />
      <div className={style.cFooter}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <span>amazon</span>
        </div>

        <div className={style.block}>
          <div className={style.detail}>
            <span>Contact Us</span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faMapMarker} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faPhone} />
              <span>352-306-4415</span>
            </span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faInbox} />
              <span>support@amazon.com</span>
            </span>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.detail}>
            <span>Account</span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faSignIn} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.detail}>
            <span>Company</span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faUsers} />
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.detail}>
            <span>Resources</span>
            <span className={style.pngLine}>
              <FontAwesomeIcon className={style.icon} icon={faLink} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={style.copyRight}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
