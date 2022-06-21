import { useState } from 'react';
import { AddTarefa } from '../components/AddTarefa';
import Lista from '../components/Lista';
import style from '../page/App.module.scss';
import { ITarefa } from '../types/Tarefa';

export default function App(){
  const [lista, setLista] = useState<ITarefa[]>([]);

  const adicionar = (nomeTarefa: string) => {
    let novaLista = [...lista];
    novaLista.push({
      id: lista.length ++,
      nome: nomeTarefa,
      feito: false
    });
    setLista(novaLista);
  }
  return(
    <div className={style.container}>
      <div className={style.area}>
         <h2 className={style.meio}>Lista de Tarefas</h2> 

         <AddTarefa onEnter={adicionar}/>
          
         {lista.map((item, index) =>(
          <Lista key={index} item={item} />
         ))}
      </div>
    </div>
  );
}

