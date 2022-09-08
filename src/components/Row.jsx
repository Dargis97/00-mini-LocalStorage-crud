import { useContext } from 'react';
import DataContext from './DataContext';

function Row({ thing }) {
  const { setDeleteData, setModalData } = useContext(DataContext);

  return (
    <tr>
      <td>{thing.name}</td>
      <td>{thing.weight + ' Kg'}</td>
      <td>{thing.radio}</td>
      <td>
        <div className='buttons'>
          <button className='green' onClick={() => setModalData(thing)}>
            Edit
          </button>
          <button
            className='red'
            onClick={() => setDeleteData({ id: thing.id })}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Row;
