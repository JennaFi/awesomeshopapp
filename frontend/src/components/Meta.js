import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to AwesomeShop',
    keywords: 'fashion, haute couture, clothes, women, buy clothes',
    description: 'The best goods for reasonable prices'
}
export default Meta
