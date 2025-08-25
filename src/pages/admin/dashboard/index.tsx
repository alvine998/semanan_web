import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Welcome to CMS Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Total Posts</h3>
            <p className="text-3xl font-bold mt-2">45</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold mt-2">18</p>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
