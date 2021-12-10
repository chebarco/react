import ComponenteUseEffect from "../boton/ComponenteUseEffect";

const Item = ({title, price, imageUrl}) => {
    
    return(

    <div class="container">
        <div class="card">
            <div class="box">
            <div class="content">
                <h3>{title}</h3>
                <img src={imageUrl} style={{width: '400px'}} />
                <p>${price}</p>
                <ComponenteUseEffect stock={10} initial={0}></ComponenteUseEffect>
            </div>

            </div>
        </div>

    </div>
    )
};

export default Item;