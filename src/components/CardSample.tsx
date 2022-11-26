import { FC } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ICardSampleProps{
  index: number
}

export const CardSample: FC<ICardSampleProps> = ({index}) => {
  return (
    <IonCard color="secondary">
      <IonCardHeader>
        <IonCardTitle>Card Title {index}</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
  );
}