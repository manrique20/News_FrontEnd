import { Card, Col, Row } from 'react-bootstrap'
import "./Subsection.css"


const Subsection = ({ title, summary, imageUrl, createdBy }) => {
  return (
    <div className="mb-3">
      <Row className="g-0">
        <Col md={8}>
          <Card.Body>
            <Card.Title className={"title"} style={{ fontSize: '2rem' }}>{title}</Card.Title>
            <Card.Text>
              {summary}
            </Card.Text>
            <small className="text-muted">Made by: {createdBy}</small>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={imageUrl} alt="News Image" />
        </Col>
      </Row>
      <hr/>
    </div>
  )
}

export default Subsection