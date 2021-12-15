import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            soy detail
        </div>
    )
}

export default ItemDetailContainer
