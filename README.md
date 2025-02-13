# Sentiment Analysis App

## 📌 Instrukcja uruchomienia projektu

### Wymagania:

- Node.js (>=16.x)
- npm lub yarn
- Klucz API do Hugging Face API (dla analizy sentymentu)

### Instalacja:

1. Sklonuj repozytorium:
   ```sh
   git clone https://github.com/robertkulicki1996/sentiment-analysis-app.git
   cd sentiment-analysis-app
   ```
2. Zainstaluj zależności:
   ```sh
   npm install
   # lub
   yarn install
   ```
3. Skonfiguruj zmienne środowiskowe:
   - Utwórz plik `.env`
   - Dodaj klucz API Hugging Face:
     ```env
      VITE_HUGGING_FACE_API_URL=https://api-inference.huggingface.co/models/j-hartmann/sentiment-roberta-large-english-3-classes
      VITE_HUGGING_FACE_API_KEY=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

      VITE_GRAPHQL_SERVER_URL=http://0.0.0.0:4000/
     ```
4. Uruchom aplikację w trybie deweloperskim:
   ```sh
   npm run dev
   # lub
   yarn dev
   ```
5. Otwórz przeglądarkę i przejdź do `http://localhost:3000`

6. Aby skorzystać z GraphQl:
  - Należy uruchomić server należy z katalogu głównego użyć - node server.js
  - W pliku App.tsx odkomentować funkcję App owrapowaną ApolloProviderem a zakomentować obecną.
  - W pliku MainView.tsx odkomentować wszystkie odpowiednie linijki kodu, a zakomentować linijki związane z obsługą z REST API.

## 🛠 Technologie użyte w projekcie

- **React.js** – Framework do budowy interfejsu użytkownika.
- **TypeScript** – Język z systemem statycznego typowania.
- **GraphQL (Apollo Client & Server)** – Do komunikacji z API Hugging Face.
- **ESLint & Prettier** – Analiza kodu i formatowanie.
- **Husky** – Wymuszanie poprawności kodu przed commitami.
- **React Toastify** – Obsługa powiadomień dla błędów i sukcesów.

## 🚀 Wyzwania i rozwiązania

### 1️⃣ Integracja GraphQL z Hugging Face API

- **Wyzwanie**: Hugging Face używa REST API, a na potrzeby zadania potrzebowałem użyć GraphQL.
- **Rozwiązanie**: Stworzyłem własny Apollo Server, który pobiera dane z REST API i mapuje je na GraphQL.

Jeśli masz pytania, otwórz **Issue** w repozytorium! 😊

