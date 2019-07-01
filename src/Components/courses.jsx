import React, { Component } from "react";
import azure from "../Assets/azure.png";
import db from "../Assets/db.jpg";
import dashboard from "../Assets/dashboard.png";
import leftpoint from "../Assets/leftpoint.png";

class Courses extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul class="list-unstyled">
          {/*
          <li id="inProgressHeader">
            <img
              src={reading}
              height="90"
              width="5%"
              max-width="1vw"
              alt="reading"
            />
            <i>In Progress</i>: CompTIA A+ 220-1002, Software Troubleshooting
          </li>
    */}
          <img
            src={azure}
            height="50"
            width="3%"
            max-width="1vw"
            alt="reading"
            className="list-icon"
          />
          <li className="list-header">Azure</li>
          <ul>
            <li>
              <a
                href="https://www.cbtnuggets.com/certification-playlist/Microsoft/5d01621c3c131c10001e9c0e"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                AZ-203: Azure Developer Associate
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
            <li>
              <a
                href="https://www.cbtnuggets.com/learn/it-training/azure-sql-essentials"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                Azure SQL Essentials
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
            <li>
              <a
                href="https://www.cbtnuggets.com/search?q=az-101"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                AZ-101 (now part of AZ-300): Azure Administrator and Architect
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
          </ul>

          <img
            src={db}
            height="50px"
            width="3%"
            max-width="1vw"
            alt="reading"
            className="list-icon"
            mode="fit"
          />
          <li className="list-header">SQL</li>
          <ul>
            <li>
              <a
                href="https://www.cbtnuggets.com/certification-playlist/Microsoft/5c8a9faa0038b70b006894e9"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                70-767: Implementing a SQL Data Warehouse
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
            <li>
              <a
                href="https://www.cbtnuggets.com/certification-playlist/Microsoft/5c8a9faa0038b70b006894e9"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                70-768: Developing SQL Data Models
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
          </ul>
          <img
            src={dashboard}
            height="50"
            width="3%"
            max-width="1vw"
            alt="reading"
            className="list-icon"
          />
          <li className="list-header">Data Viz</li>
          <ul>
            <li>
              <a
                href="https://www.cbtnuggets.com/learn/it-training/power-bi-70-778-visualizing-data"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                70-778: Power BI
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
            <li>
              <a
                href="https://www.cbtnuggets.com/learn/it-training/tableau-essentials"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                Tableau Essentials
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
          </ul>
          <li className="list-header">CompTIA</li>
          <ul>
            <li>
              <a
                href="https://www.cbtnuggets.com/learn/it-training/troubleshoot-operating-systems/"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                CompTIA A+ 220-1002 (Software Troubleshooting)
              </a>
              <img
                src={leftpoint}
                height="20"
                width="20"
                alt="reading"
                className="leftpoint"
              />
            </li>
          </ul>
        </ul>
        <footer className="courses-footer">
          <p>
            <a
              href="https://www.cbtnuggets.com/signup"
              target="_blank"
              className="links"
              rel="noopener noreferrer"
            >
              Take CBT Nuggets for a test drive
            </a>
            <img
              src={leftpoint}
              height="20"
              width="20"
              alt="reading"
              className="leftpoint"
            />
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Courses;
