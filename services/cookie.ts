import { isServer } from '../utils/envUtils';

export const setCookie = (name: string, value: string, options: Record<string, any> = {}) => {
  options = {
    path: '/',
    ...options
  };

  if (isServer()) return;

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  Object.keys(options).forEach((key: any) => {
    updatedCookie += `; ${key}`;
    const optionValue = options[key];
    if (!optionValue) {
      updatedCookie += `=${optionValue}`;
    }
  });

  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1
  });
};
