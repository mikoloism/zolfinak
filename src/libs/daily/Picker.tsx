import type { DatetimeChangeEventDetail, DatetimeHighlight, IonDatetimeCustomEvent } from '@ionic/core';
import { IonButton, IonButtons, IonDatetime, IonIcon, IonModal, IonText } from '@ionic/react';
import { addDays, addYears, formatISO9075, toDate } from 'date-fns';
import { closeOutline, saveOutline } from 'ionicons/icons';
import React from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { getLocaleCode } from '../i18n/helpers';
import { I18nScope } from '../i18n/token';
import { useDateStore } from '../storage/date';

export const DATE_PICKER_ID = 'datetime-selection';

function DailyPickerComponent({ t, i18n }: WithTranslation<typeof I18nScope.DAILY>) {
  const shouldCloseOverlay: boolean = true;
  const datetime_ref = React.useRef<null | HTMLIonDatetimeElement>(null);

  const highlights: DatetimeHighlight[] = [
    {
      date: formatISO9075(addDays(new Date(), 5), {
        format: 'extended',
        representation: 'date',
      }),
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
  ];

  function onCancel() {
    datetime_ref.current?.cancel(shouldCloseOverlay);
  }

  function onConfirm() {
    datetime_ref.current?.confirm(shouldCloseOverlay);
  }

  type Event = IonDatetimeCustomEvent<DatetimeChangeEventDetail>;
  function onChange(event: Event) {
    useDateStore(toDate((event.detail?.value ?? new Date()).toString()));
  }

  return (
    <IonModal keepContentsMounted={true}>
      <IonDatetime
        locale={getLocaleCode(i18n.language)}
        id={DATE_PICKER_ID}
        ref={datetime_ref}
        firstDayOfWeek={6}
        defaultValue={formatISO9075(new Date())}
        preferWheel={false}
        hourCycle="h23"
        color={'medium'}
        presentation="date-time"
        showDefaultButtons={false}
        highlightedDates={highlights}
        onIonChange={onChange}
        max={formatISO9075(addYears(new Date(), 5))}
      >
        <IonButtons slot="buttons">
          <IonButton color="primary" fill="solid" onClick={onConfirm}>
            <IonText>{t('picker_confirm_button')}</IonText>
            <IonIcon icon={saveOutline} slot="start" />
          </IonButton>
          <IonButton color="danger" fill="clear" onClick={onCancel}>
            <IonText>{t('picker_cancel_button')}</IonText>
            <IonIcon icon={closeOutline} slot="start" />
          </IonButton>
        </IonButtons>
        <span slot="date-label">Tiempo</span>
        <span slot="title">{t('picker_title')}</span>
      </IonDatetime>
    </IonModal>
  );
}

export const DailyPicker = withTranslation(I18nScope.DAILY)(DailyPickerComponent);
