import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer s3-aJ39aso-7OTD7_OaZ7c7kanl0u4ipQdM6qOYlr-NYvUqwqP3SKWQ2OwX0lj7mvUHP5p_IioFn_IXD8nxyP9Dlkzq0GlUd7MBo6sv99GD8iR71Y8rEPw7UMfHqXXYx'
    }
})



