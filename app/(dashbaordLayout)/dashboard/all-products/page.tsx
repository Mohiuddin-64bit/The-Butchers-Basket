import TablesComponent from "./TablesComponent";

const AllProducts = async () => {
  const res = await fetch(`https://the-butchers-basket-backend.vercel.app/product`, {
    cache: "no-cache",
  });
  const data = await res.json();
  

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-12">All Products</h1>
      <div>
        <TablesComponent data={data}/>
      </div>
    </div>
  );
};

export default AllProducts;
