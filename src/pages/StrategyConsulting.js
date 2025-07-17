"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const StrategyConsulting = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('strategyConsulting.title')}>
      <p>{t('strategyConsulting.textContent')}</p>
      <p>{t('strategyConsulting.textContent2')}</p>
    </Subpage>
  )
}; 

export default StrategyConsulting;
