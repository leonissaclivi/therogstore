import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modals from './Modals';

function Cards({title,description,imgSrc,modalTarget}) {
  return (
    <Card className='productCards' style={{}}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        {/* <Button variant="danger">Buy Now</Button> */}
        <Modals/>
      </Card.Body>
    </Card>
  );
}

export default Cards;