import { TTDDialog } from "@excalidraw/excalidraw";

// Mermaid-to-Excalidraw only — the AI-backed "text to diagram" chat and the
// frame "Generate code" action have been removed for this offline build,
// since both call out to Excalidraw's cloud AI backend.
export const AIComponents = () => {
  return <TTDDialog />;
};
