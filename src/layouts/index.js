import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={ styles.normal }>
      <div className={ styles.title }>
        <Link to="/">Home</Link> |
        <Link to="/posts">Posts</Link>
      </div>

      { props.children }
    </div>
  );
}

export default BasicLayout;
