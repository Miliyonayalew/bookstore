import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Catagories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <div>
      <h1>Categories</h1>
      <p>{status}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Catagories;
