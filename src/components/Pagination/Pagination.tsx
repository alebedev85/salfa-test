import { Pagination } from '@mui/material';
import { setPage, paginationSelector } from '../../redux/slices/paginationSlice/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Pagination.module.scss';

export default function PaginationFeild() {
  const dispatch = useAppDispatch();
  const { page, pages } = useAppSelector(paginationSelector);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };
  return (
    <div className={styles.pagination}>
      <Pagination
        count={pages}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
      />
    </div>
  );
}