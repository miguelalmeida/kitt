import { IonCol, IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import React from 'react';
import './Page.css';
import PageContainer from './PageContainer';

type SettingsItemProps = {
  label: string;
  detail: string;
}
const Settings: React.FC = () => {
  const settingsItems: SettingsItemProps[] = [
    { label: "Equipment name", detail: "HMI 01" },
    { label: "Network Configurations", detail: "Active" },
    { label: "Locations Settings", detail: "PT" },
    { label: "Touch Screen", detail: "Active" }
  ]

  return (
    <PageContainer name="Settings">
      <IonRow class="ion-padding">
        <IonCol>
          <IonList class="round-edges">
            {settingsItems.map((setting: SettingsItemProps, index: number) => <SettingsItem key={index} label={setting.label} detail={setting.detail} />)}
          </IonList>
        </IonCol>
      </IonRow>


    </PageContainer>
  );
};

export default Settings;

const SettingsItem: React.FC<SettingsItemProps> = ({ label, detail }) => {
  return (
    <IonItem button lines="none" detail={true} >
      <IonLabel>{label}</IonLabel>
      <IonLabel slot="end" color="medium">{detail}</IonLabel>
    </IonItem >
  )
}