import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) { frontmatter {
        title
        date
        description
      }
      html
    }
  }`
  
/*Below head we inserted <TemplateHead /> which was causing issues. We will return to this at a later
date, to solve this issue. <TemplateHead /> was nested below <Head /> and <h1> tag*/
const Blog = (props) => {
    return (
        <Layout>
          <Head 
            title={props.data.markdownRemark.frontmatter.title} descriptionContent={props.data.markdownRemark.frontmatter.description} />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html }}></div>
        </Layout>
    )
}
export default Blog