import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../config/constants';
import {
  FooterWrapper,
  FooterContent,
  FooterMain,
  FooterSection,
  MoreAboutSection,
  PromoCards,
  PromoCard,
  PromoCardContent,
  FooterBottom,
  Copyright
} from '../styles/components/FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterMain>
          <FooterSection>
            <h3>Pages</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/products">Illustration Courses</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy">Course Delivery</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Help</h3>
            <ul>
              <li><Link to="/support">FAQ</Link></li>
              <li><Link to="/return-policy">Returns Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/cart">My Courses</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>My Account</h3>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </FooterSection>

          <MoreAboutSection>
            <h3>More About {COMPANY_INFO.name}</h3>
            <PromoCards>
              <PromoCard href="/products">
                <img src="/images/pic_post_6.jpg" alt="Illustration Courses" />
                <PromoCardContent>
                  <h4>Illustration Courses</h4>
                  <p>Master Digital Illustration</p>
                </PromoCardContent>
              </PromoCard>

              <PromoCard href="/about">
                <img src="/images/pic_post_3.jpg" alt="About Us" />
                <PromoCardContent>
                  <h4>About Us</h4>
                  <p>Illustration Education Excellence</p>
                </PromoCardContent>
              </PromoCard>

              <PromoCard href="/support">
                <img src="/images/pic_post_4.jpg" alt="Support" />
                <PromoCardContent>
                  <h4>Student Support</h4>
                  <p>24/7 Learning Assistance</p>
                </PromoCardContent>
              </PromoCard>
            </PromoCards>
          </MoreAboutSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            Copyright  2025 {COMPANY_INFO.name}. All rights reserved. | Premium Illustration Education & Training Courses
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
