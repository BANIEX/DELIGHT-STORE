import faker from "faker";
import { randomColor } from "../Utils/Utils";
import axios from "axios";
import LoadFromDbToProduct from "../LoadFromDbToProduct/LoadFromDbToProduct";

export default  function makeData() {

  // const [dataFromproductDB, setDataFromProductDB] = useState([])

  // useEffect(() => {
  //   async function getProducts(){
  //     const dataFromServer = await axios.get("/product");
  //     console.log(dataFromServer.data.data);
  //   }
  
  //   return () => {
    
  //   }
  // }, [])




  

  


  let data = [];
  let options = [];
  // for (let i = 0; i < count; i++) {
  //   let row = {
  //     ID: faker.mersenne.rand(),
  //     // productName: faker.name.firstName(),
  //     product_name: "Honey Beans",
  //     // productDescription: faker.name.lastName(),
  //     product_description: "Picked honey beans for consumption",
  //     // price: Math.floor(2000 + Math.random() * 20),
  //     product_price: "2500",
  //     // weight: Math.floor(20 + Math.random() * 20),
  //     product_weight: "20",
  //     product_volume: "1",
  //     product_image:
  //       "https://media.istockphoto.com/photos/package-of-dry-raw-peas-isolated-picture-id1182204006?s=612x612",

  //     // category: faker.music.genre(),
  //     category: "Grains"
  //   };
  //   options.push({ label: row.category, backgroundColor: randomColor() });

  //   data.push(row);
  // }

  let columns = [
    {
      id: "product_name",
      label: "Product Name",
      accessor: "product_name",
      minWidth: 100,
      dataType: "text",
      options: [],
    },
    {
      id: "product_description",
      label: "Product Description",
      accessor: "product_description",
      minWidth: 100,
      dataType: "text",
      options: [],
    },
    {
      id: "product_price",
      label: "Product Price",
      accessor: "product_price",
      width: 80,
      dataType: "text",
      options: [],
    },
    {
      id: "product_weight",
      label: "Weight(KG)",
      accessor: "product_weight",
      width: 200,
      dataType: "text",
      options: [],
    },
    {
      id: "product_image",
      label: "Upload Image",
      accessor: "product_image",
      width: 200,
      dataType: "button",
      options: [],
    },
    {
      id: "product_volume",
      label: "Volume(L)",
      accessor: "product_volume",
      width: 200,
      dataType: "text",
      options: [],
    },
    {
      id: "category",
      label: "Category",
      accessor: "category",
      dataType: "select",
      width: 200,
      options: options,
    },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null",
    },
  ];

  return  { columns: columns, data: data, skipReset: false };
}
