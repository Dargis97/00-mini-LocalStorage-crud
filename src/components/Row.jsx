import { useContext } from 'react';
import DataContext from './DataContext';

function Row({ thing }) {
  const { setDeleteData, setModalData, listOfAnimals } =
    useContext(DataContext);

  return (
    <tr>
      <td>{thing.name}</td>
      <td>{thing.weight + ' Kg'}</td>
      <td>{listOfAnimals.find((t) => t.id === thing.animal)?.title}</td>
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
