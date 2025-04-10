import { Routes, Route } from "react-router-dom";
import { FlexDirectionPage } from "./pages/FlexDirectionPage";
import { JustifyContentPage } from "./pages/JustifyContentPage";
import { AlignItemsPage } from "./pages/AlignItemsPage";
import { FlexWrapPage } from "./pages/FlexWrapPage";
import { GapPage } from "./pages/GapPage";
import { OrderPage } from "./pages/OrderPage";
import { IntroPage } from "./pages/IntroPage";
import { AlignContentPage } from "./pages/AlignContentPage";
import { AlignSelfPage } from "./pages/AlignSelfPage";
import { FlexGrowShrinkPage } from "./pages/FlexGrowShrinkPage";
import { FlexShorthandPage } from "./pages/FlexShorthandPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6 sm:p-10 space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700">
          Tailwind Flexbox Playground 🧩
        </h1>

        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/direction" element={<FlexDirectionPage />} />
          <Route path="/justify" element={<JustifyContentPage />} />
          <Route path="/align-items" element={<AlignItemsPage />} />
          <Route path="/flex-wrap" element={<FlexWrapPage />} />
          <Route path="/gap" element={<GapPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/align-content" element={<AlignContentPage />} />
          <Route path="/align-self" element={<AlignSelfPage />} />
          <Route path="/flex-grow-shrink" element={<FlexGrowShrinkPage />} />
          <Route path="/flex-shorthand" element={<FlexShorthandPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
