import { intlFormat, type IntlFormatFormatOptions } from 'date-fns';
import { Store as PullstateStore } from 'pullstate';
import { getLocaleCode } from '../i18n/helpers';
import { i18n } from '../i18n/i18n';

const FULL_DATE_FORMAT: IntlFormatFormatOptions = {
  day: '2-digit',
  month: 'short',
  weekday: 'long',
  year: 'numeric',
};

const dateStore = new PullstateStore<DateStore>(function initilizeStore() {
  return { date: new Date() };
});

function useDateStore(): UseDateStore;
function useDateStore(newDate: Date): void;
function useDateStore(newDate?: Date): UseDateStore | void {
  if (typeof newDate === 'undefined') {
    const stored_date = dateStore.useState(($) => $.date);
    const formatted_date = intlFormat(stored_date, FULL_DATE_FORMAT, {
      locale: getLocaleCode(i18n.language),
    });

    return {
      date: stored_date,
      formatted: formatted_date,
    };
  }

  return dateStore.update(($) =>
    Object.assign($, {
      date: newDate,
    }),
  );
}

interface DateStore {
  date: Date;
}

interface UseDateStore extends DateStore {
  formatted: string;
}

export { dateStore, useDateStore };
