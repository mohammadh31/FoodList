import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      <Zoom Bottom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: " #f8f8f8" }}
                >
                  <Card.Img
                    style={{ width: "252px" }}
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">
                        {item.description}{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
};
export default ItemsList;
