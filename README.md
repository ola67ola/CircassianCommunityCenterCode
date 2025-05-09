# Building Code Approximator Project

## Prerequisites

- **Python Version**: 3.8
- **Node.js**: 23.7.0
---

## Getting Started

## Server Side Configurations:

### 1. Create a Virtual Environment

Run the following command to create a virtual environment:

```bash
/path/to/you/installed/python3.8/python.exe -m venv .venv
```

### 2. Activate the Virtual Environment

- **PowerShell**:  
  Before activating the virtual environment, you will need to allow script execution by setting the execution policy:
  ```bash
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```  
  Once done, activate the virtual environment:
  ```bash
  .venv/Scripts/Activate.ps1
  ```

- **Command Prompt**:
  ```bash
  .venv/Scripts/activate.bat
  ```

### 3. Install Dependencies

```bash
python -m pip install -r requirements.txt
```

### 4. Download Project Secrets

Download the project secrets from the following link:  
[Download Secrets](https://drive.google.com/file/d/1AEgab9DBAh88KSEOL4tO-pHX_fo7F5ts/view?usp=sharing)  
(*Password will be shared via a secure channel*)

### 5. Unzip Secrets

Extract the downloaded *secrets* directory into the **root directory** of the project.

### 6. Start The Flask Server

```bash
python src/server/app.py
```

### 7. Run Tests

Ensure all tests pass by running the following command:

```bash
python src/tests/entry_point.py
```

You should see an output that looks like:

.....
----------------------------------------------------------------------
Ran 6 tests in 0.005s

OK


## Client Side Configurations
**Don't Forget to Install Node.js version 23.7.0**
**Root Directory of the Project is also Root Directory of the Frontend**

### Install Dependencies
```bash
npm install
```

### Run Frontend Project
```bash
npm start
```