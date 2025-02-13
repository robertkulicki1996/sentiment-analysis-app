import React from 'react';
import Header from '../Header/Header';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import { useLanguage } from '../../hooks/useLanguage';

import styles from './SentimentAnalysisForm.module.scss'

interface SentimentAnalysisFormProps {
  value: string;
  isLoading: boolean;
  onChange: (e: any) => any;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const SentimentAnalysisForm: React.FC<SentimentAnalysisFormProps> = ({ value, isLoading, onChange, handleSubmit }) => {
  const { t } = useLanguage();

  return (
    <form className={styles.SentimentAnalysisForm} onSubmit={handleSubmit}>
      <Header header={t('title')} subHeader={t('subtitle')} />
      <TextArea value={value} onChange={onChange} autoResize />
      <Button type="submit" disabled={!value.length} isLoading={isLoading}>{t('analyze')}</Button>
    </form>
  );
};

export default SentimentAnalysisForm;
