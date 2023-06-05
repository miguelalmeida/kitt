import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import DashboardContainer from '../components/DashboardContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="light" >
          <IonText color="medium">HEVO 01</IonText>
          <IonButtons slot="start">
            <IonMenuButton color="dark" />
          </IonButtons>

          <IonButtons slot='end'>
            <IonToggle mode="ios" checked={true} style={{ marginRight: 20 }}></IonToggle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light">
        <DashboardContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
