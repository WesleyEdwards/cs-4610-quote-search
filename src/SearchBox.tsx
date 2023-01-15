import { FC, FormEventHandler, useState } from "react";

interface SearchBoxProps {
  handleSubmit: (name: string | undefined) => void;
}

export const SearchBox: FC<SearchBoxProps> = (props) => {
  const { handleSubmit } = props;
  const [hover, setHover] = useState<boolean>(false);
  const [name, setName] = useState<string>();

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    handleSubmit(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          maxWidth: "24rem",
        }}
      >
        <input
          type="text"
          style={{
            fontSize: "1rem",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            width: "100%",
          }}
          placeholder="Thomas Jefferson"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
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
    </form>
  );
};
