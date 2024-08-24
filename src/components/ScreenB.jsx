import Screen from "./Screen";
import SplitNow from "./SplitNow";
import Receipt from "./Receipt";
import SliderSet from "./SliderSet";
import ConfirmButton from "./ConfirmButton";

//@ screen b
export default function ScreenB() {
  return (
    <Screen className="translate-y-5">
      <SplitNow />
      <Receipt />
      <SliderSet />
      <ConfirmButton />
    </Screen>
  );
}
