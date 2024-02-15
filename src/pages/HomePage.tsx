import { IonButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import React from 'react';
import { Trans, type WithTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { HubSpoke } from '../libs/hubspoke/mod';
import { I18nScope } from '../libs/i18n/mod';
import { Roller, withIonPageLayout, withPage, withTranslation } from '../libs/roll/mod';

const ToolbarButtion = styled(IonButton)`
  width: 2em;
  height: 2em;
  margin: 1em 1em;
  border-radius: 4pt;
  background-color: white;
`;

const Toolbar = (): JSX.Element => (
  <IonToolbar className="ion-padding">
    <IonButtons slot="end">
      <ToolbarButtion color="light">
        <IonIcon size="small" icon={personOutline} />
      </ToolbarButtion>
    </IonButtons>
    {/* TODO: add svg logo (mark + letter) */}
    <IonTitle>Zolfinak</IonTitle>
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
    <HubSpoke />
  </>
);

type Props = WithTranslation;

export default new Roller()
  .roll(withPage('/home'))
  .roll<WithTranslation>(withTranslation(I18nScope.HOME))
  .roll(withIonPageLayout('', { Toolbar, contentClassName: 'ion-padding' }))
  .around<Props>(HomePage);
