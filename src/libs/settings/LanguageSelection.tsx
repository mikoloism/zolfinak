import { IonIcon, IonItem, IonSelect } from '@ionic/react';
import { languageOutline } from 'ionicons/icons';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { I18nScope, LanguageName, changeLanguage } from '../i18n/mod';
import { SelectOption } from './Option';

function LanguageSelection({ t, i18n }: WithTranslation): JSX.Element {
  return (
    <IonItem>
      <IonIcon icon={languageOutline} slot="start" />
      <IonSelect
        label={t('language_label')}
        labelPlacement="start"
        onIonChange={(event) => void changeLanguage(event.target.value as string)}
        value={i18n.language}
      >
        <SelectOption lang={LanguageName.ENGLISH} />
        <SelectOption lang={LanguageName.PERSIAN} />
      </IonSelect>
    </IonItem>
  );
}

export const SettingsLanguageSelection = withTranslation(I18nScope.SETTINGS)(LanguageSelection);
