enum LanguageName {
  ENGLISH = 'ENGLISH',
  PERSIAN = 'PERSIAN',
}

namespace LanguageName {
  /* aliases */
  export const FARSI: LanguageName.PERSIAN = LanguageName.PERSIAN;
  export const DEFAULT: LanguageName = LanguageName.ENGLISH;

  /* types */
  export type Actual = `${LanguageName}`;

  /* local block */
  const displayName = new Intl.DisplayNames('en', {
    type: 'language',
    fallback: 'code',
    style: 'long',
    languageDisplay: 'standard',
  });

  /* traits */
  export function resolve(langtag: string): LanguageName {
    if (langtag.toUpperCase() in LanguageName) return LanguageName[langtag.toUpperCase() as LanguageName.Actual];

    // with BCP47
    const name = displayName.of(langtag) ?? 'English (US)';
    const key = name.split(' ')[0].toUpperCase();
    return LanguageName[key as LanguageName.Actual];
  }
}

export { LanguageName };
