import { useContext } from 'react';
import DataContext from './DataContext';
import { useState } from 'react';

function Edit({ thing }) {
  const { modalData, setModalData, setEditData } = useContext(DataContext);

  if (null === modalData) {
    return null;
  }

  const save = () => {};

  return (
    <tr>
      <td>{thing.name}</td>
      <td>{thing.weight + ' Kg'}</td>
      <td>{thing.radio}</td>
      <td>
        <div className='buttons'>
          <button className='green' onClick={save}>
            Submit
          </button>
          <button className='red' onClick={() => setModalData(null)}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Edit;
