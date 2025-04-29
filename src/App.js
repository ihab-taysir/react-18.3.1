import { Suspense } from "react";
import MainLayout from "./Components/MainLayout";
import { UseCallBackComponent } from "./Components/UseCallBackComponent";
import { UseMemoComponent } from "./Components/UseMemoComponent";
import Router from "./Router";

function App() {
  return (
    // <>
    //   <UseCallBackComponent />
    //   <UseMemoComponent />
    // </>

    <MainLayout>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Router />
      </Suspense>
    </MainLayout>
  );
}

export default App;
