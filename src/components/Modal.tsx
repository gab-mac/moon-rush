import { useRef, FC } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

interface IModalProps {
  modalState: boolean;
  setModalState: Function;
};

export const Modal: FC<IModalProps> = ({modalState, setModalState}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const distanceInput = useRef<HTMLIonInputElement>(null);
  const durationInput = useRef<HTMLIonInputElement>(null);

  function confirm() {
    //check inputs
    // modal.current?.dismiss(input.current?.value, 'confirm');
    modal.current?.dismiss()
  }

  function onModalCloses(ev: CustomEvent<OverlayEventDetail>) {
    setModalState(false)
  }

  return (
    <IonModal ref={modal} isOpen={modalState} onDidDismiss={(ev) => onModalCloses(ev)}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Today's registry</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" className="ion-padding">
        <IonItem  color="primary">
          <IonLabel position="stacked">Distance</IonLabel>
          <IonInput ref={distanceInput} type="text" placeholder="2200" />
        </IonItem>
        <IonItem  color="primary">
          <IonLabel position="stacked">Duration</IonLabel>
          <IonInput ref={durationInput} type="text" placeholder="22:22" />
        </IonItem>
      </IonContent>
    </IonModal>
  );
}