import { IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import {
  archiveOutline,
  basketOutline,
  beerOutline,
  ellipsisHorizontalOutline,
  fishOutline,
  magnetOutline,
  medkitOutline,
  personOutline,
} from 'ionicons/icons';
import { Trans, type WithTranslation } from 'react-i18next';
import { styled } from 'styled-components';

import { dayjs } from 'lib/date/mod';
import { I18nScope } from 'lib/i18n/mod';
import { Roller, withIonPageLayout, withPage, withTranslation } from 'lib/roll/mod';
import { HubSpokeGrid } from '../components/HubSpokeGrid';
import { HubSpokeItem } from '../components/HubSpokeItem';

const HubSpokeTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-weight: 700;
  text-transform: uppercase;

  & ion-label {
    font-size: small;
  }
`;

const HubSpokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em;
  row-gap: 1em;
`;

const HomeToolbar = (): JSX.Element => (
  <IonToolbar>
    <IonButtons slot="end">
      <IonButton
        color="light"
        style={{
          backgroundColor: 'white',
          borderRadius: '4pt',
          width: '2em',
          height: '2em',
          margin: '1em 1em',
        }}
      >
        <IonIcon icon={personOutline} size="small" />
      </IonButton>
    </IonButtons>
    <IonTitle>
      {dayjs().format('YYYY / MM / DD dd')}
    </IonTitle>
  </IonToolbar>
);

const HomePage: React.FC<Props> = ({ t }) => (
  <>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">
          <Trans i18nKey={'hero_title'} t={t} />
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonSearchbar placeholder={t('inline_search_placeholder')} />
    <HubSpokeWrapper>
      <HubSpokeTitle>
        <IonLabel>{t('hubspoke_title')}</IonLabel>
        <IonIcon icon={ellipsisHorizontalOutline} />
      </HubSpokeTitle>
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
    </HubSpokeWrapper>
  </>
);

type Props = WithTranslation;

export default new Roller()
  .roll(withPage('/home'))
  .roll<WithTranslation>(withTranslation(I18nScope.HOME))
  .roll(withIonPageLayout('', { Toolbar: HomeToolbar, contentClassName: 'ion-padding' }))
  .around<Props>(HomePage);
