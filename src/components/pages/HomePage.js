import bannerImage from "../../assets/greek-salad-1.webp";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruschetta.webp";
import lemonDessert from "../../assets/lemon dessert.jpg";
import marioAndAdrian from "../../assets/Mario and Adrian A.jpg";
export default function HomePage(){
    return (
        <main>
            {/* Banner Section */}
            <section className="banner">
                <h1>Little Lemon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus
                    ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium
                    tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>
                <button><a href="/reservations">Reserve a Table</a></button>
                <article>
                    <img src={bannerImage} alt="greek salad" className="banner-image"/>
                </article>
            </section>
            {/* Menu Section */}
            <section className="menu">
                <h2>Our Menu</h2>
                <article className="menu-card">
                    <form action="/order" method="get">
                        <input type="hidden" name="image" value={greekSalad}/>
                        <input type="hidden" name="title" value="Greek Salad"/>
                        <input type="hidden" name="price" value="$9.99"/>
                        <img src={greekSalad} alt="greek salad"/>
                        <h3>Greek Salad</h3>
                        <p><strong>$9.99</strong></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <button type="submit">Order now</button>
                    </form>
                </article>
                <article className="menu-card">
                    <form action="/order" method="get">
                        <input type="hidden" name="image" value={bruschetta}/>
                        <input type="hidden" name="title" value="Bruschetta"/>
                        <input type="hidden" name="price" value="$12.99"/>
                        <img src={bruschetta} alt="Bruschetta"/>
                        <h3>Bruschetta</h3>
                        <p><strong>$12.99</strong></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <button type="submit">Order now</button>
                    </form>
                </article>
                <article className="menu-card">
                    <form action="/order" method="get">
                        <input type="hidden" name="image" value={lemonDessert}/>
                        <input type="hidden" name="title" value="Lemon Dessert"/>
                        <input type="hidden" name="price" value="$4.99"/>
                        <img src={lemonDessert} alt="lemon dessert"/>
                        <h3>Lemon Dessert</h3>
                        <p><strong>$4.99</strong></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <button type="submit">Order now</button>
                    </form>
                </article>
            </section>
            {/* Testimonial Section */}
            <section>
                <h2>Testimonials</h2>
                <div className="testimonial-cards">
                    <article className="testimonial-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <p>John Doe</p>
                    </article>
                    <article className="testimonial-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <p>Jane Smith</p>
                    </article>
                    <article className="testimonial-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <p>John Doe</p>
                    </article>
                    <article className="testimonial-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing
                            elit quisque faucibus.</p>
                        <p>Jane Smith</p>
                    </article>
                </div>
            </section>
            {/* About Us Section*/}
            <section className="about-us">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus
                    ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium
                    tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                </p>
                <img src={marioAndAdrian} alt="Mario and Adrian"/>
            </section>
        </main>
    );
}