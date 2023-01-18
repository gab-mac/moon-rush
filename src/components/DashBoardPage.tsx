import {
  IonContent,
  IonPage,
} from '@ionic/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { FloatingButton } from './FloatingButton';
import { CardSample } from './CardSample';



export const DashBoardPage = () => {
  const [modalState, setModalState] = useState(false);
  const numberOfCards = [1, 2, 3];

  return (
    <IonPage>
      <IonContent color="primary" className="ion-padding">
        {numberOfCards.map(index => <CardSample index={index} key={index} />)}
        <Modal modalState={modalState} setModalState={setModalState} />
        <FloatingButton setIsOpen={setModalState} />
      </IonContent>
    </IonPage>
  )
}
