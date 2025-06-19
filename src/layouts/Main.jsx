import "./main.css"

import NavBar from '../components/NavBar.jsx';
import Services from '../components/Services.jsx';

function Main({ animateMain }) {

    const contentTypes = [
        { title: "Social Media Reels", icon: "📱" },
        { title: "Podcasts", icon: "🎙️" },
        { title: "Event Filming", icon: "🎬" },
        { title: "UGC Content", icon: "👥" },
        { title: "Product Creatives", icon: "📦" },
    ]

    return (
        <div className={`Main ${animateMain ? 'Main-animate' : ''}`}>
            <NavBar animateMain={animateMain} />
            <Services/>
            <div>
                <header className="Services-header parallax-2">
                    <div className="parallax-inner2">
                        <h1 className='servicies-text2'>What We Create</h1>*
                        <div className="content-types">
                            <div className="content-grid">
                                {contentTypes.map((type, index) => (
                                    <div key={index} className="content-card">
                                        <div className="content-icon">{type.icon}</div>
                                        <h4>{type.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <section className="Services-section ">

                </section>




                <section className="Services-section ">
                    <h2>Parallax Effect</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid
                        sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                        doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                        aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                        maiores vitae deserunt cum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                        minima fuga debitis quasi eius aliquid
                        sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                        doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                        aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                        maiores vitae deserunt cum ducimus.</p>
                </section>
                <header className="Services-header parallax-3">
                    <div className="parallax-inner">
                        <h1>Scroll Down</h1>
                    </div>
                </header>
                <section className="Services-section ">
                    <h2>Parallax Effect</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid
                        sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                        doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                        aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                        maiores vitae deserunt cum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                        minima fuga debitis quasi eius aliquid
                        sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                        doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                        aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                        maiores vitae deserunt cum ducimus.</p>
                </section>
            </div>
        </div >
    )
}

export default Main
