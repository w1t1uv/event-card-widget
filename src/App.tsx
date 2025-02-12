import EventCard from './components/EventCard';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
      <Provider store={store}>
        <EventCard />
      </Provider>
  )
}

export default App
