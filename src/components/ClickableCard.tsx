import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react'
import React from 'react'

interface ClickableCardProps {
    name: string;
    value: string;
}

export const ClickableCard: React.FC<ClickableCardProps> = ({ name, value }) => {
    const handleOnClick = () => { return; }

    return (
        <IonCard button={true} onClick={handleOnClick} href="" style={{marginBottom: 0}}>
            <IonCardHeader>
                <IonCardSubtitle style={{ paddingTop: 10 }}><IonText style={{ fontSize: 20, fontWeight: 1 }}>{name}</IonText></IonCardSubtitle>
                <IonCardTitle>
                    {value} <IonText color="medium" style={{ fontSize: 14, fontWeight: 1 }}>m3/min</IonText></IonCardTitle>
            </IonCardHeader>

        </IonCard>
    )
}
