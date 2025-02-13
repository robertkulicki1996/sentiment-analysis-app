import { toast } from "react-toastify";
import { gql } from '@apollo/client';

import { apiConfig } from "./apiConfig";

export const getSentimentAnalysis = async (body: string) => {
  try {
    const response = await fetch(apiConfig.API_URL, {
      method: "POST",
      headers: apiConfig.getHeaders(),
      ...(body && { body: JSON.stringify(body) }),
    });
    return await response.json();
  } catch (error) {
    toast.error(`Błąd podczas wywoływania API: ${error}`, {
      position: 'top-right'
    });
    throw new Error(`Błąd podczas wywoływania API: ${error}`);
  }
};

export const GET_SENTIMENT_ANALYSIS = gql`
  query AnalyzeSentiment($text: String!) {
    analyzeSentiment(text: $text) {
      label
      score
    }
  }
`;
