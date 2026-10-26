import product from '../product.js'

function Price() {
  const formattedPrice = new Intl.NumberFormat('en-NG').format(product.price)

  return <p className="product-price">₦{formattedPrice}</p>
}

export default Price