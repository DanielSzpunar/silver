import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

// Import MDXRenderer to... well, render mdx
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Replaced all occurrences of 'markdownRemark' with 'mdx'
// And also, I replaced html with body, since that's what the MDXRenderer wants
export const query = graphql`
query (
    $slug: String!
  ){
    mdx (
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
      body
    }
  }`
  
/*Below head we inserted <TemplateHead /> which was causing issues. We will return to this at a later
date, to solve this issue. <TemplateHead /> was nested below <Head /> and <h1> tag*/
const Blog = (props) => {

	// Use MDXRenderer instead of dangerouslySetInnerHTML
    return (
        <Layout>
          <Head 
            title={props.data.mdx.frontmatter.title} descriptionContent={props.data.mdx.frontmatter.description} />
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <p>{props.data.mdx.frontmatter.date}</p>
			<MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </Layout>
    )
}
export default Blog