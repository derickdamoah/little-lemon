import restaurant from "../../assets/restaurant.jpg";

export default function ContactPage(){
    return (
        <section className="contact-us">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
                placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
                integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per
                conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <img src={restaurant} alt="Mario and Adrian"/>

            <article className="where-to-find-us">
                <h2>Where to find us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                    sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                    lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
                    duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                    metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
                    semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
                    himenaeos.
                </p>
                <iframe
                    title="Google Maps Location of Lemon Restaurant"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80980.12776678272!2d-87.78644565322645!3d41.88510357970486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d3f4f1910a1%3A0xbf748b410ff0084f!2sLemon!5e1!3m2!1sen!2suk!4v1749048969607!5m2!1sen!2suk"
                    width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </article>
        </section>
    );
}