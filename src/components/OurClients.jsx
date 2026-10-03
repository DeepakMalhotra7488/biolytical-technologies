const clients = [
  {
    name: "Client 01",
    image: "/images/clients/client-1.svg",
  },
  {
    name: "Client 02",
    image: "/images/clients/client-2.jpg",
  },
  {
    name: "Client 03",
    image: "/images/clients/client-3.svg",
  },
  {
    name: "Client 04",
    image: "/images/clients/client-4.svg",
  },
];
export const OurClients=(()=>{
    return (
        <section className="our-clients"> 
        <div className="container"> 
            <div className="clients-heading"> 
                <span className="eyebrow">OUR CLIENTS</span> 
                <h2> Trusted by Leading 
                <span> Organizations</span> 
                </h2>
                    <p> Supporting defence, research, engineering and industrial organizations with reliable solutions and technical expertise.</p>
                    </div> 
                    <div className="clients-slider"> 
                    <div className="clients-track"> {[...clients, ...clients].map((client, index) => ( <div className="client-card" key={index}> 
                        <img src={client.image} alt={client.name} /> </div> ))} 
                    </div>
                </div> 
            </div> 
        </section>
    )
})