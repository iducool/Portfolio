import React, { useState, useEffect } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/MohmadIdrish_Sorathiya_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  // Add these navigation functions
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Container fluid className="py-5">
        <Particle />
          <Container className="position-relative z-index-1">
            <Row>
              <Col md>
                <h2 className="mt-5 mb-1">My Resume</h2>
                <h1 className="fw-bold mb-3 mb-lg-5">All about <span className="purple">Work and Experience</span></h1>
              </Col>
              <Col md="auto" className="mt-lg-5 mb-5"> 
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </Col>
            </Row>

            <Row className="resume">
              <Col>
                <Document
                  file={pdf}
                  className="d-flex justify-content-center border bg-white rounded mb-3"
                  onLoadSuccess={onDocumentLoadSuccess} 
                >
                  <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </Col>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative", }} className="my-3">
              <Pagination className="justify-content-center custom-pagination">
                <Pagination.Prev
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                />
                {/* Add page numbers */}
                {numPages && (
                  <>
                    {pageNumber > 2 && <Pagination.Ellipsis disabled />}

                    {pageNumber > 1 && (
                      <Pagination.Item
                        onClick={() => setPageNumber(pageNumber - 1)}
                      >
                        {pageNumber - 1}
                      </Pagination.Item>
                    )}

                    <Pagination.Item active>{pageNumber}</Pagination.Item>

                    {pageNumber < numPages && (
                      <Pagination.Item
                        onClick={() => setPageNumber(pageNumber + 1)}
                      >
                        {pageNumber + 1}
                      </Pagination.Item>
                    )}

                    {pageNumber < numPages - 1 && <Pagination.Ellipsis disabled />}
                  </>
                )}
                <Pagination.Next
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                />
              </Pagination>
            </Row>

          </Container>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      
      </Container>      
  );
}

export default ResumeNew;
