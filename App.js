
import {registerRootComponent} from 'expo';
import { Navigation } from './components/Navigation';

export default function App() {
	return <Navigation />;
}

registerRootComponent(App);