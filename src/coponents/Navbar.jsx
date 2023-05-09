import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className='bg-danger d-flex mb-5'
     
    >
      <Nav.Item>
        <Nav.Link className="text-white text-decoration-none" href='/Home'>🏠Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white text-decoration-none" href='/Contacto'>📒Contacto</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
        <Nav.Link className="text-white text-decoration-none" href='/home'>Happy Cake 🍰</Nav.Link>
      </Nav.Item>
  
    </Nav>
  );
}

export default Navbar;