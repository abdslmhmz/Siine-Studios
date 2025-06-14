import { useState } from "react"
import "./Services.css"

function Main() {

  const [activeService, setActiveService] = useState(null)

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index)
  }

  const services = [
    {
      title: "Pre-Production",
      description: "Scripting, Storyboarding, Casting",
      details:
        "We handle all the planning phases of your project, from initial concept development to detailed storyboards and talent casting. Our pre-production services ensure your vision is clearly defined before cameras roll.",
    },
    {
      title: "Production",
      description: "Filming, Acting, Directing",
      details:
        "Our experienced crew brings your vision to life with professional filming, photography, and directing services. We use state-of-the-art equipment and techniques to capture stunning visuals that tell your story.",
    },
    {
      title: "Post-Production",
      description: "Editing, VFX, Sound Design, Color Grading",
      details:
        "Transform raw footage into polished content with our comprehensive post-production services. From precise editing to stunning visual effects, professional sound design, and cinematic color grading.",
    },
  ]

  const contentTypes = [
    { title: "Social Media Reels", icon: "📱" },
    { title: "Podcasts", icon: "🎙️" },
    { title: "Event Filming", icon: "🎬" },
    { title: "UGC Content", icon: "👥" },
    { title: "Product Creatives", icon: "📦" },
  ]
  

  return (
    <section className="Services-section" id="services">
    <div className="container">
      <div className="services-accordion">
        {services.map((service, index) => (
          <div key={index} className={`service-item ${activeService === index ? "active" : ""}`}>
            <div className="service-header" onClick={() => toggleService(index)}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="accordion-icon">{activeService === index ? "−" : "+"}</span>
            </div>
            <div className="service-details">
              <p>{service.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Types Grid */}
      <div className="content-types">
        <h3 className="content-types-title">What We Create</h3>
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
  </section>
  )
}

export default Main
