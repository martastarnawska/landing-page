"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const CommunityOutreach = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('communityOutreach.title')}>
      <p>{t('communityOutreach.textContent')}</p>
      <p>{t('communityOutreach.textContent2')}</p>
    </Subpage>
  )
}; 

export default CommunityOutreach;
