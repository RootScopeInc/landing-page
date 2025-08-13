import { Cpu, History, Terminal } from "lucide-react";

export const features = [
  {
    title: "Kernel-level capture, black-box replay",
    description:
      "Record syscalls and critical system events directly from Linux and replay what actually happened — even when logs are missing, rotated, or incomplete.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Searchable, millisecond-accurate timeline",
    description:
      "Trace the exact chain of processes, file I/O, mounts, and device changes leading to a failure with a fast, queryable timeline.",
    icon: <History className="w-6 h-6" />,
  },
  {
    title: "CLI-first and shareable traces",
    description:
      "Use a clean CLI to capture and share minimal trace artifacts so teammates can replay the issue without reproducing it from scratch.",
    icon: <Terminal className="w-6 h-6" />,
  },
];
