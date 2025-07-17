"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const PRMarketing = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('PRMarketing.title')}>
      <p>{t('PRMarketing.textContent')}</p>
      <p>{t('PRMarketing.textContent2')}</p>
    </Subpage>
  )
}; 

export default PRMarketing;
