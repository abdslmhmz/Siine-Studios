

import NavBar from '../components/NavBar.jsx';
import Services from '../components/Services.jsx';

function Main({ animateMain }) {

    return (
        <div className={`Main ${animateMain ? 'Main-animate' : ''}`}>
            <NavBar animateMain={animateMain} />
            <div>
                <header class="Services-header parallax-1">
                    <div class="parallax-inner">
                        <h1 className='action-text2'>Our Services</h1>
                    </div>
                    <div className="dark-filter"></div>
                </header>

                <Services />

                <header class="Services-header parallax-2">
                    <div class="parallax-inner">
                        <div className='action-text2'>Scroll Down</div>
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
                <header class="Services-header parallax-3">
                    <div class="parallax-inner">
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
        </div>
    )
}

export default Main
