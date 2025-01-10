# MultiColor Window

This project demonstrates a simple interactive webpage that dynamically changes its background color on button clicks. It uses **HTML**, **Tailwind CSS**, and **JavaScript** to implement a visually appealing and functional UI.

## Features
- **Dynamic Background Colors**: The webpage cycles through a variety of colors each time the button is clicked.
- **Responsive Design**: Styled using Tailwind CSS to ensure compatibility across different devices and screen sizes.
- **Interactive UI**: A button triggers the color change and adds a fun, engaging user experience.

## Technologies Used
- **HTML5**: For the structure and content of the webpage.
- **Tailwind CSS**: For responsive and modern styling.
- **JavaScript**: For implementing the dynamic color-changing functionality.

## Project Structure
```
MultiColorWindow/
│
├── index.html        # Main HTML file containing the structure of the webpage
├── script.js         # JavaScript file with the logic for dynamic color changes
├── icons/
│   └── icon.png      # Favicon for the webpage
└── README.md         # Documentation of the project
```

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SmarterOps/MultiColor-Window.git
   cd MultiColorWindow
   ```

2. **Open the HTML File**
   - Open the `index.html` file in your favorite web browser.

3. **Enjoy the Interactive Webpage**
   - Click the **"Click Me"** button to cycle through different background colors.

## Customization
- **Adding More Colors**:
  You can expand the color palette by adding more colors to the `colors` array in the `script.js` file.
  ```javascript
  const colors = [
    'AliceBlue',
    'AntiqueWhite',
    // Add your custom colors here
  ];
  ```
- **Styling the Button**:
  Update the Tailwind CSS classes in the `index.html` file to modify the button's appearance.

## Preview
![alt text](preview.png)

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Feel free to fork the repository and submit pull requests to enhance the project.

## Acknowledgments
- **Tailwind CSS** for the amazing styling framework.
- **Mozilla Developer Network (MDN)** for excellent documentation on JavaScript and web development.

---

Start experimenting and have fun with colors! 🌈
