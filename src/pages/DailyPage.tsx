import { IonText } from '@ionic/react';
import type { WithTranslation } from 'react-i18next';
import { I18nScope } from '../libs/i18n/token';
import { Roller, withIonPageLayout, withPage, withTranslation } from '../libs/roll/mod';

function DailyPage() {
  return <IonText is="h1">Daily(WIP)</IonText>;
}

export default new Roller()
  .roll(withPage('/daily'))
  .roll<WithTranslation>(withTranslation(I18nScope.HOME))
  .roll(withIonPageLayout('', { contentClassName: 'ion-padding', withToolbar: false }))
  .around(DailyPage);
