import React from 'react';
import { Select, SelectItem, Flex } from "@yamada-ui/react";


export default async function Test() {
  const category_items: SelectItem[] = [
    { value: 'food', label: 'food' },
    { value: 'nature', label: 'nature' },
    { value: 'life', label: 'life' },
  ];
  return (
    <div>
      <Flex justify='right' mb='20'>
        <Select
          placeholder="Category"
          placeholderInOptions={false}
          w="10%"
          border="2px solid #ccc"
          borderRadius="10px"
          items={category_items}
        />
      </Flex>
    </div>
  );
}
