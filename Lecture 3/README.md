Key Takeaways from the Lecture:

🔄 When downloading Node.js as package managers:

🌀 NVM: Helps developers manage multiple Node.js versions on the same machine, allowing them to switch between versions as needed. NVM is available for Mac and Linux, but not Windows. To use NVM on Windows, you can install nvm-windows and then use it to install Node.js and npm. 🖥️

📦 NPM: Allows developers to install, share, and manage dependencies in their projects. npm is a package manager for Node.js that allows developers to download, install, and manage packages when developing in JavaScript.📦

⚡ fnm (Fast Node Manager): A Node.js version manager that allows you to install and switch between different Node.js versions on the fly. ⚡

🍺 Homebrew: A package manager for macOS and Linux, simplifying software installation. 🍺

🍫 Chocolatey: A package manager for Windows that can install, upgrade, and uninstall Node.js packages and more. 🍫

🐳 Docker: Allows developers to package and run applications as containers, offering a lightweight alternative to virtual machines. 🐳

🔧 When downloading Node.js as a prebuilt installer:

💻 x64 (64-bit): For modern processors, offering better performance. 💻

🖱️ x86 (32-bit): For older processors, used on older systems. 🖱️

📱 ARM64: For ARM-based processors (e.g., smartphones, tablets, newer laptops). Power-efficient. 📱

🛠️ Node.js is a JavaScript runtime environment.

🔄 Node REPL (Read-Evaluate-Print Loop): The quickest way to run Node.js code. Run with the command: node. Not used in production due to the inconvenience of writing code directly. 🚀

🌐 The Global Object: Not part of the V8 engine but a Node.js superpower, giving us access to features like setTimeout, setInterval, and more. 🌍

🖥️ Behavior of global and this in Node.js vs. the browser:

Browser: window, this, self, and frames all return the global object.

Node.js: global returns the global object, but this returns an empty array. 📂

🔍 Insightful Trivia:

JavaScript's community once aimed to unify access to the global object under a single name, but conflicts led to the creation of globalThis—a reliable way to access the global object anywhere.

console.log(globalThis === global); // true
