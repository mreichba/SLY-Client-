import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenServices from '../../Helpers/TokenService'
//if auth token present then redirects to user home page, else only shows public route components
export default function PublicRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenServices.hasAuthToken()
          ? <Redirect to={'/Dashboard'} />
          : <Component {...props} {...componentProps} />
      )}
    />
  )
}
