const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
  const URL = `https://oak-tree-mobility.myshopify.com/api/2021-07/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      
      if(response) {
        return response.json();
      }
    })
  
    return data
  } catch (error) {
    console.log(error)
    throw new Error("Products not fetched")
  }
}

// GET all products within the store : limited to 250 products
export async function getAllProducts() {
  const query = 
  `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []
  
  return slugs
}

// GET all products within the specified collection : limited to 25 products
export async function getProductsInCollection(handle) {
  const query = `
  { 
    collectionByHandle(handle: "${handle}") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            productLeaf: metafield(namespace: "product", key: "leaf") {
              value
              type
            }
            productURL: metafield(namespace: "product", key: "url") {
              value
              type
            }
            productSwatch: metafield(namespace: "product", key: "swatch") {
              value
              type
            }
            productSubheading: metafield(namespace: "product", key: "subheading") {
              value
              type
            }
            productType: metafield(namespace: "product", key: "type") {
              value
              type
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const allProducts = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : [];

  return allProducts
}

// GET One Product based on parsed handle name : Used on product pages
export async function getProduct(handle) { 

  const query = `
  {
    productByHandle(handle: "${handle}") {
    	collections(first: 1) {
      	edges {
          node {
            products(first: 5) {
              edges {
                node {
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  totalInventory
                  images(first: 5) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
    	}
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            availableForSale
            priceV2 {
              amount
            }
          }
        }
      }
      productLeaf: metafield(namespace: "product", key: "leaf") {
        value
        type
      }
      productURL: metafield(namespace: "product", key: "url") {
        value
        type
      }
      productSwatch: metafield(namespace: "product", key: "swatch") {
        value
        type
      }
      productSubheading: metafield(namespace: "product", key: "subheading") {
        value
        type
      }
      productType: metafield(namespace: "product", key: "type") {
        value
        type
      }
      productTitle: metafield(namespace: "content", key: "product_title") {
        value
        type
      }
      productParagraph: metafield(namespace: "content", key: "product_paragraph") {
        value
        type
      }
      lifestyleImageChair: metafield(namespace: "image", key: "chair_lifestyle") {
        value
        type
      }
      chairRisingImage: metafield(namespace: "image", key: "chair_rising") {
        namespace
        }
      chairLegLiftImage: metafield(namespace: "image", key: "chair_leg_lift") {
        value
        type
      }
      lifestyleImageBed: metafield(namespace: "image", key: "bed_lifestyle") {
        value
        type
      }
      singleBedImage: metafield(namespace: "image", key: "bed_single") {
        value
        type
      }
    }
  }`

  const response = await ShopifyData(query)

  const product = response.data.productByHandle ? response.data.productByHandle : []

  return product
}
