import React from "react";
import { Col, Row } from "react-bootstrap";

const CategoryI = ({ filterByCategory, allCategory }) => {
  const onFiltr = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <div>
                <button
                  onClick={() => {
                    onFiltr(cat);
                  }}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h3>لا يوجد تصنيفات الان</h3>
        )}
      </Col>
    </Row>
  );
};

export default CategoryI;
