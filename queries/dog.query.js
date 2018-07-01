module.exports ={
	query0 : 'SELECT * FROM dogs',
	query1 : 'SELECT * FROM dogs WHERE id = $1',
	query2 : 'INSERT INTO dogs(id, name, breed, age) VALUES($1,$2,$3,$4)',
	query3 : 'UPDATE dogs SET id= $1, name= $2, breed= $3, age=$4 WHERE id= $5',
	query4 : 'DELETE FROM dogs WHERE id= $1'
}