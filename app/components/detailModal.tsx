import React from 'react';
import { Card, Image, Button, CardBody, Center } from '@yamada-ui/react';

type DetailModalProps = {
  src: string;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = (props) => {
  return (
    <Center>
      <Card backgroundColor='white' position='fixed' top='10%' width='80%'>
        <CardBody p='3%'>
          <Image src={props.src} alt="photo" />
        </CardBody>
        <Button onClick={props.onClose} textColor='black'>Close</Button>
      </Card>
    </Center>
  );
};

export default DetailModal;
