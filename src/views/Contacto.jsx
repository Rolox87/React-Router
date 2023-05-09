import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
  return (
    <Form >
      <h2 className='text-center'>Cuentanos, ¿en qué te podemos ayudar?</h2>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger mx-auto d-block" type="submit">
        Enviar
      </Button>
    </Form>
  );
}


export default Contacto
