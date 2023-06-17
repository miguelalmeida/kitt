import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText, useIonViewWillLeave } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import mqttInstance from '../api/Mqtt';
import "./DashboardContainer.css";
import { KeyboardModal } from './keyboard/KeyboardModal';

export interface ClickableCardProps {
    name: string;
    topic: string;
    value: string;
    units: string
}

export const ClickableCard: React.FC<ClickableCardProps> = ({ name, value, units, topic }) => {
    const [input, setInput] = useState(value);
    const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

    useEffect(() => {
        mqttInstance.subscribe(topic, function (err) {
            err ? console.log(err) : console.log("Subscribed to topic: ", topic);
        })

        mqttInstance.on('message', function (topic, message) {
            setInput(message.toString())
        })
    }, [name])

    useIonViewWillLeave(() => {
        mqttInstance.unsubscribe(topic);
    });

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

            {keyboardOpen && (
                <KeyboardModal isOpen={keyboardOpen} name={name} resultCallback={modalCallback} />
            )}

        </IonCard>
    )
}
function ionViewWillLeave() {
    throw new Error('Function not implemented.');
}

