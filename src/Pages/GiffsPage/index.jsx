import React, { useState } from "react";
import { GIPHY_API_KEY, GIPHY_URL } from "../../config/api";
import useAPI from "../../hooks/useAPI";

const GiffsPage = () => {
  const [search, setSearch] = useState("");

  const config = {
    params: {
      api_key: GIPHY_API_KEY,
      q: search,
    },
  };

  const url = `${GIPHY_URL}/gifs/search`;

  const { get, data } = useAPI(url, config);

  const handlesubmit = (e) => {
    e.preventDefault();
    get(config);
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form onSubmit={handlesubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for GIFs"
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#5cb85c",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Search
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "10px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={item.images.downsized_medium.url}
              alt={item.title}
              style={{
                maxWidth: "200px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiffsPage;
