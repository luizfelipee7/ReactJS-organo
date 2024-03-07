
import "./TextField.css";

const TextField = (props) => {
  const placeholder = `${props.placeholder}`;
  // let valor = "Luiz Felipe";

  // const [valor, setValor] = useState('')

  const aoDigitado = (evento) => {
    // setValor(evento.target.value)
    // console.log(valor);
    props.aoAlterado(evento.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextField;

