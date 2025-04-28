import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={css.link}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
