import { FC, useEffect, useState } from "react";
import QuotesList from "./QuotesList";
import { fetchRandomQuote, Quote } from "./utils";

export const InitialQuote: FC = () => {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchRandomQuote()
      .then(setQuote)
      .catch(() => setError("Error loading quote"));
  }, []);

  if (!quote) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <QuotesList quotes={[quote]} />;
};
