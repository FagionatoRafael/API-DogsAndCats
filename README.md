# API cães e gatos
## descrição 
API criada para visualizar as raças conhecidas de cães e gatos. Atualmente podemos ver as raças, pesos e vacinas mais comuns para cada um.

## Tecnologias
  - NodeJs
  - Express
  - TypeScript
  - MongoDB
  
## Hospedagem no heroku
  - https://petsapimy.herokuapp.com

## End-points
## Dogs
### Get /dogs 
  - Busca todos os cachorros cadastrados.
### Get /dog
  - Busca um cachorro em específico.
  Exemplo de envio:
  {
	  "name": "Fox Terriers"
  }
### Get /dog/{id}
  - Busca um cachorro em específico.
  Exemplo de envio:
  /dog/4
### Post /dogs
  - Publica um cachorro novo.
  Exemplo de envio:
  {
    "id": 193,
    "name": "Vira lata",
    "Weight": "8.00"
   }
   
## Cats
### Get /cats 
  - Busca todos os gatos cadastrados.
### Get /cat
  - Busca um gato em específico.
  Exemplo de envio:
  {
    "name": "Ashera"
  }
### Get /cats/{id}
  - Busca um gato em específico.
  Exemplo de envio:
  /dog/4
### Post /cats
  - Publica um gato novo.
  Exemplo de envio:
  {
		"id": 45,
		"name": "Usuri",
		"Weight": 7.5
	}
  
## Vacinas
### Get /vaccines/dog
  - Busca todas as vacinas cadastradas para cachorros.
### Get /vaccines/dog/{id}
  - Busca uma vacina em específico para cachorros.
  Exemplo de envio:
  /vaccines/dog/4
### Post /vaccines/dog
  - Publica uma vacina nova.
  Exemplo de envio:
 {
	 "id": 13,
	 "nome": "Rabies"
 }
 
### Get /vaccines/cats
  - Busca todas as vacinas cadastradas para gatos.
### Get /vaccines/cats/{id}
  - Busca uma vacina em específico para gatos.
  Exemplo de envio:
  /vaccines/cats/4
### Post /vaccines/cats
  - Publica uma vacina nova.
  Exemplo de envio:
  {
	  "id": 10,
	  "nome": "Rabies" 
  }
