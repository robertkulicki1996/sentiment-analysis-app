import React, { useEffect, useState } from "react";
import { Modal, SentimentAnalysisForm, SentimentAnalysisResult } from "../../components";
import { useSentimentAnalysis } from "../../hooks/api/useSentimentAnalysis";
// import { useLazyQuery } from "@apollo/client";
// import { GET_SENTIMENT_ANALYSIS } from "../../api/getSentimentAnalysis";
// import { toast } from "react-toastify";

const MainView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState('');

  const { state, sendRequest } = useSentimentAnalysis();
  // const [getSentiment, { data, loading }] = useLazyQuery(GET_SENTIMENT_ANALYSIS);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendRequest(text);
  };

  useEffect(() => {
    if (state.status === "success") {
      setIsModalOpen(true);
    }
  }, [state.status]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (text) {
  //     try {
  //       await getSentiment({ variables: { text } });
  //       setIsModalOpen(true)
  //     } catch (error) {
  //       console.error('Błąd zapytania:', error);
  //       toast.error('Wystąpił błąd podczas zapytania', { position: 'top-right' });
  //     }
  //   }
  // };

  return (
    <>
      <SentimentAnalysisForm
        value={text}
        onChange={(text) => setText(text)}
        handleSubmit={handleSubmit}
        isLoading={state.status === 'loading'}
        // isLoading={loading}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {state.status === 'success' && (
          <SentimentAnalysisResult
            label="Wynik analizy"
            positive={state.data?.find(item => item.label === 'positive')?.score ?? 0}
            neutral={state.data?.find(item => item.label === 'neutral')?.score ?? 0}
            negative={state.data?.find(item => item.label === 'negative')?.score ?? 0}
          />)}
        {/* {data && data.analyzeSentiment && (
          <SentimentAnalysisResultpositive
            label="Wynik analizy"
            positive={data.analyzeSentiment[0]?.score ?? 0}
            neutral={data.analyzeSentiment[1]?.score ?? 0}
            negative={data.analyzeSentiment[2]?.score ?? 0}
          />
        )} */}
      </Modal>

      {/* {error && toast.error(error.message, { position: 'top-right'})} */}
    </>
  );
};

export default MainView;
