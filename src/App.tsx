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
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from '@ionic/react';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { FloatingButton } from './components/FloatingButton';
import { CardSample } from './components/CardSample';

setupIonicReact();

const App: React.FC = () => {
  const [modalState, setModalState] = useState(false);
  const numberOfCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Moon Rush</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary" className="ion-padding">
          {numberOfCards.map(index => <CardSample index={index} key={index} />)}
          <Modal modalState={modalState} setModalState={setModalState} />
          <FloatingButton setIsOpen={setModalState} />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
