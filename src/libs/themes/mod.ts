import { StatusBar, Style } from '@capacitor/status-bar';

export function initilizeThemeSettings(): void {
  if (typeof window === 'undefined') return;

  const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function onPrefersColorScheme(status: MediaQueryListEvent): void {
    StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  }

  function tryChromeandFirefox() {
    darkMediaQuery.addEventListener('change', onPrefersColorScheme);
  }

  function trySafari() {
    darkMediaQuery.addListener(onPrefersColorScheme);
  }

  try {
    tryChromeandFirefox();
  } catch {
    try {
      trySafari();
      // eslint-disable-next-line no-empty
    } catch {}
  }
}
