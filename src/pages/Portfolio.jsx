import Header from "../components/Header"
import Repos from "../components/Repos"
import portfolio from '../assets/woman-reading-book.svg'
import styles from '../styles/pages/portfolio.module.css'


const Portfolio = () => {
  return (
    <>
      <Header 
        title='Conheça os meus projetos'
        image={portfolio} 
      />

      <div className={styles.Container}>

      <h1>Meus Repositórios do GitHub</h1>
<Repos />
      </div>

    </>
   
  )
}

export default Portfolio


