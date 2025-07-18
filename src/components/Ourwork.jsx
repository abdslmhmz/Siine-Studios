import "./Ourwork.css"

import VideoSwiper from "./VideoSwiper"

function Ourwork() {

    return (
        <div className="section">

            <header className="section-header Ourwork-header" id="our-work">
                <div className="section-header-inner">
                    <h1 className='section-h1'>Our Work</h1>
                    <h2 className='section-h2'>Elevate Your Brand's Story</h2>
                    <h3>
                        Explore a selection of our high-quality work, showcasing how
                        we deliver engaging content that drives real results for our
                        clients.
                    </h3>
                </div>
            </header>

            <div className="mini-cards-container">
                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">📱 Social Media Reels</h2>
                        <h3 className="card-details">
                            Short-form content optimized for reach and retention — we
                            create fast-paced, trend-aware reels that stop the scroll
                            and spark engagement.
                        </h3>
                    </div>
                </div>

                <div className="middle-card-section">
                    <div className="card-container">
                        <h2 className="card-title">🎙️ Podcasts</h2>
                        <h3 className="card-details">
                            Visually branded, professionally produced podcast episodes that
                            combine clean audio, dynamic visuals, and seamless editing — built
                            to grow your audience with every listen.
                        </h3>
                    </div>
                </div>

                <div className="middle-card-section">
                    <div className="card-container">
                        <h2 className="card-title">🤳 UGC Content</h2>
                        <h3 className="card-details">
                            Authentic, creator-style videos designed to build trust and drive
                            conversions — we direct, shoot, and edit compelling
                            user-generated-style content with studio-grade polish.
                        </h3>
                    </div>
                </div>

                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">📦 Product Creatives</h2>
                        <h3 className="card-details">
                            Cinematic product showcases tailored for eCommerce and paid
                            ads — combining strong visuals, motion design, and storytelling
                            to highlight features and drive clicks.
                        </h3>
                    </div>
                </div>
            </div>

            <h2>Portfolio</h2>

            <VideoSwiper />

        </div>
    )
}

export default Ourwork
