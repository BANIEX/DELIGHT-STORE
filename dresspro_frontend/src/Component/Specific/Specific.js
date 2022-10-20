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

  let new_cloth_categories_divs = dressProData.map((cloth_object, index)=>{
      let cloth_name_id = cloth_object.name.replace(/\s+/g, "").toLowerCase();

      let {name} = cloth_object;
      let cloth_name = name

       return (
         <div className="specifics_top_section" key={cloth_name}>
           <div className="specifics_header">{cloth_name}</div>
           <div className="specifics_content">
             <div className="specifics_container specifics_first_div_container">
               <div
                 className="specifics first_div"
                 id={cloth_name_id + "1"}
               ></div>
             </div>

             <div className="specifics_container specifics_second_div_container">
               <div
                 className="specifics second_div"
                 id={cloth_name_id + "2"}
               ></div>
             </div>

             <div className="specifics_container specifics_third_div_container">
               <div
                 className="specifics third_div"
                 id={cloth_name_id + "3"}
               ></div>
             </div>
             <div className="specifics_container specifics_fourth_div_container">
               <div
                 className="specifics fourth_div"
                 id={cloth_name_id + "4"}
               ></div>
             </div>
           </div>
           <div className="specifics_more">
             <div className="sub_specifics_more">
               {/* <Link to={"/" + cloth_name_id}>SEE MORE</Link> */}
               <a href={"/" + cloth_name_id}>SEE MORE</a>
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
