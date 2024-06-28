import { Suspense } from "react";
import UserModule from "./modules/userModule";
import './modules/userModule.css'; // Importuj plik CSS

function App() {
  return (
    <Suspense>
      <UserModule/>
    </Suspense>
  );
}

export default App;
