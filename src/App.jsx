import ScreenA from "./components/ScreenA";
import ScreenB from "./components/ScreenB";

export const imageBase = `/bill-splitter-app-`
//@comp - App
export default function App(){
  return (
    <>
    <div className="h-[700px] flex space-x-12 items-center">
        <ScreenA />
        <ScreenB />
      </div>
    </>
  );
}
