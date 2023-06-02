import { IonCol, IonRow } from '@ionic/react';
import React from 'react';
import { ClickableCard, ClickableCardProps } from './ClickableCard';
import '././DashboardContainer.css';
import { ListCard, ListCardProps } from './ListExample';
import { TableCard } from './TableCard';

const VALUE_CARD_DATA: ClickableCardProps[] = [
  { name: "Card Value 1", value: "1.2341", units: "m/2" },
  { name: "Card Value 2", value: "1.5341", units: "m/2" }
];

const LIST_CARD_DATA: ListCardProps[] = [
  { name: "Table Value 1", numItems: 10 },
  { name: "Table Value 2", numItems: 2 },
  { name: "Table Value 3", numItems: 2 },
  { name: "Table Value 4", numItems: 2 },
  { name: "Table Value 5", numItems: 2 },
  { name: "Table Value 6", numItems: 2 },
]

const DashboardContainer: React.FC = () => {

  return (
    <>
      <IonRow>
        <IonCol>
          <ClickableCard name={VALUE_CARD_DATA[0].name} value={VALUE_CARD_DATA[0].value} units={VALUE_CARD_DATA[0].units} />
        </IonCol>

        <IonCol>
          <ClickableCard name={VALUE_CARD_DATA[1].name} value={VALUE_CARD_DATA[1].value} units={VALUE_CARD_DATA[1].units} />
        </IonCol>

      </IonRow>

      <IonRow style={{ marginLeft: 10, marginRight: 10 }}>
        <IonCol><ListCard name={LIST_CARD_DATA[0].name} numItems={LIST_CARD_DATA[0].numItems} /></IonCol>

        <IonCol class="ion-no-padding ion-no-margin">
          <IonRow >
            <IonCol><ListCard name={LIST_CARD_DATA[1].name} numItems={LIST_CARD_DATA[1].numItems} /></IonCol>
          </IonRow>
          <IonRow class="ion-no-padding">
            <IonCol><ListCard name={LIST_CARD_DATA[2].name} numItems={LIST_CARD_DATA[2].numItems} /></IonCol>
          </IonRow>
        </IonCol>

        <IonCol>
          <IonRow>
            <IonCol><ListCard name={LIST_CARD_DATA[3].name} numItems={LIST_CARD_DATA[3].numItems} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><ListCard name={LIST_CARD_DATA[4].name} numItems={LIST_CARD_DATA[4].numItems} /></IonCol>
          </IonRow>
        </IonCol>

      </IonRow>
    </>
  );
};

export default DashboardContainer;

