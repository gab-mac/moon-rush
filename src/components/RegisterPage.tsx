import { IonButton, IonContent, IonImg, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react'

export const RegisterPage = () => {
  return (
    <IonPage>
      <IonContent color='primary' scrollY={false} className='ion-padding'>
        <IonItem className='login-input-item'>
          <IonLabel position='floating'>Username</IonLabel>
          <IonInput placeholder='Enter your username' type='text'></IonInput>
        </IonItem>
        <IonItem className='login-input-item'>
          <IonLabel position='floating'>Password</IonLabel>
          <IonInput placeholder='Enter your password' type='password'></IonInput>
        </IonItem>
        <IonButton className='login-button' href='/' shape='round' size='large' expand='full' color='secondary'>Register</IonButton>
      </IonContent>
    </IonPage>
  )
}