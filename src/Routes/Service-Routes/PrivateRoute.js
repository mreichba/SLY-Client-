import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenServices from '../../Helpers/TokenService'
//renders private routes if auth token present or redirects to login page
export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenServices.hasAuthToken()
          ? <Component {...props} {...componentProps} />
          : <Redirect
            to={{
              pathname: '/Login',
              state: { from: componentProps.location }
            }}
          />
      )}
    />
  )
}
