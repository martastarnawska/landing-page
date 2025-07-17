"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const ResearchInsights = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('researchInsights.title')}>
      <p>{t('researchInsights.textContent')}</p>
      <p>{t('researchInsights.textContent2')}</p>
    </Subpage>
  )
}; 

export default ResearchInsights;
