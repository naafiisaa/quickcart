// pages/dashboard/add-product.jsx  (or app/dashboard/add-product/page.jsx for App Router)

import AddProduct from "@/components/AddProduct";
import PrivateRoute from "@/components/PrivatRoute";

const AddProductPage = () => {
  return (
    <PrivateRoute>
      <AddProduct />
    </PrivateRoute>
  );
};

export default AddProductPage;




