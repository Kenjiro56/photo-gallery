'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Flex, Grid, GridItem, CardBody, Card, Image, Button, CardFooter, Text, useBreakpointValue } from "@yamada-ui/react";
import { MicroCMSPhoto } from '@/types/microcmstype';
import DetailModal from '@/app/components/detailModal';
import { Zen_Kurenaido, Sawarabi_Gothic } from "next/font/google";
import { CalendarArrowDownIcon, CalendarArrowUpIcon } from "@yamada-ui/lucide"

const SawarabiGothicFont = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const ZenKurenaidoFont = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
});

type SelectorProps = {
  props: MicroCMSPhoto[];
}

const CategorySelector: React.FC<SelectorProps> = ({props}) => {
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [renderData, setRenderData] = useState<MicroCMSPhoto[]>(props);
  const [categoryItems, setCategoryItems] = useState<SelectItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<MicroCMSPhoto>({
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    image: {
      url: '',
      height: 0,
      width: 0,
    },
    takenAt: '',
    category: [],
    comment: '',
  });
  const [ascFlag, setAscFlag] = useState<boolean>(false);


  useEffect(()=> {
    const categories = new Set<string>();
    props.forEach((photo) => {
      categories.add(photo.category[0]);
    });

    setCategoryItems(
      Array.from(categories).map((category) =>({
        value: category,
        label: category,
      }))
    );
  }, [props]);

  useEffect(() => {
    if (selectCategory === '') {
      setRenderData(props);
    } else {
      setRenderData(props.filter((photo) => photo.category[0] === selectCategory));
    }
  }, [selectCategory, props]);

  useEffect(() => {
    const sortedData = [...renderData].sort((a, b) => {
      const dateA = new Date(a.takenAt).getTime();
      const dateB = new Date(b.takenAt).getTime();
      return ascFlag ? dateA - dateB : dateB - dateA;
    });

    setRenderData(sortedData);
  }, [ascFlag]);

  const modalHandler = (props: MicroCMSPhoto) => {
    setIsOpen(true);
    setModalProps(props);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <>
      <Flex justify='right' gap='2' mb='2'>
        <Button onClick={() => setAscFlag(!ascFlag)} className={ SawarabiGothicFont.className } bg='#fff'>
          { ascFlag ? <CalendarArrowUpIcon fontSize='3xl'/> : <CalendarArrowDownIcon fontSize='3xl' /> }
        </Button>
        <Select
          placeholder="All"
          w="10%"
          border="2px solid #ccc"
          borderRadius="10px"
          items={categoryItems}
          onChange={(value) => setSelectCategory(value)}
          className={ SawarabiGothicFont.className }
          borderColor='#333'
        />
      </Flex>
      <Grid templateColumns={{base: "repeat(3, 1fr)", xl: "repeat(2, 1fr)"}} gap="2%" mb='15%'>
        {renderData.map((photo, index) => (
          <GridItem key={index}>
              <Card backgroundColor='white'>
                <CardBody>
                    <Image src={photo.image.url} alt="photo" onClick={() => modalHandler(photo)} objectFit="cover"/>
                </CardBody>
                {isMobile &&
                  <CardFooter justifyContent="center" className={ZenKurenaidoFont.className}>
                    <Text fontSize='1vw'>
                      { photo.comment }
                    </Text>
                  </CardFooter>
                }
              </Card>
          </GridItem>
        ))}
      </Grid>

      {isOpen && <DetailModal imageInfo={modalProps} onClose={() => setIsOpen(false)}/>}
    </>
  );
};

export default CategorySelector;
