import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonToggle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Page.css';

interface PageContainerProps {
    name: string;
    children: any;
}

const PageContainer: React.FC<PageContainerProps> = ({ name, children }) => {
    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar color="light" >
                    <IonText color="medium" class="ion-text-uppercase">{name}</IonText>
                    <IonButtons slot="start">
                        <IonMenuButton color="dark" />
                    </IonButtons>

                    <IonButtons slot='end'>
                        <IonToggle mode="ios" checked={true} style={{ marginRight: 20 }}></IonToggle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent color="light" >
                {children}
            </IonContent>
        </IonPage>
    );
};

export default PageContainer;