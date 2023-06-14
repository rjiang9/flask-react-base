Quick Flask-React setup
========================

ref: https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i


```
cd ~projects/
npx creat-react-app flask_react
npm install axios

mkdir backend
cd backend

python -m venv env
source env/bin/activate

pip install -U pip setuptools wheel 
pip install -U flask
pip install -U python-dotenv

touch .flaskenv
```

```
vim .flaskenv
    FLASK_APP=base.py
    FLASK_ENV=development
    FLASK_DEBUG=1
```

```
touch base.py
```

vim base.py

```
from flask import Flask

app = Flask(__name__)

@app.route('/profile)
def my_profile():
  return {
      "name": 'mag Ray',
      "about_me": 'hiding on a lot of weekends' 
  }
```

`flask run`




---
```
cd backend  ## back to the project root

```
vim package.js
add these line:
```
"proxy": "http://localhost:5000",
...
"Scripts: {
    ....
    "start-backend": "cd backend && env/bin/flask run --no-debugger",
     ...
}
"
```

You can start backend FLASK server from any folder under the project by: `npm run start-backend`



![qownnotes-media-XHXSYI](media/qownnotes-media-XHXSYI.png)
