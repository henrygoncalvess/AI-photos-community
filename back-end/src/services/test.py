def minha_funcao():
    return { "mensagem": "Olá do Python!", "valor": 42 }

if __name__ == "__main__":
    import json
    resultado = minha_funcao()
    print(json.dumps(resultado))