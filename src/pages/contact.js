import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const Contact = () => {
    return (
            <Layout>
                <Head title='Contact' descriptionContent='Contact SilverGoldPill on twitter, youtube or instagram.' />
                <h2>Contact</h2>
                <p>Back to the <Link to={'./'}>Home</Link> page.</p>
            </Layout>
    )
}
export default Contact