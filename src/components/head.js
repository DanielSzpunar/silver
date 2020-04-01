import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
const Head = ({ title, descriptionContent }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
/*
<Helmet>
        title={`${title} | ${data.site.siteMetadata.title}`}
</Helmet>
*/
    return (
        <Helmet 
        title={`${title} | ${data.site.siteMetadata.title}`} 
        meta={[
            { name: 'description', content: descriptionContent },
          ]}
        />
       /*<script src="https://kit.fontawesome.com/abbd34d82e.js" crossorigin="anonymous"></script>*/
    )
}
export default Head