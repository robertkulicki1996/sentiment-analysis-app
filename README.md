# Sentiment Analysis App

## 📌 Instrukcja uruchomienia projektu

### Wymagania:

- Node.js (>=16.x)
- npm lub yarn
- Klucz API do Hugging Face (dla analizy sentymentu)

### Instalacja:

1. Sklonuj repozytorium:
   ```sh
   git clone 
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
     REACT_APP_HUGGINGFACE_API_KEY=your_api_key_here
     ```
4. Uruchom aplikację w trybie deweloperskim:
   ```sh
   npm run dev
   # lub
   yarn dev
   ```
5. Otwórz przeglądarkę i przejdź do `http://localhost:3000`

## 🛠 Technologie użyte w projekcie

- **React.js** – Framework do budowy interfejsu użytkownika.
- **TypeScript** – Język z systemem statycznego typowania.
- **GraphQL (Apollo Client & Server)** – Do komunikacji z API Hugging Face.
- **ESLint & Prettier** – Analiza kodu i formatowanie.
- **Husky** – Wymuszanie poprawności kodu przed commitami.
- **React Toastify** – Obsługa powiadomień dla błędów i sukcesów.

## 🚀 Wyzwania i rozwiązania

### 1️⃣ Integracja GraphQL z Hugging Face API

- **Wyzwanie**: Hugging Face używa REST API, a  użyć GraphQL.
- **Rozwiązanie**: Stworzyliśmy własny Apollo Server, który pobiera dane z REST API i mapuje je na GraphQL.

Jeśli masz pytania, otwórz **Issue** w repozytorium! 😊

