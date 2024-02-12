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
import { I18nScope } from '../libs/i18n/mod';
import { SettingsLanguageSelection } from '../libs/settings/mod';

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
        <IonItem routerLink="/settings/about">
          <IonIcon slot="start" icon={informationCircleOutline} />
          <IonText>{t('about_link_text')}</IonText>
        </IonItem>
        <SettingsBuildInformation />
      </IonList>
    </IonContent>
  </IonPage>
);

function SettingsBuildInformation() {
  const [device, setDeviceInfo] = React.useState<DeviceInfo>();

  React.useEffect(function onMount() {
    Device.getInfo().then(function subscribeInfo(deviceInfo) {
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
