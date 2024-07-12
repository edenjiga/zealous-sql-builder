import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

// import SearchQueryBuilder from 'search-query-builder';
import { SearchQueryContainer } from './components/SearchQueryContainer.js';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchQueryContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
