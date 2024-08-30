import React, {useState} from 'react';
import coffee2 from './assets/images/2222222.png'
import coffee1 from './assets/images/11111_.png'
import coffee3 from './assets/images/333333.png'
import coffee4 from './assets/images/44444.png'
import coffee5 from './assets/images/5555.png'
import coffee6 from './assets/images/66666.png'
import coffee7 from './assets/images/77777.png'
import coffee8 from './assets/images/8888.png'
import coffee9 from './assets/images/9999.png'
import {Link} from "react-router-dom";
function SearchInput(props) {


    const [filter, setFilter] = useState('');


    const products = [
        { id: 1,
            name: 'Նարինջով սուրճ',
            price: 1000,
            img: coffee1,
            description:"Բաղադրությունը՝ Նարինջ,կիտրոն,հատիկավոր սուրճ,ջուր"
        },
        { id: 2,
            name: 'Աֆոգանո',
            price: 990,
            img: coffee2,
            description:"Բաղադրությունը՝ պաղպաղակ,հատիկավոր սուրճ,ջուր"
        },
        { id: 3,
            name: 'Տիրամիսու',
            price: 1000,
            img: coffee3,
            description:"Բաղադրությունը՝  թխվածքաբլիթ,մասկարպոնե պանիր,լուծվող սուրճ,սերուցք"
        },
        { id: 4,
            name: 'Կարամել Լատե',
            price: 1000,
            img: coffee4,
            description:"Բաղադրությունը՝ լուծվող սուրճ, հատապտղային սերուցք,"
        },
        { id: 5,
            name: 'Ռաֆ',
            price: 990,
            img: coffee5,
            description:"Բաղադրությունը՝ լուծվող սուրճ, հատապտղային սերուցք,ջուր"
        },
        { id: 6,
            name: 'Ֆլաթ Ուայթ',
            price: 1130,
            img: coffee6,
            description:"Բաղադրությունը՝ Նարինջ,կիտրոն,հատիկավոր սուրճ,ջուր"
        },
        { id: 7,
            name: 'Քուքի սուրճ"',
            price: 1200,
            img: coffee8,
            description:"Բաղադրությունը՝ թխվածքաբլիթ,հատիկավոր սուրճ,կաթ"
        },
        { id: 8,
            name: 'Քինդեր  սուրճ"',
            price: 1800,
            img: coffee9,
            description:"Բաղադրությունը՝ կաթ,հատիկավոր սուրճ,քինդերի սալիկներ,ջուր"
        },
        { id: 9,
            name: 'Կաթով  սուրճ"',
            price: 900,
            img: coffee7,
            description:"Բաղադրությունը՝ լուծվող սուրճ, սերուցք,կաթ,մաշմելոու"
        },

    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    const search = (event) => {
        setFilter(event.target.value);
    };
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="search">
                    <h1>Բոլոր ապրանքները</h1>
                    <input type="text" id="find" placeholder="որոնեք այստեղ..." onKeyUp={search}/>
                </div>
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`}
                              state={{product: {name: product.name,description:product.description, price: product.price ,img:product.img}}} key={product.id}
                              className="product">
                            <div>
                                <img src={product.img} alt={product.name}/>
                                <h3>{product.name}</h3>
                                <h4>{product.price}.00 դրամ <del>{product.price + 100}.00 դրամ</del></h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchInput;