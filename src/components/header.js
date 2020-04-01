import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //     query {
  //         site {
  //             siteMetadata {
  //                 title
  //             }
  //         }
  //     }
  // `)
  return (
    <div className={headerStyles.headerContainer}>
    <div className={headerStyles.divIcon} style={{ color: "silver" }}>
          <a className={headerStyles.logoLinks} href="https://www.youtube.com">
            <AiFillYoutube size={40} />
          </a>
          <a
            className={headerStyles.logoLinks}
            href="https://twitter.com/silvergoldpill"
          >
            <AiOutlineTwitter size={40} />
          </a>
          <a
            className={headerStyles.logoLinks}
            href="https://www.instagram.com/silvergoldpill/"
          >
            <AiFillInstagram size={40} />
          </a>
        </div>
      <header className={headerStyles.header}>
        <div className={headerStyles.headerDiv}>
          <Link className={headerStyles.title} to={"/"}>
            <h1 style={{fontWeight:400}} className={headerStyles.headerH1}>SilverGoldPill.com</h1>
          </Link>
          <p className={headerStyles.titlePara}>Your trusted news source for precious metals.</p>
        </div>
        <div className={headerStyles.navIncludingAll}>
        <div className={headerStyles.divHrStyleTop}></div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={headerStyles.divHrStyleBottom}></div>
        </div>
      </header>
    </div>
  )
}
export default Header
