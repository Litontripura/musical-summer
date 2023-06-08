// যখন একটা ইউজার নতুন করে রেজিস্টার করবে তখন তাকে ডিফল্টভাবে রোল হিসেবে এর স্টুডেন্ট দিয়ে দেওয়া হবে। একজন এডমিন থাকবে যিনি একজন নরমাল ইউজার কে ইন্সট্রাক্টর বা এডমিন করতে পারবে। আর আপনাকে ম্যানুয়ালি একজন এডমিন করে নিতে হবে

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;