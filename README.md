# Steamlit 🚀  
A lightweight Node.js framework for building reactive, data-driven web apps with minimal effort.

---

## Features ✨  
- **Reactive Components**: Build dynamic UIs with auto-updates.  
- **Easy API**: Simple functions to create interactive widgets like buttons, sliders, and charts.  
- **Data Visualization**: Built-in support for rendering graphs and charts.  
- **Fast Setup**: Spin up your app instantly with minimal configuration.  
- **Customizable**: Extend functionality with your favorite Node.js libraries.  

---

## Getting Started 🛠️  

### Installation  
```bash
npm install steamlit
```

### Example App  
Here’s a quick example to get started:  
```javascript
const { App, Button, Chart } = require('steamlit');

const app = new App();

app.page("Dashboard", () => {
    const data = [10, 20, 30, 40, 50];
    app.add(Chart("Line", { data }));

    app.add(Button("Click Me", () => {
        console.log("Hello from Steamlit!");
    }));
});

app.run();
```

Run the app:  
```bash
node app.js
```

Open your browser at `http://localhost:3000` to view your app.

---

## Documentation 📚  
Check out the [Documentation](#) for detailed usage instructions and advanced features.

---

## Contributing 🤝  
We welcome contributions!  
1. Fork the repository.  
2. Create a new branch for your feature/bugfix.  
3. Submit a pull request.

---

## License 📜  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
