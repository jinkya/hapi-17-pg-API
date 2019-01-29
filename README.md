# Hapi v17 pg API

RESTful API created with **Hapi v17** and **node-postgres** npm module.
### Author 
    Ajinkya Narwade

## Getting started
**Warning**
Make sure you are using at least **node 8.10.x** and **npm 5.5.x** by verifying it on terminal/ console as **node -v** and **npm -v**.
1. Insure you have postgres database setup
      >CREATE TABLE dogs(
							    id INTEGER,
								name TEXT,
								breed TEXT,
								age INTEGER
      );

    >    >INSERT INTO dogs(id, name, breed, age)
            VALUES (101, 'Alekha',   'Siberian Husky',  6 ),
                   (102, 'Chary',    'German Shepherd', 3),
                   (103, 'Ajinkya',  'Labrador',        2),
                   (104, 'Digambar', 'Bulldog',         4),
                   (105, 'Aakash',   'Poodle',          3),
                   (106, 'Vishnu',   'Beagle',          1),
                   (107, 'Manish',   'Golden retriver', 7),
                   (108, 'Sunil',    'Chuhuahua',       3),
                   (109, 'Advait',   'Pug',             5)

2. Goto project folder and install dependencies.
     >npm i
3. Launch development server
    >node server
4. Go to URL
    >http://localhost:3000/documentation

## Contribute
Please provide suggestions and contribute.
