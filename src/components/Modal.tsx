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
  IonNote,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

interface IModalProps {
  modalState: boolean;
  setModalState: Function;
};

export const Modal: FC<IModalProps> = ({modalState, setModalState}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const distanceInput = useRef<HTMLIonInputElement>(null);
  const timeInput = useRef<HTMLIonInputElement>(null);

  function setDismissErrorNotification() {
    const notificationTime = 4000;

    setTimeout(() => {
      distanceInput.current?.parentElement?.classList.remove('ion-invalid')
      timeInput.current?.parentElement?.classList.remove('ion-invalid')
    }, notificationTime)
  }

  function confirm() {
    if(!distanceInput.current?.value || !timeInput.current?.value){
      // raise notification error for empty fields
      distanceInput.current?.parentElement?.classList.add('ion-invalid')
      timeInput.current?.parentElement?.classList.add('ion-invalid')
      setDismissErrorNotification()
      return
    }
    const distance = distanceInput.current.value.toString()
    const time = timeInput.current.value.toString().replace(/[^0-9]/g, ':') // Replace any separator for a ':'

    if(!/^([0-9]{3,6})$/.test(distance)){ // Duration should have between three and six digits
      //raise notification error for distance match
      distanceInput.current?.parentElement?.classList.add('ion-invalid')
      setDismissErrorNotification()
      return
    }

    if(!/^([0-9]{1,3}):([0-9]{2})$/.test(time)){ //Time spent should have one to three digits, then a ':', and exactly two more digits
      //raise notification error for time match
      timeInput.current?.parentElement?.classList.add('ion-invalid')
      setDismissErrorNotification()
      return
    }
    
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
            <IonButton fill='outline' color="warning" onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Today's registry</IonTitle>
          <IonButtons slot="end">
            <IonButton fill='outline' color="success" strong={true} onClick={() => confirm()}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" className="ion-padding">
        <IonItem color="primary">
          <IonLabel position="stacked">Distance</IonLabel>
          <IonInput ref={distanceInput} type="text" />
          <IonNote slot="error">Invalid distance</IonNote>
        </IonItem>
        <IonItem color="primary">
          <IonLabel position="stacked">Time Spent</IonLabel>
          <IonInput ref={timeInput} type="text" />
          <IonNote slot="error">Invalid time</IonNote>
        </IonItem>
      </IonContent>
    </IonModal>
  );
}