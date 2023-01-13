import { Link } from "react-router-dom";
import "./Specific.css";
import "./BackgroundImage.scss"

export default function Specific(props) {
  // let cloth_categories = [
  //   "SMOCKED TOPS",
  //   "RUCHED DRESSES",
  //   "WRAP TOPS",
  //   "MINI SKIRTS",
  //   "SATIN DRESSES",
  //   "TWO PIECES",
  // ];

  // let cloth_categories = props.cloth_categories
  let dressProData = props.dressProData;

  let new_cloth_categories_divs = dressProData.map((product_category, index)=>{
      let product_category_name_id = product_category.name.replace(/\s+/g, "").toLowerCase();
      let product_category_products = product_category.products;
      let product_category_image_one = product_category_products[0].product_image;
      let product_category_image_two = product_category_products[1].product_image;
      let product_category_image_three = product_category_products[2].product_image;
      let product_category_image_four = product_category_products[3].product_image;



      let {name} = product_category;
      let product_category_name = name

       return (
         <div className="specifics_top_section" key={product_category_name}>
           <div className="specifics_header">{product_category_name}</div>
           <div className="specifics_content">
             <div className="specifics_container specifics_first_div_container">
               <div
                 className="specifics first_div"
                 id={product_category_name_id + "1"}
                 style={{
                   backgroundImage: "url(" + product_category_image_one + ")",
                   backgroundPosition: "center",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   borderRadius: "10px",
                 }}
               ></div>
             </div>

             <div className="specifics_container specifics_second_div_container">
               <div
                 className="specifics second_div"
                 id={product_category_name_id + "2"}
                 style={{
                   backgroundImage: "url(" + product_category_image_two + ")",
                   backgroundPosition: "center",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   borderRadius: "10px",
                 }}
               ></div>
             </div>

             <div className="specifics_container specifics_third_div_container">
               <div
                 className="specifics third_div"
                 id={product_category_name_id + "3"}
                 style={{
                   backgroundImage: "url(" + product_category_image_three + ")",
                   backgroundPosition: "center",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   borderRadius: "10px",
                 }}
               ></div>
             </div>
             <div className="specifics_container specifics_fourth_div_container">
               <div
                 className="specifics fourth_div"
                 id={product_category_name_id + "4"}
                 style={{
                   backgroundImage: "url(" + product_category_image_four + ")",
                   backgroundPosition: "center",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   borderRadius: "10px",
                 }}
               ></div>
             </div>
           </div>
           <div className="specifics_more">
             <div className="sub_specifics_more">
               {/* <Link to={"/" + cloth_name_id}>SEE MORE</Link> */}
               <a href={"/" + product_category_name_id}>SEE MORE</a>
             </div>
           </div>
         </div>
       );



  })




  // let cloth_categories_divs = cloth_categories.map((cloth_name, index) => {
  //   let cloth_name_id = cloth_name.replace(/\s+/g, "").toLowerCase();
  //   return (
  //     <div className="specifics_top_section" key={cloth_name}>
  //       <div className="specifics_header">{cloth_name}</div>
  //       <div className="specifics_content">
  //         <div className="specifics_container specifics_first_div_container">
  //           <div className="specifics first_div" id={cloth_name_id + "1"}></div>
  //         </div>

  //         <div className="specifics_container specifics_second_div_container">
  //           <div
  //             className="specifics second_div"
  //             id={cloth_name_id + "2"}
  //           ></div>
  //         </div>

  //         <div className="specifics_container specifics_third_div_container">
  //           <div className="specifics third_div" id={cloth_name_id + "3"}></div>
  //         </div>
  //         <div className="specifics_container specifics_fourth_div_container">
  //           <div
  //             className="specifics fourth_div"
  //             id={cloth_name_id + "4"}
  //           ></div>
  //         </div>
  //       </div>
  //       <div className="specifics_more">
  //         <div className="sub_specifics_more">
  //           {/* <Link to={"/" + cloth_name_id}>SEE MORE</Link> */}
  //           <a href={"/" + cloth_name_id}>SEE MORE</a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  return <>{new_cloth_categories_divs}</>;
}
