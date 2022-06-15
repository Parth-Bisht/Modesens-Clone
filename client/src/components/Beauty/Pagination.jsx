import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagdiv}>
      <div className={styles.ButtonDiv}>
        <button>SAVE MY SEARCH</button>
      </div>
      <div className={styles.paginationWrap}>
        <div className={styles.pagination}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <div className={styles.paginationDot}>
            <c>.</c>
            <c>.</c>
            <c>.</c>
          </div>
          
          <div className={styles.imgTag}>
          <img src="https://img.icons8.com/material-outlined/14/000000/more-than.png" alt=""/></div>
        </div>
      </div>
      <div className={styles.sortdiv}>
        <img
          className={styles.viewsort}
          src="https://cdn.modesens.com/static/img/20210908column2.svg"
          alt=""
        />
        <img
          className={styles.viewsort}
          src="https://cdn.modesens.com/static/img/20210908column3.svg"
          alt=""
        />
        <img
          className={styles.viewsort}
          src="https://cdn.modesens.com/static/img/20210908column4_active.svg"
          alt=""
        />
        <div>
          <select className="options" name="" id="">
            <option value="">Best Sellers</option>
            <option value="">New Arrivals</option>
            <option value="">Most Liked</option>
            <option value="">Highest Price</option>
            <option value="">Lowest Price</option>
            <option value="">New Sales</option>
            <option value="">Largest Discount Amount</option>
            <option value="">Largest Discount Percentage</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Pagination
