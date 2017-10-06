import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import currencyFormat from 'currency-formatter'
import { submit } from 'redux-form'
import { connect } from 'react-redux'

const config = {
  thousandsSeparator: ',',
  decimalSeparator: '.',
  decimalDigits: 2
}

export default connect()(({ pricePerYear: { value, currency }, dispatch }) => {
  const handlePrice = () => dispatch(submit('userForm'))
  return (
    <div>
      <Card>
        <CardContent>
          {currencyFormat.format(value, config)} - { currency }
        </CardContent>
        <CardActions>
          <Button raised color="primary" onClick={handlePrice}>Select</Button> 
        </CardActions>
      </Card>
    </div>
  )
})
