module.exports = {
  siteName: 'Gridsome + Shopify 😍',
  templates: {
    Product: [
      {
        path: `/products/:handle`,
        component: './src/templates/ShopifyProduct.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: `https://${process.env.SHOPIFY_STOREFRONT}.myshopify.com/api/2019-07/graphql.json`,
        fieldName: 'shopify',
        typeName: 'shopifyTypes',
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN
        }
      }
    }
  ]
}
