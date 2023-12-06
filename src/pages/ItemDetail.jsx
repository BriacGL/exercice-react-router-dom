import { useParams } from 'react-router-dom';

const ItemDetail = () => {
let { id } = useParams();

return (
    <div>
    <h2>ID: {id}</h2>
    </div>
);
};

export default ItemDetail;
