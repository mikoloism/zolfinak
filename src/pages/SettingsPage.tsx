import { Device, type DeviceInfo } from '@capacitor/device';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import React from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';

import { I18nScope } from 'lib/i18n/mod';
import { SettingsCalendarType } from 'lib/settings/components/CalendarType';
import { SettingsFirstDayOfWeek, SettingsLanguageSelection } from 'lib/settings/mod';

const SettingsPage: React.FC<WithTranslation> = ({ t }) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{t('title')}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{t('title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <SettingsLanguageSelection />
        <SettingsFirstDayOfWeek />
        <SettingsCalendarType />
        <IonItem routerLink="/settings/about">
          <IonIcon icon={informationCircleOutline} slot="start" />
          <IonText>{t('about_link_text')}</IonText>
        </IonItem>
        <SettingsBuildInformation />
      </IonList>
    </IonContent>
  </IonPage>
);

function SettingsBuildInformation() {
  const [device, setDeviceInfo] = React.useState<DeviceInfo>();

  React.useEffect(() => {
    void Device.getInfo().then((deviceInfo) => {
      setDeviceInfo(() => deviceInfo);
    });
  }, []);

  return (
    <IonNote color="medium" style={{ textAlign: 'center' }}>
      Zolfinak for {device?.model} version {device?.osVersion}
    </IonNote>
  );
}

export default withTranslation(I18nScope.SETTINGS)(SettingsPage);
