import Collaborator from "./Collaborator";
import "./Time.css";

const Time = (props) => {
  const backgroundColor = { backgroundColor: props.corSecundaria };
  const borderColor = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && <section className="time" style={backgroundColor}>
      <h3 style={borderColor}>{props.nome}</h3>
      <div className="colaboradores">
          {props.colaboradores.map(colaborador => <Collaborator
          key={colaborador.nome}
          corDeFundo={props.corPrimaria }
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}/>)}
      </div>
    </section>
  );
};

export default Time;


