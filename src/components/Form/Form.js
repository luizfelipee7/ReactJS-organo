import DropDown from "./DropDown";
import TextField from "./TextField";
import "./Form.css";
import Button from "./Button";
import { useState } from "react";

export const Form = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

   const aoSalvar = (evento) => {
      evento.preventDefault();
      props.aoColaboradorCadastrado({nome, cargo, imagem, time} )
      setNome('') 
      setCargo('') 
      setImagem('') 
      setTime('') 
   }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <TextField
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <DropDown
          obrigatorio={true}
          label="Time"
          itens={props.NomesDosTimes}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};
