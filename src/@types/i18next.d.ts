import Resources from './i18n';
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: Resources;
  }
}