import { useState, useEffect } from "react"
import Axios from 'axios'
import { ArrowBendDoubleUpRight } from "phosphor-react"
import styles from '../styles/components/repos.module.css'

function Repo (){
    const [reposit, setRepositories] = useState([])
    const url = "https://api.github.com/users/petramelissa/repos"

    useEffect(() => {
        async function getRepor() {
            const response = await Axios.get(url)
            setRepositories(response.data)
            console.log(response.data)  
        } 
        getRepor()
}, [])

    return(

        <div className={styles.cards}>
        {reposit.map((repos) =>{
            return(
              <div className={styles.rep}>
                <h3>{repos.name}</h3>
                <p>{repos.language}</p>
                <a href={repos.html_url}> <ArrowBendDoubleUpRight size={18} />                
                </a>
              </div> 
              )

        })} 

    </div>

)
}

export default Repo
