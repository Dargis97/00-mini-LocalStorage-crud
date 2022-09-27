import React, { useContext, useState } from 'react';
import DataContext from './DataContext';

function Create() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [animal, setAnimal] = useState(0);

  const { setCreateData, listOfAnimals, makeMsg } = useContext(DataContext);

  const add = () => {
    if ('' === name) {
      makeMsg('You need to insert name before adding to the list!', 'alert');
      return;
    }
    if ('' === weight || 0 === weight) {
      makeMsg('You need to insert weight before adding to the list!', 'alert');
      return;
    }
    if (0 === animal) {
      makeMsg('You need to choose animal before moving forward!', 'alert');
      return;
    }
    setCreateData({
      name,
      weight,
      animal,
    });
    setName('');
    setWeight('');
    setAnimal(0);
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
        <div className='form'>
          <label>Texture</label>
          <div className='cb-line'>
            {listOfAnimals.map((t) => (
              <span key={t.id}>
                <input
                  id={'c_' + t.id}
                  type='checkbox'
                  checked={t.id === animal}
                  onChange={() => setAnimal(t.id)}
                ></input>
                <label htmlFor={'c_' + t.id}>{t.title}</label>
              </span>
            ))}
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
