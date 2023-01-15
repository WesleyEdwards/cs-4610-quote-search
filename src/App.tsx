import { useEffect, useState } from "react";
import { fetchQuotes, fetchRandomQuote, Quote } from "./utils";
import { QuotesList } from "./QuotesList";
import { SearchBox } from "./SearchBox";
import { InitialQuote } from "./InitialQuote";

function App() {
  const [quotes, setQuotes] = useState<Quote[] | undefined>([]);
  const [error, setError] = useState<string>();

  const handleSubmit = (name: string | undefined) => {
    if (!name) {
      setError("Please enter a name.");
      return;
    }
    setError(undefined);
    setQuotes(undefined);

    return fetchQuotes(name)
      .then((quoteRes) => {
        setQuotes(quoteRes.results);
        if (quoteRes.results.length === 0) {
          setError("No quotes found");
        }
      })
      .catch(() => setError("Error loading quotes"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Quote Search</h1>

      <SearchBox handleSubmit={handleSubmit} />

      {(() => {
        if (error) {
          return <p>{error}</p>;
        }
        if (quotes === undefined) {
          return <p>Loading...</p>;
        }
        if (quotes.length === 0) {
          return <InitialQuote />;
        }
        return <QuotesList quotes={quotes} />;
      })()}
    </div>
  );
}

export default App;
