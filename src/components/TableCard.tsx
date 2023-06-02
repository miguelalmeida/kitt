import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react'
import React from 'react'

interface TableCardProps {
    name: string;
    children:any;
}

export const TableCard: React.FC<TableCardProps> = ({name, children}) => {
    return (
        <IonCard>
            <IonCardHeader>{name}</IonCardHeader>
            <IonCardContent>
                {children}
            </IonCardContent>
        </IonCard>
    )
}
