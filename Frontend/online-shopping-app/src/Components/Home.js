import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewProduct from './ViewProduct';
function Home(props) {

    const [allProductList, setAllProductList] = useState([]);

    const fatchProduct = async (e) => {

        try {
            const response = await axios.get(`http://localhost:8083/view`)
            const { productList } = response.data;
            setAllProductList(productList);
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fatchProduct()
    }, [])
   


    return (

        <div style={{marginTop:"10%"}}>
            <div className="containerCard">
            {allProductList.map((product) =>
                <ViewProduct key={product.id} 
                id={product.id}
                title={product.name}
                    description={product.catagory}
                    price={product.price} url={product.url}/>



            )}
            </div>
        </div>
    );
}

export default Home;