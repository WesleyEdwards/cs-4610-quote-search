import { useState } from "react";
import { fetchQuotes, Quote } from "./utils";
import { QuotesList } from "./QuotesList";

function App() {
  const [quotes, setQuotes] = useState<Quote[] | undefined>([]);
  const [name, setName] = useState<string>();
  const [error, setError] = useState<string>();
  const [hover, setHover] = useState<boolean>(false);

  const handleSubmit = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          style={{
            fontSize: "1.25rem",
          }}
          placeholder="Enter a name"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: hover ? "lightgray" : "white",
            border: "1px solid black",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Search
        </button>
      </div>

      {(() => {
        if (error) {
          return <p>{error}</p>;
        }
        if (quotes === undefined) {
          return <p>Loading...</p>;
        }
        if (quotes.length === 0) {
          return (
            <div>
              <h3>Enter a name to search for quotes!</h3>
            </div>
          );
        }
        return <QuotesList quotes={quotes} />;
      })()}
    </div>
  );
}

export default App;
