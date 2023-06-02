import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText } from '@ionic/react';
import React, { useState } from 'react';
import "./DashboardContainer.css";
import { arrowBack } from 'ionicons/icons';

export interface ClickableCardProps {
    name: string;
    value: string;
    units: string
}

export const ClickableCard: React.FC<ClickableCardProps> = ({ name, value, units }) => {
    const [input, setInput] = useState(value);
    const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
    console.log(keyboardOpen)

    const modalCallback = (val?: number) => {
        setKeyboardOpen(false);
        val && setInput(val + "");
    }

    return (
        <IonCard mode="ios" className="custom-card" onClick={() => setKeyboardOpen(true)}>
            <IonCardHeader mode="ios" >
                <IonCardSubtitle mode="ios" style={{ paddingTop: 10 }}><IonText style={{ fontSize: 20, fontWeight: 1 }}>{name}</IonText></IonCardSubtitle>
                <IonCardTitle mode="ios">
                    {input} <IonText color="medium" style={{ fontSize: 14, fontWeight: 1 }}>{units}</IonText>
                </IonCardTitle>
            </IonCardHeader>

            <IonButton slot="end">
                <IonButton><IonIcon icon={arrowBack} /></IonButton>                
            </IonButton>

        </IonCard>
    )
}
