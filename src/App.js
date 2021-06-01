import './App.css';
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FadeIn from 'react-fade-in'
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App">
      <FadeIn>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
        <AboutSection />
          </Route>
        </Switch>
      </BrowserRouter>
      <SkillSection />
      </FadeIn>
    </div>
  );
}

export default App;
