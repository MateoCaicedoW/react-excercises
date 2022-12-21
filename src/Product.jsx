import {Button} from './Button'
import './product.css'
export function Product({title, description, price = 1000}){
    return(
        <div className='card'>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <Button/>
        </div>
    )
}