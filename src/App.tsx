/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

import {
  IonApp,
  setupIonicReact,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { DashBoardPage } from './components/DashBoardPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={DashBoardPage} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
