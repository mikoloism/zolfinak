import { IonIcon, IonLabel } from '@ionic/react';
import {
  archiveOutline,
  basketOutline,
  beerOutline,
  ellipsisHorizontalOutline,
  fishOutline,
  magnetOutline,
  medkitOutline,
} from 'ionicons/icons';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { HubSpokeGrid } from '../../components/HubSpokeGrid';
import { HubSpokeItem } from '../../components/HubSpokeItem';
import { Pane, PaneTitle } from './Pane';

function HubSpokeComponent({ t }: WithTranslation) {
  return (
    <Pane>
      <PaneTitle>
        <IonLabel>{t('home:hubspoke_title')}</IonLabel>
        <IonIcon icon={ellipsisHorizontalOutline} />
      </PaneTitle>
      <HubSpokeGrid>
        <HubSpokeItem href="/settings" icon={magnetOutline}>
          Surprise me!
        </HubSpokeItem>

        <HubSpokeItem href="/settings" icon={basketOutline}>
          Groceries
        </HubSpokeItem>

        <HubSpokeItem href="/settings" icon={fishOutline}>
          Meat & Fish
        </HubSpokeItem>

        <HubSpokeItem href="/settings" icon={beerOutline}>
          Fruits & Vegetables
        </HubSpokeItem>

        <HubSpokeItem href="/settings" icon={medkitOutline}>
          Health & Medicines
        </HubSpokeItem>

        <HubSpokeItem href="/settings" icon={archiveOutline}>
          Send Packages
        </HubSpokeItem>
      </HubSpokeGrid>
    </Pane>
  );
}

export const HubSpoke = withTranslation()(HubSpokeComponent);
