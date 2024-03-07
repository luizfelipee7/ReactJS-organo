

import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';
import Footer from './components/Footer';




function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: 'var(--destaque_programacao)',
      corSecundaria: 'var(--fundo_1)',
    },
    {
      nome: 'Front-End',
      corPrimaria: 'var(--destaque_front_end)',
      corSecundaria: 'var(--fundo_2)',
    },
    {
      nome: 'Data Science',
      corPrimaria: 'var(--destaque_data_science)',
      corSecundaria: 'var(--fundo_3)',
    },
    {
      nome: 'Devops',
      corPrimaria: 'var(--destaque_devops)',
      corSecundaria: 'var(--fundo_4)',
    },
    {
      nome: 'UX e Design',
      corPrimaria: 'var(--destaque_ux_design)',
      corSecundaria: 'var(--fundo_5)',
    },
    {
      nome: 'Mobile',
      corPrimaria: 'var(--destaque_mobile)',
      corSecundaria: 'var(--fundo_6)',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'var(--destaque_inovacao_gestao)',
      corSecundaria: 'var(--fundo_7)',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborador = (colaborador) => 
  {
      console.log(colaborador)
      debugger
      setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form NomesDosTimes={times.map((time) => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      
      {times.map((time) =>  <Time 
         key={time.nome} 
         nome={time.nome} 
         corPrimaria={time.corPrimaria} 
         corSecundaria={time.corSecundaria}
         colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
         />)}

         <Footer/>

 
    </div>
  );
}

export default App;
