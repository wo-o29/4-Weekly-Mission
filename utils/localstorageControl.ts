const localstorageControl = (action: string, key: string, value?: string): void | string | null => {
  if (action === 'get' && value) {
    return localStorage.setItem(key, value);
  }

  return localStorage.getItem(key);
};

export default localstorageControl;
