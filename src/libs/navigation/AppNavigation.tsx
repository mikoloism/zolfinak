import { IonTabBar, IonIcon, IonTabButton } from '@ionic/react';
import { albumsOutline, appsOutline, settingsOutline } from 'ionicons/icons';

export function AppNavigation() {
  return (
    <IonTabBar dir="ltr" slot="bottom">
      <IonTabButton href="/home" tab="home">
        <IonIcon aria-hidden="true" icon={appsOutline} />
      </IonTabButton>
      <IonTabButton href="/daily" tab="daily">
        <IonIcon aria-hidden="true" icon={albumsOutline} />
      </IonTabButton>
      <IonTabButton href="/settings" tab="settings">
        <IonIcon aria-hidden="true" icon={settingsOutline} />
      </IonTabButton>
    </IonTabBar>
  )
}
