import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

interface ILayout {
  children: React.ReactNode;
  classname?: string;
  title?: string;
  isOpen?: boolean;
  toggle?: any;
}

const ChartModal: React.FC<ILayout> = ({
  children,
  classname,
  title,
  isOpen,
  toggle,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className={classname} size={"md"}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default ChartModal;
