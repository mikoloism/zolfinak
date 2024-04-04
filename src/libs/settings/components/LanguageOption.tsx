import { IonSelectOption } from '@ionic/react';
import { getNativeName, getTextDirection } from 'lib/i18n/helpers';
import type { LanguageName } from 'lib/i18n/languages';

export const SelectOption: React.FC<Props> = ({ lang }) => (
  <IonSelectOption dir={getTextDirection(lang)} value={lang}>
    {getNativeName(lang)}
  </IonSelectOption>
);

interface Props {
  lang: LanguageName;
}
