import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {

  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(['Cozinhar', 'Comer', 'Estudar']);


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

//função que mostra como remover um item de uma lista renderizada na tela, ATENÇÃO COM !== E ===
  const removeTarefa = (item) => {
    const itemAApagar = lista.filter((tarefa) => item !== tarefa)
    setLista(itemAApagar);
  };

  const tarefas = lista.map((tarefa, index) => {
    //função para guardar o map da lista contida no estado lista
    return (
      <ListaContainer key={index}>
        <Tarefa>

          <p>{tarefa}</p>

          <RemoveButton onClick={() => removeTarefa(tarefa)}>
            <img src={bin} alt="" width="16px" />
          </RemoveButton>

        </Tarefa>
      </ListaContainer>
    )
  })

  const adicionaTarefa = () => {
    if (novaTarefa.length > 0) {

      const novaLista = [...lista, novaTarefa]
      console.log(novaLista)
      setLista(novaLista)
      setNovaTarefa('')
    } else {
      alert('error')
    };
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      {tarefas}
    </ListaTarefasContainer>
  );
}
