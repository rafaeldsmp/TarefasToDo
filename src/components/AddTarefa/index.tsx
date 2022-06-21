import { useState, KeyboardEvent } from 'react'
import style from './AddTarefa.module.scss'

interface Props {
    onEnter: (nomeTarefa: string) => void;
}

export function AddTarefa({ onEnter }: Props) {
    const [texto, setTexto] = useState('');

    const handler = (evento: KeyboardEvent) => {
        if (evento.code === 'Enter' && texto !== '') {
            onEnter(texto);
            setTexto('');
        }
    }
    return (
        <div className={style.container}>
            <div className={style.imagem}>➕</div>
            <input
                type='text'
                placeholder="Adicione uma tarefa"
                value={texto}
                onChange={evento => setTexto(evento.target.value)}
                onKeyUp={handler}
            />
        </div>

    )
}