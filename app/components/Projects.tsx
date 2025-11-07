"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* SmartChart Suite */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">
              SmartChart Suite Platform
            </h3>
            <p className="">
              GitHub Link:{" "}
              <a
                href="https://github.com/SmartChartSuite"
                target="_blank"
                className="underline"
              >
                https://github.com/SmartChartSuite
              </a>
            </p>
            <p className="mb-2">
              The SmartChart Suite platform has 4 major functionalities: (1)
              data retrieval; (2) logical evaluation; (3) standardized data
              storage; and (4) results display.
            </p>
            <p className="mb-2">
              For more information, see:{" "}
              <a
                href="https://doi.org/10.1093/jamiaopen/ooae145"
                target="_blank"
                className="underline"
              >
                https://doi.org/10.1093/jamiaopen/ooae145
              </a>{" "}
              for more information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  API Gateway
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• P95 latency reduced from 250ms to 80ms</li>
                  <li>• 99.99% availability achieved</li>
                  <li>• Handles 2M requests/day</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Database Optimization
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Query response time improved by 70%</li>
                  <li>• Implemented efficient indexing strategy</li>
                  <li>• Reduced DB load by 45%</li>
                </ul>
              </motion.div>
            </div>
            <h3 className="text-lg font-semibold mt-2">Publications and Presentations</h3>
          </div>

          {/* SDoH Data Extraction */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">
              Social Determinants of Health Data Extraction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Cloud Infrastructure
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Reduced AWS costs by 35%</li>
                  <li>• Implemented auto-scaling for 20+ services</li>
                  <li>• Zero-downtime deployments</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  CI/CD Pipeline
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Reduced deployment time by 65%</li>
                  <li>• Automated testing coverage at 90%</li>
                  <li>• Integration tests success rate 99.5%</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
