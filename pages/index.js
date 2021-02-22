import React from "react";
import Head from "next/head";
import Link from "next/link";
import UAParser from "ua-parser-js";
import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  Image
} from "react-bootstrap";
import axios from "axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

export default function Home({ bedrooms, kitchens, childrooms, offices, deviceType }) {
  return (
    <>
      <Head>
        <title>Wooden Каталог</title>
      </Head>
      <header>
        <nav className={styles.nav}>
          <Image
            src="/favicon.ico"
            alt="Picture of the company"
            width={50}
            height={50}
          />
          <h1>WOODEN</h1>
        </nav>
      </header>

      <Container className="py-5">
        <Row className={styles.row}>
          <Col sm={6} className={styles.hero_left}>
            <Image src="/wooden.jpg" alt="Company logo" width="100%" />
          </Col>
          <Col sm={6} className={styles.hero_right}>
            <h1>Каталог Комапании Wooden</h1>
            <div className={styles.blockquote}>
              <h1>Семья — это фирма, а фирма — это семья</h1>
              <h4>&mdash; Слоган компании IKEA</h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col className={styles.title}>
            <h1>Для Спальни</h1>
            <CardDeck>
            <Carousel
              ssr
              partialVisbile
              deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              >
              {bedrooms
                .map((product) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product.id}
                    className={styles.carddeck}
                  >
                    <Card style={{ width: "16rem" }}>
                      <Card.Img
                        variant="top"
                        height="275px"
                        style={{ objectFit: "cover" }}
                        src={
                          product.image
                            ? product.image.url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Title>Подробности в нашем</Card.Title>
                        <Link href="https://t.me/wooden_mebellari">
                          <a target="_blank">
                            <Image
                              src="/telegram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                        <Link href="https://instagram.com/wooden_jizzakh">
                          <a target="_blank">
                            <Image
                              src="/instagram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Carousel>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className={styles.title}>
            <h1>Для Кухни</h1>
            <CardDeck>
            <Carousel
              ssr
              partialVisbile
              deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              >
              {kitchens
                .map((product) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product.id}
                    className={styles.carddeck}
                  >
                    <Card style={{ width: "16rem" }}>
                      <Card.Img
                        variant="top"
                        height="275px"
                        style={{ objectFit: "cover" }}
                        src={
                          product.image
                            ? product.image.url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Title>Подробности в нашем</Card.Title>
                        <Link href="https://t.me/wooden_mebellari">
                          <a target="_blank">
                            <Image
                              src="/telegram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                        <Link href="https://instagram.com/wooden_jizzakh">
                          <a target="_blank">
                            <Image
                              src="/instagram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Carousel>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className={styles.title}>
            <h1>Для Детской</h1>
            <CardDeck>
            <Carousel
              ssr
              partialVisbile
              deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              >
              {childrooms
                .map((product) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product.id}
                    className={styles.carddeck}
                  >
                    <Card style={{ width: "16rem" }}>
                      <Card.Img
                        variant="top"
                        height="275px"
                        style={{ objectFit: "cover" }}
                        src={
                          product.image
                            ? product.image.url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Title>Подробности в нашем</Card.Title>
                        <Link href="https://t.me/wooden_mebellari">
                          <a target="_blank">
                            <Image
                              src="/telegram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                        <Link href="https://instagram.com/wooden_jizzakh">
                          <a target="_blank">
                            <Image
                              src="/instagram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                </Carousel>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          <Col className={styles.title}>
            <h1>Для Офиса</h1>
            <CardDeck>
            <Carousel
              ssr
              partialVisbile
              deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              >
              {offices
                .map((product) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product.id}
                    className={styles.carddeck}
                  >
                    <Card style={{ width: "16rem" }}>
                      <Card.Img
                        variant="top"
                        height="275px"
                        style={{ objectFit: "cover" }}
                        src={
                          product.image
                            ? product.image.url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Title>Подробности в нашем</Card.Title>
                        <Link href="https://t.me/wooden_mebellari">
                          <a target="_blank">
                            <Image
                              src="/telegram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                        <Link href="https://instagram.com/wooden_jizzakh">
                          <a target="_blank">
                            <Image
                              src="/instagram.png"
                              alt="Telegram logo"
                              width={50}
                              height={50}
                            />
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                </Carousel>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          <Col className={styles.contact}>
            <Card
              style={{ width: "20rem", height: "100%" }}
              className={styles.contact_card}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-location-arrow"></i>
                </Card.Title>
                <Card.Text>г.Джизак, Напротив гостиницы Джизак</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "20rem", height: "100%" }}
              className={styles.contact_card}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-phone"></i>
                </Card.Title>
                <Card.Text>+998 97 6436566</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        <p>Wooden Uz</p>
      </footer>
    </>
  );
}

export async function getStaticProps({ req }) {
  const bedrooms = await axios
    .get(`${process.env.BACKEND_URL}/products?categories=1`)
    .then(({ data }) => data)
    .catch((e) => null);

  const kitchens = await axios
    .get(`${process.env.BACKEND_URL}/products?categories=2`)
    .then(({ data }) => data)
    .catch((e) => null);

  const childrooms = await axios
    .get(`${process.env.BACKEND_URL}/products?categories=3`)
    .then(({ data }) => data)
    .catch((e) => null);

  const offices = await axios
    .get(`${process.env.BACKEND_URL}/products?categories=4`)
    .then(({ data }) => data)
    .catch((e) => null);

    let userAgent;
    if (req) {
      userAgent = req.headers["user-agent"];
    }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  return {
    props: {
      deviceType,
      bedrooms,
      kitchens,
      childrooms,
      offices,
    },
  };
}
