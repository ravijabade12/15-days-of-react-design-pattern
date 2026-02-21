// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
import ProductListContainer from "./ProductsTask/components/ProductListContainer";
import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";
function App() {
  return (
    <div>
      {/* <UserProfileContainer userId={1} /> */}
      <ProductListContainer />
    </div>
  );
}

export default App;
