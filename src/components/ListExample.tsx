import { IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'

interface ListExampleProps {
    numItems: number;
}

export const ListExample: React.FC<ListExampleProps> = ({ numItems }) => {
    const list = Array.from({ length: numItems }, (_, i) => i + 1)

    return (
        <IonList>
            {list.map((v, index) => <IonItem key={index} style={{ "--inner-padding-end": 0 }} lines={index === numItems - 1 ? "none" : "inset"}>
                <IonLabel >C{index + 1}</IonLabel>
                <IonLabel slot="end">{v}</IonLabel>
            </IonItem>)}


        </IonList>
    )
}
