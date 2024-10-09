"use client";
import { useTranslation } from "react-i18next";
import Subpage from "@/components/Subpage";
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import '../i18n/i18n';

const title = "General Consulting";
const textContent = "Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together. Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together. Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together. Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together.Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together";

const GeneralConsulting = () => {
  const { t } = useTranslation();
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

  return (
    <Subpage title={t('generalConsulting.title')}>
      <p>{t('generalConsulting.textContent')}</p>
    </Subpage>
  )
}; 

export default GeneralConsulting;
