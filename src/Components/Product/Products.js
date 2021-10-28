import { Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



import './Product.css';

//this must be in another page

const Products = (props) => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		fetch('https://resilia-marketplace.herokuapp.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])
	console.log(products.nome)
	return (
		<section className="product-list">
			{
				products.map(item => (

					<Card key={item.id} style={{ width: '18rem', margin: "1.5em" }}>
						<div className='containerlove'>
							<div className='love'>
							</div>
								</div>
						<Card.Img className="cardImg" variant="top" src={item.img} />
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>							
							<Card.Text>
									 {item.nome}
								</Card.Text>
							<Card.Text>
									<strong className='promoprice'> R${item.promoprice}</strong>
								</Card.Text>
								<Card.Text>
									<strong  className='price'>{item.price}</strong> 
								</Card.Text>
								<Card.Text>
								<strong  className='promocinza'> em até </strong>
								<strong  className='promopreto'>{item.rating}</strong> 
								<strong  className='promocinza'> sem juros</strong>
								</Card.Text>

								<Link to={`/products/${item.id}`} >
				
										<Button variant="success" >Adicionar</Button>		

							</Link>
						</Card.Body>
					</Card>
				))
			}
		</section>
	)
}

export default Products;