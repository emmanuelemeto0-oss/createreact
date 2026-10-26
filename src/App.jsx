import { useState } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import Description from "./components/Description.jsx";
import ProductImage from "./components/Image.jsx";
import Name from "./components/Name.jsx";
import Price from "./components/Price.jsx";
import "./App.css";

const firstName = "Emmanuel";
const welcomeImage =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const hasName = firstName.trim().length > 0;

  return (
    <>
      <header className="site-header">
        <Container className="header-inner">
          <a className="brand" href="#home" aria-label="Forma home">
            <span className="brand-mark" aria-hidden="true">
              F
            </span>
            <span>
              forma<span className="brand-period">.</span>
            </span>
          </a>
          <div className="header-note">Sound, considered.</div>
          <div className="cart-status" aria-live="polite">
            <span>Bag</span>
            <Badge className="cart-badge">{cartCount}</Badge>
          </div>
        </Container>
      </header>

      <main id="home">
        <Container className="shop-content">
          <div className="eyebrow">
            <span /> The listening edit / 01
          </div>
          <section className="product-layout" aria-label="Featured product">
            <div className="product-intro">
              <p className="section-kicker">Meet your new everyday</p>
              <h1>
                Good sound.
                <br />
                Better days.
              </h1>
              <p className="intro-copy">
                Thoughtful essentials for wherever the day takes you.
              </p>
            </div>

            <Card className="product-card">
              <div className="image-frame">
                <ProductImage />
                <span className="image-label">FORM 01</span>
              </div>
              <Card.Body className="product-details">
                <div className="product-heading-row">
                  <div>
                    <span className="product-category">WIRELESS AUDIO</span>
                    <Name />
                  </div>
                  <span className="rating" aria-label="Rated 4.9 out of 5">
                    4.9 <span aria-hidden="true">★</span>
                  </span>
                </div>
                <Description />
                <div className="purchase-row">
                  <Price />
                  <Button
                    className="add-button"
                    onClick={() =>
                      setCartCount((currentCount) => currentCount + 1)
                    }
                  >
                    Add to Cart <span aria-hidden="true">+</span>
                  </Button>
                </div>
                <div className="shipping-note">
                  <span aria-hidden="true">✓</span> Complimentary delivery on
                  every order
                </div>
              </Card.Body>
            </Card>
          </section>

          <section className="welcome-section" aria-live="polite">
            <div className="welcome-rule" />
            <div className="welcome-content">
              {hasName ? (
                <>
                  <img
                    className="welcome-avatar"
                    src={welcomeImage}
                    alt={`${firstName} welcome avatar`}
                  />
                  <div>
                    <p className="welcome-kicker">A little note for you</p>
                    <h2>Hello, {firstName}!</h2>
                  </div>
                </>
              ) : (
                <div>
                  <p className="welcome-kicker">A little note for you</p>
                  <h2>Hello, there!</h2>
                </div>
              )}
            </div>
          </section>
        </Container>
      </main>

      <footer className="site-footer">
        <Container>
          Made for the moments in between. <span>© Forma Audio</span>
        </Container>
      </footer>
    </>
  );
}

export default App;
