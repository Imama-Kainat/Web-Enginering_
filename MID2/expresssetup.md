 Here's a **simple step-by-step list of commands** to **create and run an Express.js app using `express-generator`**

---

### ✅ **1. Install Express Generator (Only Once)**
```sh
npm install -g express-generator
```
> ✅ This installs the generator globally so you can use the `express` command.

---

### ✅ **2. Create a New Express App with EJS (Recommended View Engine)**
```sh
express -e myapp
```
> ✅ `-e` = use **EJS**  
> ✅ `myapp` = folder name for your project

---

### ✅ **3. Go into the Project Folder**
```sh
cd myapp
```

---

### ✅ **4. Install All Project Dependencies**
```sh
npm install
```
> ✅ This installs Express and other required packages listed in `package.json`.

---

### ✅ **5. Run the App**

#### 🔸 On **PowerShell** (Windows):
```sh
$env:DEBUG='myapp:*'; npm start
```

#### 🔸 On **CMD** (Windows Command Prompt):
```sh
set DEBUG=myapp:* && npm start
```

#### 🔸 On **macOS/Linux**:
```sh
DEBUG=myapp:* npm start
```

> ✅ This will run the server and show debug logs  
> 🌐 Open your browser and go to: `http://localhost:3000`

---

### ✅ **6. Optional Commands**

| Command | Use |
|--------|-----|
| `express -h` | Show help and options for `express-generator` |
| `npm audit` | Check for vulnerabilities |
| `npm audit fix` | Try to fix vulnerabilities automatically |
| `npm fund` | See which packages need funding |

---

### 📦 Example All-in-One Setup (Quick Summary)

```sh
npm install -g express-generator
express -e myapp
cd myapp
npm install
$env:DEBUG='myapp:*'; npm start      # (PowerShell)
```

---
