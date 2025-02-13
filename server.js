import { ApolloServer, gql } from 'apollo-server';
import axios from 'axios';

const typeDefs = gql`
  type SentimentResult {
    label: String
    score: Float
  }

  type Query {
    analyzeSentiment(text: String!): [SentimentResult]
  }
`;

const resolvers = {
  Query: {
    analyzeSentiment: async (_, { text }) => {
      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/j-hartmann/sentiment-roberta-large-english-3-classes',
          { inputs: text },
          {
            headers: {
              Authorization: `Bearer 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`,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Odpowiedź z API Hugging Face:', response.data);

        const [result] = response.data;
        return result;
      } catch (error) {
        console.error('Błąd analizy sentymentu:', error);
        throw new Error('Błąd podczas komunikacji z Hugging Face API');
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Serwer GraphQL działa pod adresem ${url}`);
});
