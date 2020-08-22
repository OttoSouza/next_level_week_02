import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeactList from './pages/TeactList';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/study" component={TeactList}/>
      <Route exact path="/give-classes" component={TeacherForm}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;