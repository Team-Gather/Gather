# Gather

## Install and Run
front-end: `root/client -> npm install -> npm start`

## Server Initial Setup (for Developers)

In the server folder, open the virtual environment, and install dependencies

```
cd server
python3 -m venv env
source env/bin/activate # On Windows, use `env\Scripts\activate` without the word 'source'

pip install -r requirements.txt
```

Run the server after all the dependencies are installed

```
python3 manage.py runserver
```

Note: The server might complain that the user never ran `migrate` command prior to running the server. You may ignore the warning for now.
