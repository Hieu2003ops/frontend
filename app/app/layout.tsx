// // app/layout.tsx
// "use client";

// import React from "react";
// import './globals.css'; // Đảm bảo CSS toàn cục được áp dụng

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="vi">
//       <head>
//         {/* Không cần khai báo metadata ở đây */}
//       </head>
//       <body>
//         {/* Các nút Đăng nhập và Đăng ký */}
//         <div className="auth-buttons">
//           <button className="login-btn">Đăng nhập</button>
//           <button className="signup-btn">Đăng ký</button>
//         </div>

//         {/* Nội dung của các trang con */}
//         {children}
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
// --

"use client";

import React, { useEffect, useState } from "react";
import "./globals.css"; // Đảm bảo CSS toàn cục được áp dụng

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    // Kiểm tra xem hiện tại có phải là trang login hay không
    const path = window.location.pathname;
    setIsLoginPage(path.includes("/login"));
  }, []);

  return (
    <html lang="vi">
      <head>{/* Không cần khai báo metadata ở đây */}</head>
      <body>
        {/* Nội dung của các trang con */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
