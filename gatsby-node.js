const path = require('path')
const { paginate } =require('gatsby-awesome-pagination')
module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

	// Change 'MarkdownRemark' to 'Mdx'
    if(node.internal.type === 'Mdx') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //console.log(JSON.stringify(node,undefined, 4))
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
	const blogTemplate = path.resolve('./src/templates/blog.js')
	
	// Change query from 'allMarkdownRemark' to 'allMdx'
    const res = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
	`)
	
	// Change query from 'allMarkdownRemark' to 'allMdx' so that it matches the query
    res.data.allMdx.edges.forEach((edge) => {
        createPage({
            component:blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}