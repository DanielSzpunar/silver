import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexPageStyles from './index-page.module.scss'
import Head from '../components/head'
import Img from 'gatsby-image'

// Changed all occurrences of 'allMarkdownRemark' to 'allMdx'
const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx 
            (sort: { fields: [frontmatter___date], order: DESC})
            {
                edges {
                    node {
                        frontmatter {
                            imageDescription
                            title
                            date
                            sentence
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 900, quality: 70){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)
    return (
        <Layout>
            <Head title='Home' descriptionContent="SilverGoldPill is a blog website focusing on news related to gold, silver, mining companies, and stacking precious metal coins, bars and bullion." keywordContent='gold, silver, precious metals, silver maple leaf, american silver eagle, chinese panda, perth mint, royal mint' />
            
            <ol className={indexPageStyles.posts}>
                {data.allMdx.edges.map((edge, index) => {
                    return (
                        <li className={indexPageStyles.post} key={index}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3 className={indexPageStyles.slugH3}>{edge.node.frontmatter.title}</h3>
                                <p className={indexPageStyles.slugSentence}>{edge.node.frontmatter.sentence}</p>
                                <p className={indexPageStyles.slugDate}>{edge.node.frontmatter.date}</p>
                            </Link>
                            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} alt={edge.node.frontmatter.imageDescription} />
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default IndexPage