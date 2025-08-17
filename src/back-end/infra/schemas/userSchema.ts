const userCollectionSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "password"],
      uniqueItems: true,
      properties: {
        // For reference, GitHub limits usernames to 39 characters.
        username: {
          bsonType: "string",
          description:
            "Nome é obrigatório, deve ser string e ter no mínimo 33 caracteres",
          maxLength: 33,
        },

        // Why 254 length? https://security.stackexchange.com/a/39851
        email: {
          bsonType: "string",
          description: "Email é obrigatório e deve ter formato válido",
          maxLength: 254,
        },

        // Why 72 in length? https://security.stackexchange.com/a/39851
        password: {
          bsonType: "string",
          description:
            "Senha é obrigatória, deve ser string e ter no mínimo 72 caracteres",
          maxLength: 72,
        },

        // Why timestamp with timezone? https://justatheory.com/2012/04/postgres-use-timestamptz/
        created_at: {
          bsonType: "date",
          description: "Data de criação do usuário",
        },
        updated_at: {
          bsonType: "date",
          description: "Data de modificação do usuário",
        },
      },
    },
  },
  validationLevel: "strict",
};

export default userCollectionSchema;
