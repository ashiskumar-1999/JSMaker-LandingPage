import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Heading
} from '@chakra-ui/core';

function FeatureTabs({ data, currentIndex, handleChange }) {
  return (
    <Accordion
      mr={['auto', 'auto', '40px', '60px']}
      ml={['auto', 'auto', 'none', 'none']}
      index={currentIndex}
      onChange={handleChange}
    >
      {data.map((item, itemIndex) => (
        <AccordionItem
          key={item.title}
          backgroundColor={currentIndex === itemIndex ? 'blue.50' : 'white'}
          color={currentIndex === itemIndex ? 'white' : 'black'}
          border="none"
          borderRadius={4}
          outline="none"
        >
          <AccordionHeader border="none" outline="none">
            <Heading size="lg" flex="1" textAlign="left">
              {item.title}
            </Heading>
          </AccordionHeader>
          <AccordionPanel pb={4}>{item.detail}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FeatureTabs;
