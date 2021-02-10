import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
 

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
      <footer>
          <Container>
              <Row>
                  <Col className='text-center py-3 '>
                    Copyright &copy; AwesomeShop  <p>{getCurrentYear()}</p>
             
                   
                   </Col>
              </Row>
          </Container>
      
    </footer>
  );
}

export default Footer
