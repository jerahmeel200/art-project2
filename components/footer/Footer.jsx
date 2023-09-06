import React, { useState } from "react";

import styles from "./Footer.module.css";
// import 'font-awesome/css/font-awesome.min.css';
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import { socioIcons, navLinks } from "../data";
import Link from "next/link";

function Footer() {
  const popularLinks = [
    {
      id: "1",
      title: "MAIN MENU",

      content: [
        { label: "HOME", link: "/" },
        { label: "GALLERY SHOP", link: "/" },
        { label: "CLOTHING", link: "/" },
        { label: "ABOUT", link: "/" },
        { label: "REVIEW", link: "/" },
        { label: "CONTACT", link: "/" },
      ],
    },
  ];

  const contacts = [
    {
      id: "2",
      title: "MORE INFO",

      content: [
        { label: "Who we are", link: "/" },
        { label: "Contact Us", link: "/" },
        { label: "Privacy Policy", link: "/" },
        { label: "Shipping Policy", link: "/" },
        { label: "Refund Policy", link: "/" },
        { label: "Terms of Service", link: "/" },
      ],
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeAccordion2nd, setActiveAccordion2nd] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const toggleAccordion2nd = (accordionId) => {
    setActiveAccordion2nd(
      activeAccordion2nd === accordionId ? null : accordionId
    );
  };

  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.socialIcons}>
            <Facebook size={25} color="gray" className={styles.socialsIcons} />
            <Instagram size={25} color="gray" className={styles.socialsIcons} />
            <Twitter size={25} color="gray" className={styles.socialsIcons} />
            <Youtube size={25} color="gray" className={styles.socialsIcons} />
            <Facebook size={25} color="gray" className={styles.socialsIcons} />
          </div>
          <div className={styles.footerMenuCont}>
            <h3>MAIN MENU</h3>
            {navLinks.map((item) => (
              <Link
                className={styles.footerMenu}
                key={item.id}
                href={item.link}
              >
                <h4> {item.title} </h4>
              </Link>
            ))}
          </div>
          <div className={styles.info}>
            <h3>INFORMATION</h3>
            <span>Who we are </span>
            <span>Contact Us</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Refund Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className={styles.emailUs}>
            <h3>EMAIL US</h3>
            <p>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals
            </p>
            <div className={styles.inputContainer}>
              <Mail color="white" className={styles.mailIcon} />
              <input
                type="text"
                className={styles.inputs}
                placeholder="enter your email.."
              />
            </div>
          </div>
        </div>
        <div className={styles.mobileWrapper}>
          <div className={styles.popCont}>
            {popularLinks.map((item) => (
              <div key={item?.id}>
                <div
                  className={styles.popTitle}
                  onClick={() => toggleAccordion(item?.id)}
                >
                  {item?.title}
                  {activeAccordion ? (
                    <span>
                      <ChevronDown />
                    </span>
                  ) : (
                    <span>
                      <ChevronUp />
                    </span>
                  )}
                </div>
                {activeAccordion === item.id && (
                  <ul className="accordion-content">
                    {item.content.map((link) => (
                      <li key={link?.label}>
                        <a href={link?.link}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={styles.MobileContacts}>
            {contacts.map((item) => (
              <div key={item?.id}>
                <div
                  className={styles.contactLinks}
                  onClick={() => toggleAccordion2nd(item.id)}
                >
                  {item?.title}{" "}
                  {activeAccordion2nd ? (
                    <span>
                      <ChevronDown />
                    </span>
                  ) : (
                    <span>
                      <ChevronUp />
                    </span>
                  )}
                </div>
                {activeAccordion2nd === item.id && (
                  <ul className="accordion-content">
                    {item?.content?.map((link) => (
                      <li key={link.label}>
                        <a href={link.link}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className={styles.emailUs}>
            <h3>EMAIL US</h3>
            <p>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals
            </p>
            <div className={styles.inputContainer}>
              <Mail color="white" className={styles.mailIcon} size={20} />
              <input
                type="text"
                className={styles.inputs}
                placeholder="enter your email.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
