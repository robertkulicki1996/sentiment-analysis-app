import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isLoading?: boolean;
}

const Button = ({ children, onClick, disabled, type = 'button', className, isLoading = false, ...props }: ButtonProps) => {
  return <button type={type} onClick={onClick} disabled={disabled} className={`${styles.Button} ${className}`} {...props}>{isLoading ? <span className={styles.Loader}></span> : children}</button>;
};

export default Button;
