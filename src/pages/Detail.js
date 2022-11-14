import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Nav } from "react-bootstrap";

const YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let findItem = props.shoes.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  //   let findItem = props.shoes.find(function (x) {
  //     return x.id == id;
  //   });

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000); // 스위치 조작방식
    return () => {
      clearTimeout(a); // 타이머 제거해주는 함수임
    };
  }, []); // useEffect 실행 조건 넣을 수 있는 곳은 [] (count 변수가 변할때 마다 실행)

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <YellowBtn bg="orange">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            evenKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabConent tab={tab} />
    </div>
  );
}
function TabConent(props) {
  if (props.tab === 0) {
    return <div>내용0</div>;
  } else if (props.tab === 1) {
    return <div>내용1</div>;
  } else if (props.tab === 2) {
    return <div>내용2</div>;
  }
}
export default Detail;
