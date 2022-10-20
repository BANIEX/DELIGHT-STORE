import React from "react";
import "./AboutUs.css";
import img from "../../assets/images/about1.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="about_us_info">
        <div className="about_us_nav_display">Home &gt; About Us</div>
        {/* <div className="smocked_tops_text_display">Smocked Tops</div>  */}
      </div>

      <div className="about_us_first_half">
        <div className="about_us_first_half_header">ABOUT US</div>
        <div className="about_us_first_half_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti
          quam nulla aut voluptatum quo odio, maxime quibusdam minus
          perspiciatis aspernatur explicabo possimus. Maiores, quia voluptatum!
          Nobis molestias ipsum corrupti tenetur error aliquid qui in, maiores
          quod laudantium! Necessitatibus quod unde odio tempore atque illo
          laboriosam assumenda sed error eius?
        </div>
        <div className="about_us_first_half_image">
          <img src={img} alt="dress_pro" />
        </div>
      </div>

      <div className="about_us_second_half">
        <div className="about_us_second_half_top">
          <div className="about_us_second_half_header">MEET OUR CEO</div>
        </div>
        <div className="about_us_second_half_bottom">
          <div className="about_us_second_half_left">
            <div className="about_us_second_half_left_image_container"></div>
          </div>
          <div className="about_us_second_half_right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet natus
            velit nisi laborum repellendus eius dolorem ea facilis dicta culpa
            labore, doloremque, consectetur architecto? Laudantium sequi
            ratione, quos culpa enim reprehenderit voluptas aperiam cupiditate
            nulla ipsum assumenda ipsam quas totam perferendis dolor. Aliquam
            nam accusamus et quae assumenda voluptas quisquam necessitatibus
            reiciendis nostrum, voluptatibus quidem voluptatum pariatur, labore
            beatae architecto voluptatem eos sed vero voluptates dignissimos
            veritatis omnis porro inventore? Impedit, temporibus? Quis fugiat
            magnam, voluptatum in eveniet accusantium odio quae maiores, dolor,
            et rem est nemo ad. Nam aliquid laudantium cumque molestiae unde
            earum, tenetur maxime quis a illo sequi expedita ipsam magnam et id
            excepturi, dolor fuga hic ipsa. Eos consequuntur similique
            perspiciatis ducimus fuga totam corrupti distinctio, ullam aliquam
            ipsa at nihil, tenetur quis minima fugit perferendis vitae ad soluta
            vel? Illo ab repudiandae aut natus, laboriosam porro non
            perferendis, tempore magnam provident deleniti cupiditate atque
            reiciendis.
          </div>
        </div>
      </div>
    </div>
  );
}
