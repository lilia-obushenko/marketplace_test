import { useEffect, useState } from "react";

export const useDebouncedQuery = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [query]);

  return {
    query,
    setQuery,
    debouncedQuery,
  };
};
