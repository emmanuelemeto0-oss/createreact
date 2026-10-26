import { useState } from 'react'
import product from '../product.js'

function Image() {
  const [imageFailed, setImageFailed] = useState(false)

  if (imageFailed) {
    return (
      <div className="product-image-fallback" role="img" aria-label="Wireless headphones image unavailable">
        <span>FORM 01</span>
        <small>Image unavailable</small>
      </div>
    )
  }

  return (
    <img
      className="product-image"
      src={product.image}
      alt={product.name}
      onError={() => setImageFailed(true)}
    />
  )
}

export default Image