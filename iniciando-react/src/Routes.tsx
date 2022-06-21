import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import { Catalogo } from "./pages/Catalogo";
import { Carrinho } from "./pages/Carrinho";

export function AppRoutes() {
    return(

        <Router>
            <Routes>
                <Route path="/catalogo" element={<Catalogo/>} />
                <Route path="/carrinho" element={<Carrinho/>} />
            </Routes>
        </Router>
    )
}