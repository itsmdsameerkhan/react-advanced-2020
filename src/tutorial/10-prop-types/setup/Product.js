import React from 'react';
// import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({name, price, image}) => {
  const url = image && image.url
  return <article className='product'>
    <img src={url || defaultImage} alt={name || 'no image'} />
    <h4>{name || 'No name'}</h4>
    <p>${price|| 0.00}</p>
  </article>;
};

// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.object.isRequired,
//   price: PropTypes.number.isRequired
// }

// Product.defaultProps = {
//   name: 'No name',
//   image: defaultImage,
//   price: 0.00
// }

export default Product;
