import React from 'react';
import "./styles.css"
// import { Container } from './styles';
import whatImg from "../../assets/images/icons/whatsapp.svg"

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/57202496?s=460&u=048b38be013758df274a367776581ae0f80ddeb3&v=4"
        alt="Otto"
      />
      <div>
        <strong>Otto</strong>
        <span>Programação</span>
      </div>
    </header>
    <p>
      Entusiata das melhores tecnologias de programação avançada.
      <br/>
      Apaixonados por dificultar o aprendizado das pessoas e mudar a vida delas.
    </p>

    <footer>
      <p>Preço por hora </p>
      <strong>R$ 50,00</strong>
      <button type="button">
        <img src={whatImg} alt="Entrar em contato"/>
        Entrar em contato
      </button>
    </footer> 
  </article>
  )
}

export default TeacherItem;