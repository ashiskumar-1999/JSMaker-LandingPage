import React from 'react';
import { Box, Image, Grid, Flex } from '@chakra-ui/core';
import FeatureTabs from './FeatureTabs.js';

const featuresData = [
  {
    title: 'Dashboard that you Love',
    detail:
      'While you focus on creating good content for your audience, we make sure that your dashboard look clean, calmer and feels more welcoming.',
    src:
      'https://res.cloudinary.com/emishalabs/image/upload/v1598112697/dashboard_blj32g.png'
  },
  {
    title: 'Import your artcles',
    detail:
      'We make it seamless for you to import your articles but it’s always good to start off fresh.',
    src:
      'https://res.cloudinary.com/emishalabs/image/upload/v1598112697/dashboard_blj32g.png'
  }
];

const Features = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = React.useState(0);

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      gap={[10, 10, 20, 20]}
      px={['30px', '30px', '60px', '100px']}
      py={['none', 'none', '60px', '60px']}
    >
      <Box boxShadow="0px 40px 80px rgba(139, 142, 149, 0.2)">
        <Image src={featuresData[selectedFeatureIndex].src} />
      </Box>
      <Flex flexDirection="column">
        <FeatureTabs
          data={featuresData}
          currentIndex={selectedFeatureIndex}
          handleChange={setSelectedFeatureIndex}
        />
      </Flex>
    </Grid>
  );
};

export default Features;
