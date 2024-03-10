import { IonIcon, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { calendarNumberOutline } from "ionicons/icons";
import { withTranslation, type WithTranslation } from "react-i18next";

import { Calendar } from "lib/calendar/calendar";
import { I18nScope } from "lib/i18n/token";
import { globalSetting } from "../global";

function CalendarType({ t }: WithTranslation): JSX.Element {
  return (
    <IonItem>
      <IonIcon icon={calendarNumberOutline} slot="start" />
      <IonSelect label={t('settings:first_day_of_week')} labelPlacement="start" onIonChange={(event) => globalSetting.calendar.update(event.target.value as Calendar)} value={globalSetting.calendar.get()}>
        <IonSelectOption value={Calendar.GREGORIAN}>{Calendar.GREGORIAN}</IonSelectOption>
        <IonSelectOption value={Calendar.JALALI}>{Calendar.JALALI}</IonSelectOption>
      </IonSelect>
    </IonItem>
  )
}

export const SettingsCalendarType = withTranslation(I18nScope.SETTINGS)(CalendarType)
