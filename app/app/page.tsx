// app/page.tsx

"use client";

import React, { useState } from 'react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'ABC Corp', location: 'Hà Nội', description: 'Developing and maintaining frontend UI.' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Tech', location: 'Hồ Chí Minh', description: 'Responsible for server-side development.' },
    { id: 3, title: 'UI/UX Designer', company: 'Design Hub', location: 'Đà Nẵng', description: 'Designing user-friendly interfaces and experiences.' },
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Các nút Đăng nhập và Đăng ký */}
      <div className="auth-buttons fixed top-5 right-5 flex flex-row gap-4">
        <button className="login-btn px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Đăng nhập
        </button>
        <button className="signup-btn px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500">
          Đăng ký
        </button>
      </div>

      <header className="header text-center mb-8">
        <h1 className="title text-3xl font-bold text-gray-800">Tìm kiếm công việc cho sinh viên</h1>
        <input
          type="text"
          placeholder="Tìm công việc, công ty..."
          className="search-input mt-4 px-4 py-2 w-4/5 border-2 border-gray-300 rounded-md focus:border-green-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>

      <section className="job-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="job-title text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="job-company text-sm text-gray-600">{job.company}</p>
              <p className="job-location text-sm text-gray-500">{job.location}</p>
              <p className="job-description text-sm text-gray-700 mt-2">{job.description}</p>
              <button className="apply-btn mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Ứng tuyển ngay
              </button>
            </div>
          ))
        ) : (
          <p className="no-jobs text-center text-lg text-gray-500">Không tìm thấy công việc nào phù hợp.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
