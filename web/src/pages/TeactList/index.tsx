import React from "react";

import PageHeader from "../../components/PageHeader";
import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
// import { Container } from './styles';

const TeactList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div> 
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
       <TeacherItem/>
      </main>
    </div>
  );
};

export default TeactList;
