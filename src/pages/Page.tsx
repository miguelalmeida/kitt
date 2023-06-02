import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="white">
          <IonText color="medium">HEVO 01</IonText>
          <IonButtons slot="start">
            <IonMenuButton color="dark"/>
          </IonButtons>
          
          <IonButtons slot='end'>
              <IonToggle checked={true}></IonToggle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>        
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
