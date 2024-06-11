import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us? </h1>
              <p>
               At our core, we believe in providing unparalleled service and care to our clients. With a dedicated team of professionals and a commitment to excellence, we strive to exceed your expectations in every aspect of our work.
              </p>
              <p>
                Our approach is simple: we listen to your needs, understand your goals, and tailor our services to meet your unique requirements. Whether you're looking for guidance, support, or solutions, we're here to help you every step of the way.
              </p>
              <p>
                With a focus on innovation and collaboration, we continuously seek new opportunities to improve and evolve. By staying ahead of the curve and embracing change, we ensure that our clients receive the best possible outcomes, now and in the future.
              </p>
              <p>
                Join us on this journey towards success, and experience the difference of working with a team that truly cares about your success. Together, we can achieve great things and reach new heights of excellence.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

    </>
  );
};
