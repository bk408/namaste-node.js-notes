Lecture 6: Libuv & async I/O

Key Takeaways from the Lecture:

Node.js has an event-driven architecture capable of asynchronous I/O.

🧵 Thread: Imagine your OS has many processes, and inside them, you have threads—like separate containers running processes, programs, applications, and code.
In JavaScript, we don’t need multiple threads; one thread is sufficient to run JS on the engine. 🚶‍♂️

JavaScript runs synchronously, but with NodeJS, you get asynchronous superpowers! 💪

🧠 Portions inside the JavaScript engine:

Call Stack: 📚 JS has only one call stack, executing code sequentially.
Memory Heap: 🗄️ Stores variables and functions.
Garbage Collector: 🗑️ Automatically collects unused variables and functions to free up memory!

🌀 How the JS engine deals with asynchronous code:
💡 The JS engine doesn't have a timer. It can’t wait for anything! These superpowers are given by NodeJS, thanks to libuv, the real superhero here! 🦸‍♂️

Libuv enables the JS engine to handle async I/O by acting as middleware between the V8 engine and the OS. ⚙️

For example, if the V8 engine needs to connect to a database or an API, it relies on libuv to handle that interaction. 🖥️ Libuv talks to the external systems, gets the response and hands it back to the V8 engine. 🎯

Libuv is a multi-platform library focused on asynchronous I/O, making NodeJS non-blocking and allowing it to do async I/O without halting the main thread! 🚦
