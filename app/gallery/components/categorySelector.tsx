'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Flex, Grid, GridItem, CardBody, Card, Image } from "@yamada-ui/react";
import { MicroCMSPhoto } from '@/types/microcmstype';

type SelectorProps = {
  props: MicroCMSPhoto[];
}

const CategorySelector: React.FC<SelectorProps> = ({props}) => {
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [renderData, setRenderData] = useState<MicroCMSPhoto[]>(props);
  const [categoryItems, setCategoryItems] = useState<SelectItem[]>([]);


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

  return (
    <>
      <Flex justify='right' mb='20'>
        <Select
          placeholder="Category"
          placeholderInOptions={false}
          w="10%"
          border="2px solid #ccc"
          borderRadius="10px"
          items={categoryItems}
          onChange={(value) => setSelectCategory(value)}
        />
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap="2%" mb='5%'>
        {renderData.map((photo, index) => (
          <GridItem key={index}>
              <Card backgroundColor='white'>
                <CardBody p='5%'>
                    <Image src={photo.image.url} alt="photo" />
                </CardBody>
              </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default CategorySelector;
