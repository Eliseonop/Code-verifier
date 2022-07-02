##Listar todos los contactos.

db.Contacts.find({})

##Busca el primer contacto que sea de Alemania (Germany).

db.Contacts.find({"location.country": {$eq: "Germany"} })

## Busca todos los contactos que tengan Blake como nombre (first).
db.Contacts.find({"name.first": {$eq: "Blake"} })

## Busca los primeros 5 contactos que tengan como género (gender) hombre (male)
db.Contacts.find({"gender":"male"}).limit(5)

## Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente.
db.Contacts.find({}).limit(4).sort("name.first")

## Clona la colección de Contacts a CopiaContacts y luego bórrala.
db.Contacts.aggregate([{$out: "CopiaContacts"}])
db.CopiaContacts.drop()

##Renombra el campo de name por nombre.
db.Contacts.updateMany({}, {$rename: {"name": "nombre"}})

## Borra todos los contactos que tengan como estado (state) Florida.
db.Contacts.deleteMany({"location.state": {$eq: "Florida"}})