import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Product.css'

import './Product.css';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

function ViewProduct(props) {
	const [product, setProduct] = React.useState([]);
	const { id } = useParams();
	console.log(id);
	React.useEffect(() => {
		fetch(`https://tranquil-dawn-87865.herokuapp.com/products${id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, [id]);

	return (
		<>
			{product.map((item) => (
				<Card key={item.id}>
					<Card.Title style={{ padding: "10px", textAlign: "center" }}>{item.name}</Card.Title>
					<div className="d-flex justify-content-around flex-column">
						<div className="d-flex ml-5">
							<Card.Img className="cardImg" variant="top" src={item.img} />
							<div style={{ margin: "20px" }}>
							<Card.Title>{item.name}</Card.Title>							
							<Card.Text>
									 {item.nome}
								</Card.Text>
							<Card.Text>
									<strong className='promoprice'> R${item.promoprice}</strong>
								</Card.Text>
								<Card.Text>
									<strong className='price'>oi{item.rating}</strong> 
								</Card.Text>
								<ModalConfirm value={{ ...item }} />
							</div>
						</div>

					</div>

				</Card>
			))}
		</>
	);
}

export default ViewProduct;
