"use client";

import { useState, useEffect } from "react";
import Badge from "@/components/Badge";
import Certificate from "@/components/Certificate";
import BadgesData from "@/data/badges";
import CertificateData from "@/data/certificate";

export default function Page() {
  const [activeTab, setActiveTab] = useState("certificates");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState({ badges: 12, certificates: 6 });

  // Calculate items to display
  const getCurrentItems = () => {
    const data = activeTab === "certificates" ? CertificateData : BadgesData;
    const perPage = activeTab === "certificates" ? itemsPerPage.certificates : itemsPerPage.badges;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = () => {
    const data = activeTab === "certificates" ? CertificateData : BadgesData;
    const perPage = activeTab === "certificates" ? itemsPerPage.certificates : itemsPerPage.badges;
    return Math.ceil(data.length / perPage);
  };

  // Reset to page 1 when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage({ badges: 12, certificates: 6 });
      } else if (width >= 768) {
        setItemsPerPage({ badges: 8, certificates: 4 });
      } else {
        setItemsPerPage({ badges: 6, certificates: 2 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const totalPages = getTotalPages();
    const buttons = [];
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key="first"
          onClick={() => setCurrentPage(1)}
          className="btn btn-sm btn-circle"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <button key="dots-start" className="btn btn-sm btn-circle btn-disabled">
            ...
          </button>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`btn btn-sm btn-circle ${
            currentPage === i ? "btn-primary" : "btn-ghost"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <button key="dots-end" className="btn btn-sm btn-circle btn-disabled">
            ...
          </button>
        );
      }
      buttons.push(
        <button
          key="last"
          onClick={() => setCurrentPage(totalPages)}
          className="btn btn-sm btn-circle"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  const totalPages = getTotalPages();
  const currentItems = getCurrentItems();
  const totalItems = activeTab === "certificates" ? CertificateData.length : BadgesData.length;

  return (
    <div className="container mx-auto my-16 px-4 py-8 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Achievements</h1>
        <p className="text-base-content/70">
          A collection of badges and certifications earned through continuous learning
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-8">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          <div className="stat-title">Total Badges</div>
          <div className="stat-value text-primary">{BadgesData.length}</div>
          <div className="stat-desc">From various platforms</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <div className="stat-title">Total Certificates</div>
          <div className="stat-value text-secondary">{CertificateData.length}</div>
          <div className="stat-desc">Professional certifications</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <div className="stat-title">Categories</div>
          <div className="stat-value text-accent">10+</div>
          <div className="stat-desc">Different platforms</div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs tabs-boxed w-full max-w-md mx-auto mb-8 p-1">
        <a
          className={`tab tab-lg flex-1 ${
            activeTab === "certificates" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("certificates")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Certificates
        </a>
        <a
          className={`tab tab-lg flex-1 ${
            activeTab === "badges" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("badges")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Badges
        </a>
      </div>

      {/* Content Grid */}
      <div className="mb-8">
        {activeTab === "certificates" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item, index) => (
              <Certificate key={index} url={item.url} title={item.title} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((item, index) => (
              <Badge key={index} url={item.url} title={item.title} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-sm text-base-content/70">
            Showing {((currentPage - 1) * (activeTab === "certificates" ? itemsPerPage.certificates : itemsPerPage.badges)) + 1} to{" "}
            {Math.min(
              currentPage * (activeTab === "certificates" ? itemsPerPage.certificates : itemsPerPage.badges),
              totalItems
            )}{" "}
            of {totalItems} {activeTab}
          </div>
          <div className="join gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="join-item btn btn-sm"
            >
              «
            </button>
            {getPaginationButtons()}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="join-item btn btn-sm"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
