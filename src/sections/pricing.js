/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Basic plan',
    subtitle: 'For independent event organaisers',
    amount: {
      monthly: 10,
      annual: 8,
    },
    isRecommended: false,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Automatically generate e-tickets on demand',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Keep track of your ticket sales`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Reconcile tickets at the door with smart tags`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Unlimited events and entrance controll users`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
  {
    id: 2,
    title: 'Premium Plan',
    subtitle: 'For the pro event organisers that plan multiple events',
    amount: {
      monthly: 15,
      annual: 12,
    },
    isRecommended: true,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Everething in the basic plan',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Unlimited events and entrace controll users`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Keep track of cashflow`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Unlimited download of courses on the mobile app contents`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
