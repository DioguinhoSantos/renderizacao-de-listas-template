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
  const [lista, setLista] = useState(['Cozinhar','Comer', 'Estudar']);


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  // const onChangeLista = (event) => {
  //   setLista(event.target.value);
  // };

  const tarefas = lista.map((tarefa) => {
    return (
      <ul key={tarefa}>
        <li>{tarefa}</li>
      </ul>
    )
  })

  console.log(tarefas)

  const adicionaTarefa = () => {};

  const removeTarefa = () => {};



  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton>Adicionar</AddTaskButton>
      </InputContainer>

      {tarefas} 

      <ListaContainer>
        <ul>
          <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa>
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
