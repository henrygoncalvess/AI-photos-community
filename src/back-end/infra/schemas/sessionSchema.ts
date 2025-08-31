const sessionCollectionSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["token", "user_id", "created_at", "expires_at", "updated_at"],
      uniqueItems: true,
      properties: {
        token: {
          bsonType: "string",
          maxLength: 96,
        },

        user_id: {
          bsonType: "objectId",
          maxLength: 24,
        },

        created_at: {
          bsonType: "date",
          description: "Data de criação da sessão",
        },
        expires_at: {
          bsonType: "date",
          description: "Data de expiração da sessão",
        },
        updated_at: {
          bsonType: "date",
          description: "Data de atualização da sessão",
        },
      },
    },
  },
  validationLevel: "strict",
};

export default sessionCollectionSchema;
