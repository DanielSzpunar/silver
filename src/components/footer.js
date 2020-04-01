import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return(
        <div>
            <div className={footerStyles.divHrStyleTop}></div>
        <footer className={footerStyles.footer}>
            <p>© 2020 {data.site.siteMetadata.title}</p>
        </footer>
        
        </div>
    )
}
export default Footer