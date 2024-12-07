import React from 'react';
import { Card, Image, Button, CardBody, Center} from '@yamada-ui/react';

type DetailModalProps = {
  src: string;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = (props) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <Center className='h-screen items-center'>
        <Card backgroundColor='white' position='relative' width='70%' top='-1/2'>
          <CardBody p='3%'>
            <Image src={props.src} alt="photo" />
          </CardBody>
          <Button onClick={props.onClose} textColor='black'>Close</Button>
        </Card>
      </Center>
    </div>
  );
};

export default DetailModal;
