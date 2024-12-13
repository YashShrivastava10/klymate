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

const Search = () => {
  const [open, setOpen] = useState(false);

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
        <CommandInput placeholder="Search Cities..." />
        <CommandList>
          <CommandEmpty>No city found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Hyderabad</CommandItem>
            <CommandItem>Pune</CommandItem>
            <CommandItem>Delhi</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
