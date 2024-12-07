import React from 'react';
import { Card, Image, Button, CardBody, Center, CardFooter, Text, Tag } from '@yamada-ui/react';
import { Zen_Kurenaido } from "next/font/google";
import { MicroCMSPhoto } from '@/types/microcmstype';

const ZenKurenaidoFont = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
});

type DetailModalProps = {
  imageInfo: MicroCMSPhoto;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = (props) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <Center className='h-screen items-center'>
        <Card backgroundColor='white' position='relative' width='70%'>
          <CardBody>
            <Image src={props.imageInfo.image.url} alt="photo" />
          </CardBody>
          <CardFooter justifyContent="center">
            <Tag>
              { props.imageInfo.category[0] }
            </Tag>
            <Text className={ZenKurenaidoFont.className}>
              { props.imageInfo.comment }
            </Text>
          </CardFooter>
          <Button onClick={props.onClose} textColor='black'>Close</Button>
        </Card>
      </Center>
    </div>
  );
};

export default DetailModal;
