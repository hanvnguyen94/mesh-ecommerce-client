import React, { Fragment } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Checkout from './../Checkout/Checkout'
// import Checkout from './componets/Checkout/Checkout'
import { withRouter } from 'react-router-dom'

const PUBLIC_KEY = 'pk_test_51IEGu1Ghx9lBEd2LFESgL6KMB8xKyKyXxLakZS8quq7Jw4tCG6z9YWnf4QTgpYrD0tuA0NggB4YtkMVlfHi2Iw6N001yeVRaGb'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = (props) => {
  const { product } = props.location.state
  return (
    <Elements stripe={stripeTestPromise}>
      <Fragment>
        <h2>{ product.name }</h2>
        <p>{ product.price }</p>
        <img style={{ width: '20%', height: '20%' }} src={ product.pictureUrl } />
      </Fragment>
      <Checkout />
    </Elements>
  )
}

export default withRouter(Stripe)
