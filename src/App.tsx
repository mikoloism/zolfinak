import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';

/* Relative Imports */
import { initializeGlobalSetting } from 'lib/settings/global';
import { AppRouter } from './App.router';
import { I18nextProvider, initializeLanguageSettings } from 'lib/i18n/mod';
import { AppNavigation } from 'lib/navigation/mod';

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
import { initializeThemeSettings } from 'lib/themes/mod';
import './theme/variables.css';

setupIonicReact();
void initializeThemeSettings();
void initializeGlobalSetting();

const App: React.FC = () => {
  return (
    <IonApp>
      <I18nextProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <AppRouter />
            </IonRouterOutlet>
            <AppNavigation />
          </IonTabs>
        </IonReactRouter>
      </I18nextProvider>
    </IonApp>
  );
};

export default App;
