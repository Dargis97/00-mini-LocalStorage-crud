import React, { useContext, useEffect, useState } from 'react';
import DataContext from './DataContext';

const radioData = { A: false, B: false, C: false };

function Create() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [radio, setRadio] = useState(radioData);

  const { setCreateData } = useContext(DataContext);

  useEffect(() => {}, [radio]);

  const radioChange = (e) => {
    const v = e.target.value;
    const r = {};
    for (const a in radioData) {
      r[a] = a === v ? true : false;
    }
    setRadio(r);
  };

  const add = () => {
    setCreateData({
      name,
      weight,
      radio: radio.A ? 'Sheep' : radio.B ? 'Antelope' : radio.C ? 'Duck' : null,
    });
    setName('');
    setWeight('');
    setRadio(radioData);
  };

  return (
    <div className='card'>
      <div className='top'>Fill animal info</div>
      <div className='body'>
        <div className='form'>
          <label>Insert Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form'>
          <label>Insert Weight in Kg:</label>
          <input
            pattern='[0-9]*'
            type='text'
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <h2>Choose animal</h2>
        <div className='form row'>
          <div>
            <input
              type='checkbox'
              value='A'
              id='_1'
              onChange={radioChange}
              checked={radio.A}
            />
            <label
              htmlFor='_1'
              style={{
                color: radio.A ? 'crimson' : null,
              }}
            >
              Sheep
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              value='B'
              id='_2'
              onChange={radioChange}
              checked={radio.B}
            />
            <label htmlFor='_2' style={{ color: radio.B ? 'crimson' : null }}>
              Antelope
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              value='C'
              id='_3'
              onChange={radioChange}
              checked={radio.C}
            />
            <label htmlFor='_3' style={{ color: radio.C ? 'crimson' : null }}>
              Duck
            </label>
          </div>
        </div>
        <div className='form'>
          <button className='blue' onClick={add}>
            Add to the List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
