import { useContext, useState } from "react"
import { Context } from "../context"
import LoginWrapper from "../components/LoginWrapper"

const RequiredSignIn = ()=>{


    return (
        <LoginWrapper>
            <div>
                <h1>You need to be loggedin to view this page</h1>
            </div>
        </LoginWrapper>
        )
}

export default RequiredSignIn