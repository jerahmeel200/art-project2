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

  // Define header style based on the current route
  const headerStyle = {
    backgroundColor: router.pathname === "/" ? "none" : "white",
    color: router.pathname === "/" ? "gray" : "black",
  };

  const headerTitle = {
    color: router.pathname === "/" ? "white" : "black",
  };
  const headerIcon = {
    color: router.pathname === "/" ? "white" : "black",
  };
  const headerLogo = {
    color: router.pathname === "/" ? "white" : "black",
  };
  return (
    <>
      <div className={styles.container} style={headerStyle}>
        <div className="main">
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.linkList}>
              {navLinks.map((item, index) => (
                <Link
                  style={headerTitle}
                  key={item.id}
                  href={item.link}
                  className={styles.links}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={styles.left}>
              <button style={{ background: "none" }}>
                <Search strokeWidth={2} style={headerIcon} size={30} />
              </button>
              <button className={styles.menu} onClick={handleSetTrue}>
                <Menu style={headerIcon} strokeWidth={2} />
              </button>
              <button>
                <ShoppingCart strokeWidth={2} style={headerIcon} size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className={styles.mobileContainer}>
          {showMobileNav && (
            <div className={styles.navMobile}>
              <button onClick={handleSetFalse}>
                <X strokeWidth={2} color="black" size={30} />
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
      </div>
    </>
  );
}

export default Header;
