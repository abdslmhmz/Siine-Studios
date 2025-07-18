import "./Services.css"

function Services() {

    return (
        <div className="section">


            <header className="section-header services-header" id="services">
                <div className="section-header-inner">
                    <h1 className='section-h1'>Our Services</h1>
                    <h2 className='section-h2'>Crafting Visual Stories for the Digital Age</h2>
                    <h3>
                        We create high-impact visuals for social media, podcasts, events, and eCommerce,
                        delivering cinematic quality with modern storytelling.
                    </h3>
                </div>
            </header>


            <div className="cards-container">
                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">Pre-Production</h2>
                        <h3 className="card-details">
                            Every great production starts with a solid blueprint.
                            Our pre-production phase ensures your project is thoughtfully planned,
                            creatively aligned, and ready for flawless execution.
                        </h3>
                        <div className="card-items">
                            <div className="card-item-img pre-production-item-img"> </div>
                            <div className="card-item">
                                <div className="card-item-title">Scripting</div>
                                <div className="card-item-details">
                                    We develop strategic, story-driven scripts crafted to engage your
                                    target audience — leveraging insights from viral trends and platform
                                    algorithms to shape compelling narratives with purpose.
                                </div>
                            </div>

                            <div className="card-item">
                                <div className="card-item-title">Storyboarding</div>
                                <div className="card-item-details">
                                    Each scene is carefully mapped out through cinematic storyboards that
                                    visualize mood, framing, and pacing — aligning creative vision with
                                    technical direction for a smooth shoot.
                                </div>
                            </div>

                            <div className="card-item">
                                <div className="card-item-title">Casting</div>
                                <div className="card-item-details">
                                    We handpick talent from a curated pool of content creators, media faces and models,
                                    ensuring your message is delivered with authenticity, energy, and the perfect
                                    on-screen presence.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="middle-card-section">
                    <div className="card-container">
                        <h2 className="card-title">Production</h2>
                        <h3 className="card-details">
                            Our production team brings your vision to life with state-of-the-art equipment
                            and expert craftsmanship, ensuring every frame is perfect.
                        </h3>
                        <div className="card-items">
                            <div className="card-item">
                                <div className="card-item-title">Filming</div>
                                <div className="card-item-details">
                                    We utilize 4K cinema-grade cameras, expert lighting setups,
                                    and experienced cinematographers to capture dynamic, emotionally
                                    resonant visuals across all formats — from social media reels to
                                    UGCs and product creatives.
                                </div>
                            </div>

                            <div className="card-item-img production-item-img"> </div>

                            <div className="card-item">
                                <div className="card-item-title">Event Coverage</div>
                                <div className="card-item-details">
                                    From corporate events to live shows, we capture real moments with a
                                    cinematic eye — using multicam setups, crisp audio, and dynamic
                                    editing to preserve the energy of the experience.
                                </div>
                            </div>

                            <div className="card-item">
                                <div className="card-item-title">Directing</div>
                                <div className="card-item-details">
                                    Our directors craft a strong, cohesive narrative for each project,
                                    aligning creative goals with brand identity. Every shoot is guided
                                    by a clear vision and executed with precision from start to finish.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-section">
                    <div className="card-container">
                        <h2 className="card-title">Post-Production</h2>
                        <h3 className="card-details">
                            This is where the magic happens. In post-production, we transform raw
                            footage into a refined, immersive experience — meticulously enhancing
                            every frame, sound, and sequence to tell your story at its absolute best.
                        </h3>
                        <div className="card-items">
                            <div className="card-item-img post-production-item-img"> </div>
                            <div className="card-item">
                                <div className="card-item-title">Editing</div>
                                <div className="card-item-details">
                                    Our editors craft tight, compelling narratives with rhythm and precision — ensuring
                                    every cut enhances engagement and flow across platforms.
                                </div>
                            </div>

                            <div className="card-item">
                                <div className="card-item-title">VFX</div>
                                <div className="card-item-details">
                                    We integrate high-quality visual effects that elevate your message, reinforce branding,
                                    and create moments of visual impact without overshadowing the story.
                                </div>
                            </div>

                            <div className="card-item">
                                <div className="card-item-title">Sound Design</div>
                                <div className="card-item-details">
                                    Using our library of 300+ professional sound effects, we build immersive soundscapes
                                    that add emotion, clarity, and energy to your content.
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-title">Color Grading</div>
                                <div className="card-item-details">
                                    Certified in DaVinci Resolve, our colorists apply cinematic palettes and precise
                                    tonal adjustments to give your footage depth, mood, and polish — frame by frame.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services
