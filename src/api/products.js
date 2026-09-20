import client from './client'

export const getProducts = () => client.get('/data/products.json').then((res) => res.data)

export const getProduct = async (id) => {
    const products = await getProducts()
    return products.find((product) => product.id === Number(id)) || null
}

export default { getProducts, getProduct }