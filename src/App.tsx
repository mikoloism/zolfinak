import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albumsOutline, appsOutline, settingsOutline } from 'ionicons/icons';
import React from 'react';
import { AppRouter } from './App.router';
import { I18nextProvider, initializeLanguageSettings } from './libs/i18n/mod';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import { initilizeThemeSettings } from './libs/themes/mod';
import './theme/variables.css';

setupIonicReact();
void initializeLanguageSettings();
void initilizeThemeSettings();

const App: React.FC = () => {
  return (
    <IonApp>
      <I18nextProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <AppRouter />
            </IonRouterOutlet>
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
          </IonTabs>
        </IonReactRouter>
      </I18nextProvider>
    </IonApp>
  );
};

export default App;
