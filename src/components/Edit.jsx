import DataContext from './DataContext';
import { useState, useEffect, useContext } from 'react';

function Edit() {
  const { modalData, setModalData, setEditData, listOfAnimals } =
    useContext(DataContext);
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [animal, setAnimal] = useState(0);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setName(modalData.name);
    setWeight(modalData.weight);
    setAnimal(modalData.radio);
  }, [modalData]);

  const save = () => {
    setEditData({
      name,
      weight,
      animal,
      id: modalData.id,
    });
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal-bin'>
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
                      id={'e_' + t.id}
                      type='checkbox'
                      checked={t.id === animal}
                      onChange={() => setAnimal(t.id)}
                    ></input>
                    <label htmlFor={'e_' + t.id}>{t.title}</label>
                  </span>
                ))}
              </div>
            </div>
            <div className='form'>
              <button className='blue' onClick={save}>
                Edit Thing
              </button>
              <button className='red' onClick={() => setModalData(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}

export default Edit;
