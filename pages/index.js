import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  Image,
  Jumbotron,
} from "react-bootstrap";
import axios from "axios";
import Pagination from "react-js-pagination";

export default function Home({ bedrooms, kitchens, childrooms, offices }) {
  const productsPerPage = 4;
  const [activePage, setCurrentPage] = useState(1);

  const indexOfLastProduct = activePage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              {bedrooms
                .slice(indexOfFirstProduct, indexOfLastProduct)
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
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className={styles.title}>
            <h1>Для Кухни</h1>
            <CardDeck>
              {kitchens
                .slice(indexOfFirstProduct, indexOfLastProduct)
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
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className={styles.title}>
            <h1>Для Детской</h1>
            <CardDeck>
              {childrooms
                .slice(indexOfFirstProduct, indexOfLastProduct)
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
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          <Col className={styles.title}>
            <h1>Для Офиса</h1>
            <CardDeck>
              {offices
                .slice(indexOfFirstProduct, indexOfLastProduct)
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
            </CardDeck>
            <div className={styles.pagination}>
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={4}
                totalItemsCount={bedrooms.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
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

export async function getStaticProps() {
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

  return {
    props: {
      bedrooms,
      kitchens,
      childrooms,
      offices,
    },
  };
}
