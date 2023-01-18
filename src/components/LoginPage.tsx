import { IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <IonPage>
      <IonContent color='primary' scrollY={false} className='ion-padding'>
        <IonImg className='login-logo' src='/assets/moon-rush-logo.svg' alt='logo' />
        <IonItem className='login-input-item'>
          <IonLabel position='floating'>Username</IonLabel>
          <IonInput placeholder='Enter your username' type='text'></IonInput>
        </IonItem>
        <IonItem className='login-input-item'>
          <IonLabel position='floating'>Password</IonLabel>
          <IonInput placeholder='Enter your password' type='password'></IonInput>
        </IonItem>
        <IonButton className='login-button' href='/' shape='round' size='large' expand='full' color='secondary'>Login</IonButton>
        <Link className='login-page-register-link' to='/register' color='danger'>Don't have an account? Sign Up</Link>
      </IonContent>
    </IonPage>
  )
}