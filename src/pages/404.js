import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const NotFound = () => {
    return (
        <Layout>
            <Head title='404' />
            <h1>Sorry, page not found.</h1>
            <p><Link to={'/'}>Back to home?</Link></p>
        </Layout>
    )
}
export default NotFound