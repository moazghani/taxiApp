// src/components/Autocomplete.tsx
import React, { useEffect, useRef, useState } from "react";

interface AutocompleteProps {
  onAddressSelect: (address: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ onAddressSelect }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        types: ["geocode"], // You can restrict types (geocode for full address)
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          onAddressSelect(place.formatted_address);
          setQuery(place.formatted_address);
        }
      });
    }
  }, [onAddressSelect]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter an address"
        className="autocomplete-input"
      />
      {/* Optional: Debugging output */}
      <p>{query}</p>
    </div>
  );
};

export default Autocomplete;