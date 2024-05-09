const localstorageControl = (action: string, key: string, value?: string): void | string | null => {
  if (action === 'set' && value) {
    return localStorage.setItem(key, value);
  }

  return localStorage.getItem(key);
};

export default localstorageControl;
