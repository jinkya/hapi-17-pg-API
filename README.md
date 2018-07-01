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

    >INSERT INTO dogs(id, name, breed, age) 
                               VALUES (101, 'Sotya', 'German Shepherd',3 ),
			                                  (102, 'Dagdu', 'Labrador', 4),
                                              (103, 'Pintya', 'Bulldog', 1),
											  (104, 'Bhura, 'Poodle', 6),
                                              (105, 'Kaala', 'Beagle', 5),

2. Goto project folder and install dependencies.
     >npm i
3. Launch development server
    >node server
4. Go to URL
    >http://localhost:3000/documentation

## Contribute
Please provide suggestions and contribute.
