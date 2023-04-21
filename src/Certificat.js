import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Certificat() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'DevOps, Cloud, and Agile Foundations',
            description1: "DevOps essential characteristics including culture, behavior, practices, tools, methodologies, technologies and metrics.",
            link:"https://coursera.org/share/48e91106f1c2588c802d3b46499bee22",
        },
        {
            id: 2,
            name: 'Front End Web Development with React',
            description1: "This course explores Javascript based front-end application development, and in particular the React library .",
            link:"https://coursera.org/share/0eb0ede0d66a6c146862d22c649d95f8",
        },
        {
            id: 3,
            name: 'Introduction to Cloud Computing',
            description1: "Introduction to cloud computing: characteristics, business case, and emerging technologies.",
            link:"https://coursera.org/share/388dc92aac405b0b67b0c4b115825812",
        },
        {
            id: 4,
            name: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
            description1: "Learn Bootstrap 4 for responsive design and CSS/JavaScript components.",
            link:"https://coursera.org/share/8af40eaeedab8dfa044560a0fb6ff8d4",
        },
        {
            id: 5,
            name: 'Server-side Development with NodeJS, Express and MongoDB',
            description1: "Two-line description: This course covers server-side web development using NodeJS and modules like Express.",
            link:"https://coursera.org/share/fbbfb15c77cd043427dce759e3f73d51",
        },
        {
            id: 6,
            name: 'Introduction to Agile Development and Scrum',
            description1: "Agile and Scrum principles for software development, including small batches, MVP and pair programming.",
            link:"https://coursera.org/share/59ddee2c2fb8199ce60e785b2ca9143f",
        },
        {
            id: 7,
            name: 'Introduction to DevOps',
            description1: "Learn the essential characteristics of DevOps and its impact on the organization.",
            link:"https://coursera.org/share/8962e54fda2e5c2a7f5cc43498a97eb8",
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
          <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div className="mb-3"></div>
            <div>
              <h1 className="mb-1">
              {product.name.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 3 === 0 && <br />}
                    {word + " "}
                  </React.Fragment>
                ))}
              </h1>
              <h4 className="mt-0 mb-3">
                {product.description1.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 4 === 0 && <br />}
                    {word + " "}
                  </React.Fragment>
                ))}
              </h4>
              <a href={product.link}>
                <h5 className="mt-0 mb-3">
                    Coursera Link</h5>
              </a>
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
                style={{marginTop: '150px'}}
            />
            <Footer />
        </div>
    );
}
