import { IonIcon, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { calendarNumberOutline } from "ionicons/icons";
import { withTranslation, type WithTranslation } from "react-i18next";

import { WeekDay } from "lib/calendar/weekday";
import { I18nScope } from "lib/i18n/token";
import { globalSetting } from "../global";

function FirstDayOfWeek({ t }: WithTranslation): JSX.Element {
  return (
    <IonItem>
      <IonIcon icon={calendarNumberOutline} slot="start" />
      <IonSelect label={t('settings:first_day_of_week')} labelPlacement="start" onIonChange={(event) => globalSetting.firstDayOfWeek.update(event.target.value as WeekDay)} value={globalSetting.firstDayOfWeek.get()}>
        <IonSelectOption value={WeekDay.SUNDAY}>{WeekDay.resolveNameOf(WeekDay.SUNDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.MONDAY}>{WeekDay.resolveNameOf(WeekDay.MONDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.TUESDAY}>{WeekDay.resolveNameOf(WeekDay.TUESDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.WEDNESDAY}>{WeekDay.resolveNameOf(WeekDay.WEDNESDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.THURSDAY}>{WeekDay.resolveNameOf(WeekDay.THURSDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.FRIDAY}>{WeekDay.resolveNameOf(WeekDay.FRIDAY)}</IonSelectOption>
        <IonSelectOption value={WeekDay.SATURDAY}>{WeekDay.resolveNameOf(WeekDay.SATURDAY)}</IonSelectOption>
      </IonSelect>
    </IonItem>
  )
}

export const SettingsFirstDayOfWeek = withTranslation(I18nScope.SETTINGS)(FirstDayOfWeek)
