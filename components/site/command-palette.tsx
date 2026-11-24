"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ui-sdk/react/command";
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog";
import { email, projects } from "./content";

const linked = projects.filter((p) => p.url);

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger shortcut="mod+k" className="dl-kbd" aria-label="Search or jump to">
        <Search aria-hidden="true" size={14} />
        <span>Search or jump to…</span>
        <DialogShortcut className="dl-kbd-key" />
      </DialogTrigger>
      <DialogBackdrop className="dl-backdrop" />
      <DialogContent className="dl-palette">
        <DialogTitle className="dl-sr">Command palette</DialogTitle>
        <Command
          onAction={(value) => {
            setOpen(false);
            if (value === "email") {
              void navigator.clipboard?.writeText(email);
              return;
            }
            const project = linked.find((p) => p.id === value);
            if (project?.url) {
              window.open(project.url, "_blank", "noopener");
              return;
            }
            document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="dl-palette-input">
            <Search aria-hidden="true" size={16} />
            <CommandInput
              aria-label="Search commands"
              placeholder="Type a project or section…"
            />
          </div>
          <CommandEmpty className="dl-palette-empty">Nothing matches.</CommandEmpty>
          <CommandList className="dl-palette-list">
            <CommandGroup>
              <CommandGroupLabel>Projects</CommandGroupLabel>
              {linked.map((p) => (
                <CommandItem key={p.id} value={p.id} keywords={[p.title]}>
                  <span>{p.title}</span>
                  <ArrowUpRight aria-hidden="true" size={14} />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup>
              <CommandGroupLabel>Go to</CommandGroupLabel>
              <CommandItem value="work">Selected work</CommandItem>
              <CommandItem value="contact">Contact</CommandItem>
            </CommandGroup>
            <CommandGroup>
              <CommandGroupLabel>Actions</CommandGroupLabel>
              <CommandItem value="email" keywords={["copy", "mail"]}>
                <span>Copy email address</span>
                <Mail aria-hidden="true" size={14} />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
