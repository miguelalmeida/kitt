import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react';
import React from 'react';

import { carSportOutline, homeOutline, notificationsOutline, settingsOutline, speedometerOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    icon: homeOutline
  },
  {
    title: 'Dashboard',
    url: '/page/Dashboard',
    icon: speedometerOutline
  },
  {
    title: 'Drive',
    url: '/page/Drive',
    icon: carSportOutline
  },
  {
    title: 'Notifications',
    url: '/page/notifications',
    icon: notificationsOutline
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" side="start" >
      <IonContent style={{height: "100%"}}>

        <IonList id="inbox-list">
          <IonListHeader>
          <IonImg alt="logo" class="app-logo" src="assets/logo-color.png" />

          </IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} >
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" icon={appPage.icon} size="large" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>

              </IonMenuToggle>
            );

          })}
        </IonList>

        <IonMenuToggle key={"settings"} autoHide={false} class="settings-btn">
          <IonItem lines="none" detail={false} routerLink={'/settings'} routerDirection="none" className={location.pathname === "/settings" ? 'selected' : ''} >
            <IonIcon aria-hidden="true" slot="start" icon={settingsOutline} size="large" />
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonMenuToggle>


      </IonContent>


    </IonMenu>
  );
};

export default Menu;
