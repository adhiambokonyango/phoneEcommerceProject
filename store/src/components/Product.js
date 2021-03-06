import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'

class Product extends Component{
render(){
const {id, title, img, price, inCart} = this.props.product
return(
<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
<div className="card">
<div className="img-container p-5" onClick={() => console.log('hello')}>
<Link to='/details'>
<img src={img} alt="product" className="card-img-top" />
</Link>
<button className="cart-btn" disabled={inCart?true:false}
onClick={() => {console.log('hello')}}>{inCart? (<p className="text-capitalized mb-0" disabled>inCart</p>):
(<i className="fas fa-cart-plus" />)}
</button>
</div>
<div className="card-footer d-flex justify-content-between">
<p className="align-self-center mb-0">
{title}
</p>
<h5 className=""
</div>
</div>
</ProductWrapper>
)
}
}

const ProductWrapper = styled.div`

`

export default Product