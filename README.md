# fab ui

A modern registry of React and Next.js components, built on top of Base UI and beyond. Open source, accessible, customizable

## Installation

Install components directly into your project using the shadcn CLI:

```bash
npx shadcn@latest add https://fab-ui.com/r/input.json
```

Or configure the registry in your `components.json`:

```json
{
  "$schema": "https://shadcn.com/schema.json",
  "registries": {
    "fab-ui": "https://fab-ui.com/r/{name}.json"
  }
}
```

Then add components:

```bash
npx shadcn@latest add fab-ui/input
```

## Usage

Components are copied directly into your project, giving you full control:

```tsx
import { Input } from "@/components/ui/input"

export default function Page() {
  return <Input placeholder="Email" />
}
```

## License

MIT
