import { useState } from "react";
import { ITarefa } from "../../types/Tarefa";
import style from './Lista.module.scss';

interface Props {
    item: ITarefa;
}

export default function Lista({ item }: Props) {
    const [checado, setChecado] = useState(item.feito);

    return (
        <div className={style.container}>
            <input className={style.input}
                type='checkbox'
                checked={checado}
                onChange={evento => setChecado(evento.target.checked)}
            />
            {checado && <label className={style.concluido}>{item.nome}</label>}
            {!checado && <label className={style.label}>{item.nome}</label>}
        </div>
    );
}