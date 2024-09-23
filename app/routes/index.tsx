import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return <h1 className="text-xl">Hello World</h1>;
  },
});
