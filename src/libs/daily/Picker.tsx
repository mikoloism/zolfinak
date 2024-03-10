import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import * as $d from 'date-fns';
import $j from 'jalaali-js';
import React from 'react';
import { type WithTranslation, withTranslation } from 'react-i18next';
import {
  utils as $m,
  type CalendarProps,
  type Day as DayValue,
  Calendar as ModernDatePicker,
} from 'react-modern-calendar-datepicker';
import { getLocaleCode } from '../i18n/helpers';
import { I18nScope } from '../i18n/token';
import { useDateStore } from '../storage/date';

export const DATE_PICKER_ID = 'datetime-selection';

function DailyPickerComponent({ t, i18n }: WithTranslation<typeof I18nScope.DAILY>) {
  const date = new Date();
  const today = $m('fa').getToday();
  const minimumDate = Object.assign({}, today);

  const modalRef = React.useRef<HTMLIonModalElement>(null);
  const [unconfirmedSelection, setUnconfirmedSelection] = React.useState<DayValue>(today);
  const $date = useDateStore();

  function onConfirm() {
    modalRef.current?.dismiss('value', 'confirm');
  }

  function onCancel() {
    modalRef.current?.dismiss();
  }

  function onChange(value: DayValue) {
    setUnconfirmedSelection(value);
  }

  function preconfirm(date: DayValue): Date {
    const gdate = $j.toGregorian(date.year, date.month, date.day);
    const newDate = new Date(gdate.gy, gdate.gm, gdate.gd);
    console.log({
      gdate,
      date,
      formatted: $d.intlFormat(
        newDate,
        {
          day: '2-digit',
          month: 'short',
          weekday: 'long',
          year: 'numeric',
        },
        { locale: 'fa' },
      ),
    });
    return newDate;
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role !== 'confirm') return;
    const confirmedDate = preconfirm(unconfirmedSelection);
    $date.update(confirmedDate);
  }

  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  const calendarProps: Optional<CalendarProps<DayValue>, 'value'> = {
    value: today,
    locale: getLocaleCode(i18n.language),
    shouldHighlightWeekends: true,
    minimumDate,
    onChange,
  };

  return (
    <IonModal keepContentsMounted={true} onWillDismiss={onWillDismiss} ref={modalRef} trigger={DATE_PICKER_ID}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onCancel}>{t('daily:picker_cancel_button')}</IonButton>
          </IonButtons>
          <IonTitle>{t('daily:picker_title')}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onConfirm} strong={true}>
              {t('daily:picker_confirm_button')}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ModernDatePicker {...calendarProps} />
      </IonContent>
    </IonModal>
  );
}

export function DailyPickerButton() {
  const $date = useDateStore();
  return (
    <IonButton expand="block" id={DATE_PICKER_ID}>
      select ({$date.formatted})
    </IonButton>
  );
}

export const DailyPicker = withTranslation(I18nScope.DAILY)(DailyPickerComponent);
