import { dayjs } from 'lib/date/mod';
import { Store as PullstateStore } from 'pullstate';
import { getLocaleCode } from '../i18n/helpers';
import { i18n } from '../i18n/i18n';

const FULL_DATE_FORMAT = {
  day: '2-digit',
  month: 'short',
  weekday: 'long',
  year: 'numeric',
};

const dateStore = new PullstateStore<DateStore>(() => {
  return { date: new Date() };
});

function useDateStore(): UseDateStore {
  const stored_date = dateStore.useState(($) => $.date);
  const formatted_date = dayjs().toISOString();
  // const formatted_date = dayjs.format(stored_date, FULL_DATE_FORMAT, {
  //   locale: getLocaleCode(i18n.language),
  // });

  return {
    update: function update(newDate) {
      return dateStore.update(($) =>
        Object.assign($, {
          date: newDate,
        }),
      );
    },
    date: stored_date,
    formatted: formatted_date,
  };
}

interface DateStore {
  date: Date;
}

interface UseDateStore extends DateStore {
  formatted: string;
  update: (newDate: Date) => void;
}

export { dateStore, useDateStore };
