import { IonDatetimeButton, IonText, IonToolbar } from '@ionic/react';
import type { WithTranslation } from 'react-i18next';
import { DATE_PICKER_ID, DailyPicker } from '../libs/daily/Picker';
import { I18nScope } from '../libs/i18n/token';
import { Roller, withIonPageLayout, withPage, withTranslation } from '../libs/roll/mod';
import { useDateStore } from '../libs/storage/date';

function Toolbar(): JSX.Element {
  const $date = useDateStore();

  return (
    <IonToolbar className="ion-padding">
      <IonDatetimeButton datetime={DATE_PICKER_ID} is="ion-title" color={'medium'}>
        {$date.formatted}
      </IonDatetimeButton>
    </IonToolbar>
  );
}

function DailyPage() {
  return (
    <>
      <DailyPicker />
      <IonText is="h1">Daily(WIP)</IonText>
    </>
  );
}

export default new Roller()
  .roll(withPage('/daily'))
  .roll<WithTranslation>(withTranslation(I18nScope.HOME))
  .roll(withIonPageLayout('', { Toolbar, contentClassName: 'ion-padding' }))
  .around(DailyPage);
