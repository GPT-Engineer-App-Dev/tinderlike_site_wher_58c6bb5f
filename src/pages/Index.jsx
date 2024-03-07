import React, { useState } from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const moodCards = [
  {
    mood: "Happy",
    image: 'https://images.unsplash.com/photo-1620216464337-69f08c564cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweXxlbnwwfHx8fDE3MDk4MjExNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    description: "Feeling joyful and content",
  },
  {
    mood: "Energized",
    image: 'https://images.unsplash.com/photo-1629570887218-a3da69b1ece5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWR8ZW58MHx8fHwxNzA5ODIxMTYzfDA&ixlib=rb-4.0.3&q=80&w=1080',
    description: "Ready to take on anything!",
  },
  {
    mood: "Tired",
    image: 'https://images.unsplash.com/photo-1657029941667-68b0038af164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZHxlbnwwfHx8fDE3MDk4MjExNjR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    description: "Need some rest and relaxation",
  },
  {
    mood: "Anxious",
    image: 'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzfGVufDB8fHx8MTcwOTgyMTE2NXww&ixlib=rb-4.0.3&q=80&w=1080',
    description: "Feeling uneasy or nervous",
  },
  {
    mood: "Motivated",
    image: 'https://images.unsplash.com/photo-1521669246297-b04a27e36f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWR8ZW58MHx8fHwxNzA5ODIxMTY5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    description: "Driven to achieve goals",
  },
];

const Index = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const toast = useToast();

  const handleSwipe = (direction) => {
    if (direction === "left" && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else if (direction === "right" && currentCard < moodCards.length - 1) {
      setCurrentCard(currentCard + 1);
    }

    toast({
      title: `Mood logged: ${moodCards[currentCard].mood}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="xl" centerContent>
      <Heading as="h1" size="xl" my={8}>
        How are you feeling today?
      </Heading>
      <Stack spacing={4} align="center">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" w="100%" maxW="md">
          <Image src={moodCards[currentCard].image} alt={moodCards[currentCard].mood} borderRadius="md" />
          <Heading as="h3" size="lg" mt={4}>
            {moodCards[currentCard].mood}
          </Heading>
          <Text mt={2}>{moodCards[currentCard].description}</Text>
        </Box>
        <Flex justify="space-between" w="100%" maxW="md">
          <Button leftIcon={<FaArrowLeft />} colorScheme="teal" variant="outline" onClick={() => handleSwipe("left")} isDisabled={currentCard === 0}>
            Previous
          </Button>
          <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={() => handleSwipe("right")} isDisabled={currentCard === moodCards.length - 1}>
            Next
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
