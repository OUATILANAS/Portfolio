import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Projets() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'TicTacToe',
            description1: "Tic-tac-toe is a two-player game where each player takes turns marking X or O on a 3x3 grid, with the objective of getting three of their symbols in a row.",
            link:"https://github.com/OUATILANAS/TicTacToe",
        },
        {
            id: 2,
            name: 'Exchange-App',
            description1: "An app that allows users to buy, sell and trade cryptocurrencies and other assets on various exchanges.",
            link:"https://github.com/OUATILANAS/Exchange-App",
        },
        {
            id: 3,
            name: 'Pokdex-Dynamic',
            description1: "A dynamic mobile app that allows users to search and view information on different Pokemon species.",
            link:"https://github.com/OUATILANAS/PokeDex2",
        },
        {
            id: 4,
            name: 'Pokdex-Static',
            description1: "Pokedex-Static is a static mobile application that displays information about Pokemon.",
            link:"https://github.com/OUATILANAS/Pokdex",
        }
    ]);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3" >
                <div className="mb-3">
                </div>
                <div>
                    <h1 className="mb-1" style={{marginRight: '50px'}}>{product.name}</h1>
                    <h4 className="mt-0 mb-3" style={{marginRight: '50px'}}>{product.description1}</h4>
                    <a href={product.link}><h5 className="mt-0 mb-3">{product.link}</h5></a>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <NavBar />
            <Carousel
                value={products}
                numVisible={3}
                itemTemplate={productTemplate}
                responsiveOptions={responsiveOptions}
                circular={true} style={{maxWidth: '1200px',margin:'0 auto',marginTop: '150px'}}
            />
            <Footer />
        </div>
    );
}
