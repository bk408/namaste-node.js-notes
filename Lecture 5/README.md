🔍 How the Require function works behind the scenes:
Whenever we create a new module, all the code inside is wrapped within a function and then executed. This is why private variables and functions in one module aren’t accessible in another without using the Require function.
Before passing the code to the V8 engine, it’s wrapped inside an IIFE (Immediately Invoked Function Expression).

💡 What is the need for IIFE?
It serves multiple purposes:
1️⃣ Immediately invokes the code.
2️⃣ Keeps variables and functions safe or private, preventing interference.

❓ Question: How are variables and functions private in different modules?
🔑 Answer: IIFE and the Require function ensure that the code remains encapsulated and private.

❓ Question: How do you access the module exports?
🔧 Answer: Node.js passes the module as a parameter to the IIFE that wraps the code, with the required functionality provided by Node.

5 Steps to Get the Module and Execute the Code (How the Require function works behind the scenes):

🗂️ Resolving the module:
First, it checks the type of the module—local path, JSON path, or node: module—and resolves it accordingly.

📥 Loading the module:
Based on the type, it loads the file content.

🔄 Compiling the code:
Once loaded, the module code is wrapped inside an IIFE.

🔍 Code Evaluation:
The module’s exports are processed.

📦 Caching:
After evaluation, the module is cached, so subsequent requires return from the cache without repeating these steps.

For example, if multiple files require several modules, Node.js caches the Require function, meaning it runs once. The next time a module requires it, it’s returned from the cache, skipping the initial steps.
