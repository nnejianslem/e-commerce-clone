import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.hotwebdesign.gr/images/data/eshop-design.png" alt="" className="home__image" />

                    <div className="home__row">
                        <Product 
                            id= "21324354"
                            title="Car"
                            price={80.25}
                            rating={5}
                            img = "https://www.freeiconspng.com/thumbs/car-front-png/bmw-car-front-png-30.png"
                        />  
                        <Product 
                            id= "21324355"
                            title="Clothes"
                            price={12.99}
                            rating={3}
                            img = "https://static.vecteezy.com/system/resources/previews/036/114/258/non_2x/ai-generated-isolated-sweater-fashion-piece-of-clothing-on-a-transparent-background-file-format-png.png"
                        />  
                    </div>

                    <div className="home__row">
                        <Product 
                            id= "21324554"
                            title="Television"
                            price={34.55}
                            rating={5}
                            img = "https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Image.png"
                        /> 
                        <Product 
                            id= "21324356"
                            title="Phone"
                            price={25.85}
                            rating={3}
                            img = "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Yellow-3?ts=1706150136503&$pngtransparent$&fmt=png-alpha&dpr=off"
                        /> 
                        <Product 
                            id= "21374354"
                            title="Laptop"
                            price={42.99}
                            rating={4}
                            img = "https://pngimg.com/d/laptop_PNG101837.png"
                        /> 
                    </div>

                    <div className="home__row">
                        <Product 
                            id= "21324358"
                            title="Wrist Watch"
                            price={28.55}
                            rating={2}
                            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNU08pEkkTJZUbSomWt-6oayvX7H4MOh2ag&s"
                        /> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home