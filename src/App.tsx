import { Router, Route } from '@solidjs/router'
import Home from '@/components/pages/Home'

function App() {
    return (
        <Router>
            <Route path="/home" component={Home} />
        </Router>
    )
}

export default App