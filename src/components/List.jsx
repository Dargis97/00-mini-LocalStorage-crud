import { useContext } from 'react';
import DataContext from './DataContext';
import Row from './Row';

function List() {
  const { things } = useContext(DataContext);
  return (
    <div className='card'>
      <div className='top'>List of Things</div>
      <div className='body'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Animal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {things?.map((t) => (
              <Row key={t.id} thing={t} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
