// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img
          src="data:image/svg+xml,%3Csvg width='40' height='41' viewBox='0 0 40 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M39.4146 0.5H0.585419C0.262618 0.5 0 0.762618 0 1.08542V39.9146C0 40.2374 0.262618 40.5 0.585419 40.5H39.4146C39.7374 40.5 40 40.2374 40 39.9146V1.08542C40 0.762618 39.7374 0.5 39.4146 0.5ZM15.4233 11.4041L16.4355 9.64239C16.523 9.48919 16.6927 9.39071 16.8677 9.39071H23.1268C23.3073 9.39071 23.4715 9.48919 23.559 9.64239L24.5712 11.4041C24.6587 11.5573 24.6587 11.7488 24.5712 11.9075L22.6399 15.2394L21.4417 17.313C21.3541 17.4662 21.1845 17.5647 21.004 17.5647H18.9796C18.7991 17.5647 18.6349 17.4717 18.5419 17.313L17.3437 15.2394L15.4124 11.9075C15.3249 11.7543 15.3249 11.5628 15.4124 11.4041H15.4233ZM31.1804 17.7726L26.4642 25.9192L23.5371 30.991C23.3183 31.3686 22.9134 31.6038 22.4757 31.6038H17.5243C17.0866 31.6038 16.6817 31.3686 16.4629 30.991L13.5358 25.9192L8.81959 17.7726C8.60074 17.3951 8.60074 16.9246 8.81959 16.5471L11.2926 12.2467C11.5114 11.8692 11.9163 11.6339 12.354 11.6339H13.4756L12.9832 12.4819L12.5783 13.1877C12.4306 13.4394 12.4361 13.7513 12.5783 14.0029L15.7078 19.4085L17.6501 22.7733C17.7978 23.025 18.0659 23.1782 18.3559 23.1782H21.6441C21.9341 23.1782 22.2022 23.025 22.3499 22.7733L24.2922 19.4085L27.4217 14.0029C27.5694 13.7513 27.5694 13.4394 27.4217 13.1877L27.0168 12.4819L26.5244 11.6284H27.646C28.0837 11.6284 28.4886 11.8637 28.7074 12.2467L31.1804 16.5471C31.3993 16.9246 31.3993 17.3951 31.1804 17.7726Z' fill='%23E5062F'/%3E%3C/svg%3E"
          alt="Logo"
          className="footer-logo"
        />
        <div className="copyright">© 2024 Sentinels. All rights reserved</div>
      </div>
      <div className="footer-content">
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>Who we are</li>
            <li>Championships</li>
            <li>Partner</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="column">
          <h3>COMPANY</h3>
          <ul>
            <li>Teams</li>
            <li>Championships</li>
            <li>Partner</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="column">
          <h3>SHOP</h3>
          <ul>
            <li>Who we are</li>
            <li>Championships</li>
            <li>Partner</li>
            <li>Management</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
