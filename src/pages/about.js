import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const About = () => {
    return(
        <Layout>
            <Head title='About' descriptionContent='SilverGoldPill is all about providing free unbiased information on everything related to silver and gold metals.' />
            <h2>About</h2>
            <p>About SilverGoldPill will go here.</p>
            <p>Try <Link to={'./contact'}>here</Link> to get in touch.</p>
        </Layout>
    )
}
export default About