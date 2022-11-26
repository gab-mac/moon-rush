import { FC } from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

interface IFloatingButtonProps {
  setIsOpen: Function
}

export const FloatingButton: FC<IFloatingButtonProps> = ({setIsOpen}) => {
  return (
    <IonFab slot='fixed' horizontal='end' vertical='bottom'>
      <IonFabButton color="tertiary" onClick={() => setIsOpen(true)}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
