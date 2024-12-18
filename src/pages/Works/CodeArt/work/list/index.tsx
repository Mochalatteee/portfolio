import { FC } from 'react';
import { ListContext } from './context';

interface ListProps {
  theme: 'Mondrian' | 'Monet' | 'DunHuang' ;
}

const List: FC<ListProps> = ({ theme }) => <ListContext theme={theme} />;

export default List;