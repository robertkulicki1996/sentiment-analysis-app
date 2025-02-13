import styles from "./Header.module.scss";

interface HeaderProps {
  header: string;
  subHeader?: React.ReactNode;
}

const Header = ({ header, subHeader }: HeaderProps) => {
  return(
    <>
			<h1 className={styles.Header}>{header}</h1>
			<h2 className={styles.SubHeader}>{subHeader}</h2>
    </>
  )
};

export default Header;
