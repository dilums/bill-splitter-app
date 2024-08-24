import Screen from './Screen'
import Header from './Header'
import TotalBill from './TotalBill'
import PrvSplit from './PrvSplit'
import NearbyFriends from './NearbyFriends'


export default function ScreenA() {
    return (
      <Screen className="-translate-y-5">
        <Header />
        <TotalBill />
        <PrvSplit />
        <NearbyFriends />
      </Screen>
    );
  }
  