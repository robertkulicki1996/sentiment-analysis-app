import React, { useState, useRef } from 'react';
import styles from './TextArea.module.scss';

interface TextareaProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  autoResize?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  value = '',
  placeholder = 'Wpisz tekst...',
  onChange,
  className = '',
  autoResize = false
}) => {
  const [text, setText] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    if (newText.trim() === '') {
      setError('Pole nie może być puste!');
    } else if (newText.length >= 500) {
      setError('Tekst nie może przekroczyć 500 znaków!');
    } else {
      setError(null);
    }

    if (onChange) onChange(newText);

    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styles.TextareaContainer}>
      <label htmlFor="text" className={styles.SrOnly}>Tekst</label>
      <textarea
        id="text"
        name="text"
        ref={textareaRef}
        className={`${styles.Textarea} ${className} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        maxLength={500}
        minLength={0}
      />
      {error && <p className={styles.ErrorMessage}>{error}</p>}
    </div>
  );
};

export default Textarea;