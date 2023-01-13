import React, { FC } from "react";
import { Quote } from "./utils";

interface QuotesListProps {
  quotes: Quote[];
}

export const QuotesList: FC<QuotesListProps> = (props) => {
  const { quotes } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "32rem",
      }}
    >
      {quotes.map((quote) => {
        return (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "1rem",
              margin: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
            key={quote._id}
          >
            <p>{quote.content}</p>
            <p
              style={{
                alignSelf: "end",
              }}
            >
              - {quote.author}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default QuotesList;
