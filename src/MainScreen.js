import { View } from "react-native";
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import PurchaseScreen from "./PurchaseScreen";
import SalesSrceen from "./SalesSrceen";

export default function MainScreen() {
    arrViewPage = [HomeScreen, OrderScreen, PurchaseScreen, SalesSrceen]
    ListViewBase = arrViewPage[0]

    // return (
    //   {ListViewBase}
    // )
    return (
        <HomeScreen></HomeScreen>
    )
  }