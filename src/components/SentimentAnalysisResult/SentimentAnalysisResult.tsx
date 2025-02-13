import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import styles from './SentimentAnalysisResult.module.scss';
import Header from '../Header/Header';

interface SentimentAnalysisResultProps {
  label: string;
  positive: number;
  neutral: number;
  negative: number;
}

const SentimentAnalysisResult = ({ positive, neutral, negative, label }: SentimentAnalysisResultProps) => {
  const total = positive + neutral + negative;
  const positivePercentage = (positive / total) * 100;
  const neutralPercentage = (neutral / total) * 100;
  const negativePercentage = (negative / total) * 100;

  return (
    <div className={styles.Container}>
      <Header header={label} subHeader="" />
      <div className={styles.ProgressBars}>
        <div className={styles.ProgressItem}>
          <FaSmile className={`${styles.Icon} ${styles.Green}`} />
          <div className={styles.ProgressBarContainer}>
            <div
              className={styles.ProgressBar}
              style={{ 
                backgroundColor: "#8FCB81", 
                width: `${positivePercentage}%`, 
                ["--progress" as any]: `${positivePercentage}%`
              } as React.CSSProperties}
            />
          </div>
          <span className={`${styles.Percentage} ${styles.Green}`}>{Math.round(positivePercentage)}%</span>
        </div>
        <div className={styles.ProgressItemDescription}>Pozytywna opinia – radość i zadowolenie!</div>

        <div className={styles.ProgressItem}>
          <FaMeh className={`${styles.Icon} ${styles.Gray}`} />
          <div className={styles.ProgressBarContainer}>
            <div
              className={styles.ProgressBar}
              style={{ 
                backgroundColor: "#B0B0B0", 
                width: `${neutralPercentage}%`, 
                ["--progress" as any]: `${neutralPercentage}%`
              } as React.CSSProperties}
            />
          </div>
          <span className={`${styles.Percentage} ${styles.Gray}`}>{Math.round(neutralPercentage)}%</span>
        </div>
        <div className={styles.ProgressItemDescription}>Neutralna opinia – brak silnych emocji.</div>

        <div className={styles.ProgressItem}>
          <FaFrown className={`${styles.Icon} ${styles.Red}`} />
          <div className={styles.ProgressBarContainer}>
            <div
              className={styles.ProgressBar}
              style={{ 
                backgroundColor: "#E57373", 
                width: `${negativePercentage}%`, 
                ["--progress" as string]: `${negativePercentage}%`
              } as React.CSSProperties}
            />
          </div>
          <span className={`${styles.Percentage} ${styles.Red}`}>{Math.round(negativePercentage)}%</span>
        </div>
        <div className={styles.ProgressItemDescription}>Negatywna opinia – krytyka lub niezadowolenie.</div>
      </div>
    </div>
  );
};

export default SentimentAnalysisResult;
