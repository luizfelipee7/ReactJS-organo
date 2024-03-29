import './DropDown.css'

const DropDown = (props) =>
{


    
       return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
               <option value="" disabled selected> Selecione uma opção</option>
               {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
       )
}

export default DropDown