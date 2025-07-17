"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const BusinessAdvisory = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('businessAdvisory.title')}>
      <p>{t('businessAdvisory.textContent')}</p>
      <p>{t('businessAdvisory.textContent2')}</p>
    </Subpage>
  )
}; 

export default BusinessAdvisory;
