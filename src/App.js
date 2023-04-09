import React from 'react';

import './scss/app.scss';

import Sended from './components/Sended';
import Background from './components/Background';
import Cards from './components/Cards';
import Form from './components/Form';

export default function App() {
  // состояния для стилизации
  const [cardData, setCardData] = React.useState('0000 0000 0000 0000');
  const [name, setName] = React.useState('____ ___________');
  const [date, setDate] = React.useState('XX/XX');
  const [cvc, setCvc] = React.useState('000');
  // состояние для смены правой части страницы при отправке формы
  const [sent, setSent] = React.useState(false);

  return (
    <section>
      <Background />
      <div className="App">
        <Cards cardData={cardData} name={name} date={date} cvc={cvc} />
        {/* Форма для заполнения */}
        <div className="form-block">
          {!sent && (
            <Form
              setName={setName}
              setCardData={setCardData}
              setDate={setDate}
              setCvc={setCvc}
              setSent={setSent}
            />
          )}
          {sent && <Sended setSent={setSent} />}
        </div>
      </div>
    </section>
  );
}
