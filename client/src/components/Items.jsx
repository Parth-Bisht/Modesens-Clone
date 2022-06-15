import styled from "styled-components";
import { useEffect, useState } from "react";
import styles from './Beauty/Pagination.module.css';

import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;
const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  width: 85%;
  position: absolute;
  font-weight: bold;
  top: 56%;
  bottom: 34%;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
`;
const Container = styled.div`
  border: 1px solid #f5f5f5;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
  height: 370px;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 100%;
  width: 90%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;
const HeartDIv = styled.div`
  position: absolute;
  left: 88%;
  bottom: 93%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  margin-top: -40px;

  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
    margin: 0;
  }
`;
const HeartImg = styled.img``;

const ProductItem = () => {
  const [page,setPage]=useState(1)
  const [items, setItems] = useState([]);
  useEffect(() => {
    getdata();
    // console.log("data recieved")
    // console.log(page)
  }, [page]);

  async function getdata() {
    let datas = await fetch(`https://modesense-masai.herokuapp.com/beuties?_page=${page}&_limit=16`);

    let data = await datas.json();
    setItems(data.data);
  }
  const handleUser = (e) => {
    localStorage.setItem("IndData", JSON.stringify(e));
  };

  return (
    <div>
     <div className={styles.pagdiv}>
     
     <div className={styles.paginationWrap}>
       <div className={styles.pagination}>
         <span  onClick={() => setPage(1)}>1</span>
         <span  onClick={() => setPage(2)}>2</span>
         <span  onClick={() => setPage(3)}>3</span>
         <span  onClick={() => setPage(4)}>4</span>
         <div className={styles.paginationDot}>
           <c>.</c>
           <c>.</c>
           <c>.</c>
         </div>
         
         <div className={styles.imgTag}>
         <img src="https://img.icons8.com/material-outlined/14/000000/more-than.png"  onClick={() => setPage(page+1)} alt=""/></div>
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
      <Wrapper>
        {items.map((e) => {
          return (
            <Container
              onClick={() => {
                handleUser(e);
              }}
            >
              <Link to={`${e._id}`} style={{textDecoration:"none"}}>
                <HeartDIv>
                  <HeartImg src="https://cdn.modesens.com/static/img/20210601heart.svg" alt=""/>
                </HeartDIv>
                <div
                  style={{
                    display: "flex",
                    border: "none",
                    justifyContent: "center",
                    padding: "20px 8px",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <SlideItem src={e.image_url} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button>Quick View</Button>
                </div>
                <TextDiv>
                  <h5
                    style={{
                      color: "black",
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {e.brand}
                  </h5>
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      color: "gray",
                    }}
                  >
                    {e.title}
                  </p>
                  <h6
                  style={{
                      color: "black"
                    }}
                  >
                    ${e.price}-${e.offprice}
                  </h6>
                  <span style={{color:"gray"}}>
                    {Math.floor(Math.random() * (20 - 5 + 1)) + 5}-store
                  </span>
                </TextDiv>
              </Link>
            </Container>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default ProductItem;
