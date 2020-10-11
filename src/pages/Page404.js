import React from 'react'
import { Redirect } from 'react-router-dom'

const Page404 = () => {
    return (
        <>
           <h1>Page not found!</h1>
           <Redirect to="/">Take me back home!</Redirect>
        </>
    )
}

export default Page404
