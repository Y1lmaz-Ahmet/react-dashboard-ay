import { singleProduct } from "../../Data";
import Single from "../../components/single/Single";
import "../product/product.scss";

const Product = () => {
  return (
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
