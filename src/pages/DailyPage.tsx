import type { WithTranslation } from 'react-i18next';
import { DailyPicker, DailyPickerButton } from '../libs/daily/Picker';
import { I18nScope } from '../libs/i18n/token';
import { Roller, withIonPageLayout, withPage, withTranslation } from '../libs/roll/mod';

function DailyPage() {
  return (
    <>
      <DailyPickerButton />
      <DailyPicker />
    </>
  );
}

export default new Roller()
  .roll(withPage('/daily'))
  .roll<WithTranslation>(withTranslation(I18nScope.HOME))
  .roll(
    withIonPageLayout('', {
      withToolbar: false,
      contentClassName: 'ion-padding',
    }),
  )
  .around(DailyPage);
