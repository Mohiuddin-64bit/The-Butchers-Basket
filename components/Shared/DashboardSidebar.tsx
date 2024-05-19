import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-700 ">
      <section className="text-center pt-32">
        <Link href="../dashboard">
          <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
            Home
          </h4>
        </Link>
        <Link href="../dashboard/all-products">
          <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
            All Products
          </h4>
        </Link>
        <Link href="/">
          <h4 className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-all py-3">
            Back to Home
          </h4>
        </Link>
      </section>
    </div>
  );
};

export default DashboardSidebar;
