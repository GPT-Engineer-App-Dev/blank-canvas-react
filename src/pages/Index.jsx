import { Container, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { supabase } from "../integrations/supabase/index.js";
import { useState, useEffect } from "react";

const Index = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let { data, error } = await supabase.from('events').select('*');
        if (error) throw error;
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Events</Text>
        {events.map((event) => (
          <Text key={event.id}>{event.name}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;