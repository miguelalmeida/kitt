import React from 'react';
import './ExploreContainer.css';
import { IonCard, IonCol, IonRow } from '@ionic/react';
import { ClickableCard } from './ClickableCard';
import { TableCard } from './TableCard';
import { ListExample } from './ListExample';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <IonRow>
        <IonCol>
          <ClickableCard name="H2 Production Setpoint" value="1.631" />
        </IonCol>

        <IonCol>
          <ClickableCard name="H2O Production Setpoint" value="1.631" />
        </IonCol>


      </IonRow>

      <IonRow>
        <IonCol>
          <TableCard name="HEVO CELL VOLTAGE" >
            <ListExample numItems={8} />
          </TableCard>
        </IonCol>

        <IonRow>
          <IonCol><TableCard name="HEVO CELL VOLTAGE" ><ListExample numItems={2} /></TableCard></IonCol>
          <IonCol><TableCard name="HEVO CELL VOLTAGE" ><ListExample numItems={2} /></TableCard></IonCol>
        </IonRow>

        <IonRow>
          <IonCol><TableCard name="HEVO CELL VOLTAGE" ><ListExample numItems={3} /></TableCard></IonCol>
          <IonCol><TableCard name="HEVO CELL VOLTAGE" ><ListExample numItems={3} /></TableCard></IonCol>
        </IonRow>


      </IonRow>
    </>
  );
};

export default ExploreContainer;
