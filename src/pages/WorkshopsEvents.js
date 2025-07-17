"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const WorkshopsEvents = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('workshopsEvents.title')}>
      <p>{t('workshopsEvents.textContent')}</p>
      <p>{t('workshopsEvents.textContent2')}</p>
    </Subpage>
  )
}; 

export default WorkshopsEvents;
