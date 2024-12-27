
# Button Component

The Button component creates an interactive button element.

## Usage

```javascript
app.add(Button("Click Me", () => {
  console.log("Button clicked!");
}));
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| label | string | Button text |
| onClick | function | Click handler |
| disabled | boolean | Disable state |
| variant | 'primary' \| 'secondary' | Button style |