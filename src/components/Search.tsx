import { useState } from "react";
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
  return (
    <>
      <Button
        variant="outline"
        className="relative flex justify-between w-64 text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-4">
          <SearchIcon />
          Quick Search...
        </div>
        <label>Ctrl k</label>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
