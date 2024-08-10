<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Simple Calculator</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            color: #333;
        }

        .container {
            width: 80%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }

        h2 {
            color: #ff7e5f;
            border-bottom: 2px solid #ff7e5f;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .section {
            margin-bottom: 30px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin-bottom: 10px;
        }

        a {
            color: #ff7e5f;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .social-links a {
            display: inline-block;
        }

        .social-links img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Simple Calculator</h1>
        <div class="section">
            <h2>Overview</h2>
            <p>A modern and visually appealing web-based calculator built with HTML, CSS, and JavaScript. This calculator features a clean design, smooth animations, and a user-friendly interface. It supports basic arithmetic operations and provides a responsive layout for various screen sizes.</p>
        </div>
        <div class="section">
            <h2>Features</h2>
            <ul>
                <li><strong>Modern Design</strong>: Sleek and attractive UI with a responsive layout.</li>
                <li><strong>Smooth Animations</strong>: Enjoy fluid button interactions and transitions.</li>
                <li><strong>Basic Operations</strong>: Supports addition, subtraction, multiplication, and division.</li>
                <li><strong>Clear Functionality</strong>: Includes an "All Clear" button for resetting the calculator.</li>
                <li><strong>Modulus Operation</strong>: Calculate remainders with the modulus operator.</li>
                <li><strong>Responsive Layout</strong>: Optimized for different devices and screen sizes.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Installation</h2>
            <p>To run this project locally, follow these steps:</p>
            <ol>
                <li><strong>Clone the repository:</strong></li>
                <pre><code>git clone https://github.com/yourusername/simple-calculator.git</code></pre>
                <li><strong>Navigate to the project directory:</strong></li>
                <pre><code>cd simple-calculator</code></pre>
                <li><strong>Open <code>index.html</code> in your web browser.</strong></li>
                <p>You can also use a local server to view the project. For example, you can use Python's built-in HTTP server:</p>
                <pre><code>python -m http.server</code></pre>
                <p>Then open <code>http://localhost:8000</code> in your web browser.</p>
            </ol>
        </div>
        <div class="section">
            <h2>Usage</h2>
            <ul>
                <li>Click on the numeric buttons to input numbers.</li>
                <li>Use the operator buttons (<code>+</code>, <code>-</code>, <code>×</code>, <code>÷</code>, <code>%</code>) to perform calculations.</li>
                <li>Press <code>=</code> to calculate the result.</li>
                <li>Use <code>AC</code> to clear all inputs and start a new calculation.</li>
                <li>The backspace button (<code>⌫</code>) allows you to remove the last entered character.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Technologies Used</h2>
            <ul>
                <li><strong>HTML</strong>: Markup language used for the structure of the calculator.</li>
                <li><strong>CSS</strong>: Stylesheet language used for design and layout.</li>
                <li><strong>JavaScript</strong>: Programming language used for calculator functionality.</li>
                <li><strong>Flask</strong> (Optional): For serving the static files if using Flask.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Contact</h2>
            <p>For any questions or feedback, please contact:</p>
            <ul>
                <li><strong>✉</strong> <a href="mailto:achalnm@outlook.com">Email</a></li>
                <li><a href="https://github.com/achalnm" target="_blank"><img src="https://github.com/favicon.ico" alt="GitHub"> GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/achal-n-35153821b/" target="_blank"><img src="https://linkedin.com/favicon.ico" alt="LinkedIn"> LinkedIn</a></li>
                <li><a href="https://www.instagram.com/achal_n26/" target="_blank"><img src="https://instagram.com/favicon.ico" alt="Instagram"> Instagram</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
