import { Provider } from "../context"
import '../public/styles/pages/login.css'
import 'tailwindcss/tailwind.css'
import '../public/styles.css'



const myApp = ({Component, pageProps})=>{

    return(
        <Provider>
            <Component  {...pageProps}/>
        </Provider>
    )
}

export default myApp