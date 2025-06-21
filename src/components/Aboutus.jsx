import "./Aboutus.css"

function Aboutus() {

    return (
        <div className="section">

            <header className="section-header Aboutus-header" id="about">
                <div className="section-header-inner">
                    <h1 className='section-h1'>About Us</h1>
                    <h3>
                        We are a full-service creative production studio based in Jolie Vue,
                        Kouba – Algiers, dedicated to producing cinematic,
                        high-performing content across digital platforms.
                        we transform ideas into visually compelling stories that
                        resonate and drive results.
                    </h3>
                </div>
            </header>

            <div className="mini-cards-container">
                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">🎯 Our Mission</h2>
                        <div className="mini-card-details">
                            <h3>
                                To empower brands and creators through purposeful,
                                high-quality content that captivates audiences and elevates
                                storytelling — one frame at a time.
                            </h3>
                            <h3>
                                We blend strategy, creativity, and technical precision to
                                ensure every project has both meaning and impact.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="middle-card-section">
                    <div className="card-container">
                        <h2 className="card-title">👥 Our Team</h2>
                        <div className="mini-card-details">
                            <h3>
                                We're a tight-knit team of directors, videographers, editors,
                                and creative producers — each with a passion for visual storytelling.
                                Our diverse experience spans digital marketing, social content,
                                commercial production, and branded entertainment.
                            </h3>
                            <h3>
                                We don’t just shoot — we collaborate, craft, and care about your vision.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">🎬 Our Equipment</h2>
                        <div className="mini-card-details">
                            <h3>
                                We work with industry-standard tools to ensure broadcast-quality results
                                across all content types. Our current gear includes:
                            </h3>

                            <ul>
                                <li><h3>Cameras & Lenses :</h3></li>
                                <li>
                                    <ul>
                                        <li>2× Blackmagic 4K Cinema Cameras</li>
                                        <li>Sigma Art 18–35mm f/1.8 Lens</li>
                                    </ul>
                                </li>
                                <li><h3>Audio :</h3></li>
                                <li>
                                    <ul>
                                        <li>RØDE Podcast Microphone</li>
                                        <li>DJI Mic 2 (Wireless)</li>
                                    </ul>
                                </li>
                                <li><h3>Lighting :</h3></li>
                                <li>
                                    <ul>
                                        <li>Amaran 200d & Godox Softbox System</li>
                                        <li>Stabilization</li>
                                        <li>DJI RS2 Gimbal Stabilizer</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3>
                                Our gear enables us to maintain a cinematic look while adapting
                                to various production needs — whether on location or in the studio.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="middle-card-section">
                    <div className="card-container">
                        <h2 className="card-title">📍 Our Location</h2>
                        <div className="mini-card-details">
                            <h3>
                                Our studio is located in the scenic district of Jolie
                                Vue, Kouba – Algiers, a creative hub ideal for both studio
                                shoots and nearby on-site productions.
                            </h3>

                            <h3>
                                Clients are always welcome to visit, collaborate, or schedule
                                pre-production meetings in our workspace.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus
