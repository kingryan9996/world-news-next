// import Todo from './Todo';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../types/NewsQuery';
import { INews } from '../../../types/News';
// import { getTodos } from '../../helper/api';

export default function TodoList() {
//   const { data: news } = useQuery<INews[]>(queryKeys.news, getTodos, {
//     notifyOnChangeProps: 'tracked',
//   });
//   console.log('TODO LIST RENDERING');

  return (
    <ul style={{ width: '100%' }}>
      {/* {todos?.length
        ? todos.map((todo, i) => <Todo {...todo} key={todo.id} />)
        : null} */}
    </ul>
  );
}