"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks, socioIcons } from "../data";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleSetTrue = () => {
    setShowMobileNav(true);
  };

  const handleSetFalse = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.linkList}>
            {navLinks.map((item, index) => (
              <Link key={item.id} href={item.link} className={styles.links}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={styles.left}>
            <button style={{ background: "none" }}>
              <Search strokeWidth={1} color="white" size={30} />
            </button>
            <button className={styles.menu} onClick={handleSetTrue}>
              <Menu strokeWidth={1} color="white" size={30} />
            </button>
            <button>
              <ShoppingCart strokeWidth={1} color="white" size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        {showMobileNav && (
          <div className={styles.navMobile}>
            <button onClick={handleSetFalse}>
              <X strokeWidth={1} color="black" size={30} />
            </button>
            <div className={styles.mobileLinkCont}>
              {navLinks.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={styles.mobileLinks}
                >
                  {item.title}
                </Link>
              ))}
              <div className={styles.socials}>
                {socioIcons.map((item, index) => (
                  <div key={index} className={styles.socialsIcons}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
