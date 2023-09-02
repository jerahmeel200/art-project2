"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { navLinks, socioIcons } from "../data";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSetTrue = () => {
    setShowMobileNav(true);
  };

  const handleSetFalse = () => {
    setShowMobileNav(false);
  };

  const headerStyle =
    router.pathname === "/" ? styles.headerTransparent : styles.headerWhite;
  const headerTitle =
    router.pathname === "/" ? styles.headerTitleWhite : styles.headerTitleBlack;
  // const headerIcon = router.pathname === "/" ? styles.headerIconWhite : styles.headerIconBlack;
  // const headerLogo = router.pathname === "/" ? styles.headerLogoWhite : styles.headerLogoBlack;

  // Define header style based on the current route

  // const headerTitle = {
  //   color: router.pathname === "/" ? "white" : "black",
  // };
  // const headerIcon = {
  //   color: router.pathname === "/" ? "white" : "black",
  // };
  // const headerLogo = {
  //   color: router.pathname === "/" ? "white" : "black",
  // };
  return (
    <>
      <div className={`${styles.container} ${headerStyle}`}>
        <div className="main">
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.linkList}>
              {navLinks.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`${styles.links} ${headerTitle}`}
                  // style={headerTitle}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={styles.left}>
              <button style={{ background: "none" }}>
                <Search strokeWidth={2} size={30} />
              </button>
              <button className={styles.menu} onClick={handleSetTrue}>
                <Menu strokeWidth={2} />
              </button>
              <button>
                <ShoppingCart strokeWidth={2} size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className={styles.mobileContainer}>
          {showMobileNav && (
            <div className={styles.navMobile}>
              <button className={styles.cancelBtn} onClick={handleSetFalse}>
                <X strokeWidth={2} color="black" size={30} />
              </button>
              <div className={styles.mobileLinkCont}>
                {navLinks.map((item, index) => (
                  <Link
                    onClick={handleSetFalse}
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
      </div>
    </>
  );
}

export default Header;
