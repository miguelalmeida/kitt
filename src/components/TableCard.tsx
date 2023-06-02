import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import React from 'react';
import "./DashboardContainer.css";

interface TableCardProps {
    name: string;
    children:any;
}

export const TableCard: React.FC<TableCardProps> = ({name, children}) => {
    return (
        <IonCard className="custom-card" mode="ios">
            <IonCardHeader>{name}</IonCardHeader>
            <IonCardContent>
                {children}
            </IonCardContent>
        </IonCard>
    )
}
