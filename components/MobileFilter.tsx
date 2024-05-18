"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import React, { useState } from "react";
import FilterProducts from "./FilterProducts";

const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("bottom");

  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Filter Product</Button>
      <Modal
        isOpen={isOpen}
        // placement={modalPlacement}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Filter Products
              </ModalHeader>
              <ModalBody>
                <FilterProducts />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MobileFilter;
