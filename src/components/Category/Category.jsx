import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
const Category = () => {
  //for getting id on url
  const { id } = useParams();

  //data we return in usefetch(in products its filter by category having their ids)
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>

        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
