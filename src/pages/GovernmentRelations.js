"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const GovernmentRelations = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('governmentRelations.title')}>
      <p>{t('governmentRelations.textContent')}</p>
      <p>{t('governmentRelations.textContent2')}</p>
    </Subpage>
  )
}; 

export default GovernmentRelations;
