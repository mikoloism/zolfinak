import { StatusBar, Style } from '@capacitor/status-bar';

export function initilizeThemeSettings(): void {
  if (typeof window === 'undefined') return;

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function onPrefersColorScheme(status): void {
      try {
        StatusBar.setStyle({
          style: status.matches ? Style.Dark : Style.Light,
        });
        // eslint-disable-next-line no-empty
      } catch {}
    });
}
