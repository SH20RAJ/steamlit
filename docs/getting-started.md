
# Getting Started with Steamlit

## Installation

```bash
npm install steamlit
```

## Basic Setup

Create your first app in just a few lines:

```javascript
const { App } = require('steamlit');
const app = new App();

app.page("Hello", () => {
  app.text("Hello, Steamlit!");
});

app.run();
```

## Next Steps

- Learn about [Core Concepts](./core-concepts.md)
- Explore [Components](./components/README.md)
- Check out [Examples](./examples/README.md)