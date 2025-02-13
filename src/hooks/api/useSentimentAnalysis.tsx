import { useState } from "react";
import { toast } from "react-toastify";
import { getSentimentAnalysis } from "../../api/getSentimentAnalysis";

interface SentimentItem {
  label: 'positive' | 'neutral' | 'negative';
  score: number;
};

type SentimentResponse = SentimentItem[];

interface SentimentState {
  status: "idle" | "loading" | "success" | "error";
  data: SentimentResponse | null;
  error: string | null;
};

export const useSentimentAnalysis = () => {
  const [state, setState] = useState<SentimentState>({
    status: "idle",
    data: null,
    error: null,
  });

  const sendRequest = async (text: string) => {
    setState({ status: "loading", data: null, error: null });

    try {
      const [response] = await getSentimentAnalysis(text);

      if (response && response.length > 0) {
        setState({
          status: "success",
          data: response,
          error: null,
        });
        return response;
      } else {
        const errorMessage = response?.error || "Wystąpił błąd podczas analizy.";
        setState({
          status: "error",
          data: null,
          error: errorMessage,
        });
        toast.error(errorMessage, {
          position: 'top-right'
        })
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Nieznany błąd";
      setState({
        status: "error",
        data: null,
        error: errorMessage,
      });
      toast.error(errorMessage, {
        position: 'top-right'
      })
      return null;
    }
  };

  return {
    state,
    sendRequest,
  };
};
