import { IonIcon, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { calendarNumberOutline } from 'ionicons/icons';
import { withTranslation, type WithTranslation } from 'react-i18next';

import { Calendar } from 'lib/calendar/mod';
import { I18nScope } from 'lib/i18n/mod';
import { globalSetting } from '../global';

type CalendarOptionProps = WithTranslation & { value: Calendar };
const CalendarOption = withTranslation()(({ value, t, }: CalendarOptionProps) => {
  return (
    <IonSelectOption value={value}>
      {t(`settings:calendar_system_${value}`)}
    </IonSelectOption>
  );
});

function CalendarType({ t }: WithTranslation): JSX.Element {
  return (
    <IonItem>
      <IonIcon icon={calendarNumberOutline} slot="start" />
      <IonSelect
        label={t('settings:calendar_system')}
        labelPlacement="start"
        onIonChange={(event) => globalSetting.calendar.update(event.target.value as Calendar)}
        value={globalSetting.calendar.get()}
      >
        <CalendarOption value={Calendar.GREGORIAN} />
        <CalendarOption value={Calendar.JALALI} />
      </IonSelect>
    </IonItem>
  );
}

export const SettingsCalendarType = withTranslation(I18nScope.SETTINGS)(CalendarType);
