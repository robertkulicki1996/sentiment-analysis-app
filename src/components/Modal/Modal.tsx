import React from 'react';
import styles from './Modal.module.scss';
import Button from '../Button/Button';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return (
		<div className={styles.ModalOverlay} onClick={onClose}>
			<div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
				<Button type='button' onClick={onClose}>Wróć</Button>
			</div>
		</div>
	);
};

export default Modal;
