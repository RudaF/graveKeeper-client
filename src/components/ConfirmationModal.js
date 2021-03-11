import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ConfirmationModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.mainMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          {props.closeModal}
        </Button>
        <Link className="btn btn-danger" to={props.action}>
          {props.redirectPageButton}
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
