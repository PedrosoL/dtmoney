import { FormEvent, useState } from 'react';

import { Container, TransectionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal';
import { api } from '../../services/api';

Modal.setAppElement('#root');

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransectionModal({ isOpen, onRequestClose }: ModalProps) {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState('');
	const [type, setType] = useState('deposit');

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		const data = {
			title,
			value,
			type,
			category,
		};

		api.post('/transactions', data);
	}

	return (
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				overlayClassName= 'react-modal-overlay'
				className= 'react-modal-content'
			>
					<button 
						type='button' 
						onClick={onRequestClose}
						className='react-modal-close'
					>
						<img src={closeImg} alt="Fechar modal" />
					</button>

				<Container onSubmit={handleCreateNewTransaction}>
					<h2>Cadastrar transação</h2>

					<input 
						placeholder='Titulo' 
						value={title}
						onChange={event => setTitle(event.target.value)}
					/>

					<input 
						type='number' 
						placeholder='Valor'
						value={value}
						onChange={event => setValue(Number(event.target.value))}
					/>

					<TransectionTypeContainer>
						<RadioBox 
							type='button'
							onClick={() => { setType('deposit'); }}
							isActive={type === 'deposit'}
							activeColor='green'
						>
							<img src={incomeImg} alt="Entrada" />
							<span>Entrada</span>
						</RadioBox>

						<RadioBox 
							type='button'
							onClick={() => { setType('withdraw'); }}
							isActive={type === 'withdraw'}
							activeColor='red'
						>
							<img src={outcomeImg} alt="Saída" />
							<span>Saída</span>
						</RadioBox>
					</TransectionTypeContainer>

					<input 
						placeholder='Categoria'
						value={category}
						onChange={event => setCategory(event.target.value)}
					/>
					
					<button type="submit">Cadastrar</button>
				</Container>
			</Modal>
	);
};