import { useEffect, useState } from 'react';
import i18n from 'i18next';

const useClientSideTranslation = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(savedLanguage).then(() => setLoaded(true));
  }, []);

  return loaded;
};

export default useClientSideTranslation;

