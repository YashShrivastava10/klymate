import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useNavigate } from "react-router-dom";
import useLocationCoordinate from "@/hooks/useLocationCoordinate";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const { data: citySuggestions, isLoading } = useLocationCoordinate(city);

  // Keyboard shortcut for search using ctrl k
  useEffect(() => {
    const handleQuickSearch = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", handleQuickSearch);

    return () => document.removeEventListener("keydown", handleQuickSearch);
  }, []);

  const handleSelectCity = (value: string) => {
    setOpen(false);
    const [name, lat, lon] = value.split("-");
    navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative flex justify-between w-40 md:w-64 text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-4">
          <SearchIcon />
          <label className="hidden md:block">Quick Search...</label>
          <label className="block md:hidden">Search...</label>
        </div>
        <label className="hidden md:block">Ctrl k</label>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search Cities..."
          value={city}
          onValueChange={(search) => setCity(search)}
        />
        <CommandList>
          {/* No city found message */}
          {city.length < 3 && !isLoading && (
            <CommandEmpty>No city found.</CommandEmpty>
          )}

          {/* Suggestion */}
          {citySuggestions && citySuggestions.length > 0 && (
            <CommandGroup heading="Suggestions">
              {isLoading && <div>Loading...</div>}
              {citySuggestions?.map((city) => (
                <CommandItem
                  key={`${city.lat}-${city.lon}`}
                  value={`${city.name}-${city.lat}-${city.lon}`}
                  onSelect={handleSelectCity}
                >
                  {city.name}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
