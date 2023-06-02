import { IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'
import "./ListExample.css"
import { TableCard } from './TableCard';

export interface ListCardProps {
    name: string;
    numItems: number;
}

export const ListCard: React.FC<ListCardProps> = ({ numItems, name }) => {
    const list = Array.from({ length: numItems }, (_, i) => i + 1)

    return (
        <TableCard name={name} >
            <IonList style={{ marginTop: -15, maxHeight: 210, overflowY: "auto" }} class="rpi-list" >
                {list.map((v, index) => <IonItem key={index} lines={index === numItems - 1 ? "none" : "inset"} className="rpi-item">
                    <IonLabel class="no-ion-margin">VAL {index + 1}</IonLabel>
                    <IonLabel class="no-ion-margin" slot="end">{v}</IonLabel>
                </IonItem>)}
            </IonList>
        </TableCard>
    )
}
