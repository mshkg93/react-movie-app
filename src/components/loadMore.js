import {useDispatch} from 'react-redux';

export default function LoadMore({func, page}) {
  const dispatch = useDispatch();
  const handleFetchMorePages = () => {
    dispatch(func(page + 1));
  };
  return <button onClick={handleFetchMorePages}>Load more</button>;
}
