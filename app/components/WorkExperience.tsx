"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Health Emerging and Advanced Technologies",
              company: "Georgia Tech Research Institute",
              jobTitle: [
                {
                  title: "Research Engineer II",
                  timeFrame: "July 2024 - Present",
                },
                {
                  title: "Interoperability Branch Head",
                  timeFrame: "February 2023 - Present",
                },
                {
                  title: "Research Engineer I",
                  timeFrame: "June 2021 - June 2024",
                },
              ],
              details: [
                "Supported hiring activities, including resume reviews, interviews, and offer process coordination with HR/TM and onboarding",
                "Mentored junior personnel for career growth and satisfaction and conducted yearly appraisals",
                "Managed student employees from identification / recruitment of candidates through hiring and assigning projects / duties / leads for co-mentoring and supervision to assure a positive student learning experience",
                "Collaborated on the development of the strategic vision and execution plan for HIS-B with the Division Leadership and Laboratory Directorate",
                "Led / co-led contract development and expansion activities and interfacing with research sponsors",
                "Managed budgets, resources, and compliance with policies and procedures, with the support of the program and project portfolio team",
                "Led an agile team in developing and influencing health interoperability solutions, standards, and applications to cover a diverse array of stakeholder needs",
                "Identified new opportunities to expand our health interoperability sponsor base",
                "Led research activities supporting sponsored projects to achieve on time and on budget deliverables for both internal and sponsored research projects",
                "Developed and executed internal research and development programs supporting the division's and ICL's strategic visions",
                "Developed proposals and scopes of work for new / cross-disciplinary research efforts and new business development efforts",
                "Utilized Python to architect and develop technical systems for various health-related domains",
                "Deployed and maintained a Langfuse instance for division's sponsored and internal projects",
                "Used Clinical Quality Language (CQL) and Natural Language Processing Query Language (NLPQL) to filter and retrieve clinical data for proof-of-concept applications",
                "Utilized a CI/CD pipeline in GitLab using Docker and Linux commands to deploy applications in an internal space",
                "Crafted technical documentation of internal tools for project deliverables as well as open-source guides for the health technology community",
                "Designed and implemented application programming interfaces (APIs) to support frontend development as well as connecting backend analytics services for delivery of results from structured and unstructured (NLP) data analyses",
                "Used SQL to transform the MIMIC-IV data set to the standard OMOP CDM for research use",
              ],
              tech: [
                "Fast Healthcare Interoperability Resources (FHIR)",
                "Python",
                "Docker",
                "Git (GitHub and GitLab)",
                "Agentic AI",
                "Langfuse",
                "Technical Document Writing",
                "Clinical Quality Language (CQL)",
                "OMOP CDM",
                "SQL",
                "Linux",
                "CI/CD",
                "Atlassian Tools (Confluence and Jira)",
              ],
            },
            {
              title: "Electro-Optical Systems Innovation",
              company: "Georgia Tech Research Institute",
              jobTitle: [
                {
                  title: "Student Assistant",
                  timeFrame: "May 2019 - May 2020",
                },
              ],
              details: [
                "Was tasked with the design, analysis, assembly, alignment, and testing of optical systems, including a system was recently named one of GTRI's major initiatives",
                "Some significant projects include: an optical imaging system for space situational awareness initiatives, a sensor review for a degraded visual environment system, and an underwater-mapping LiDAR system",
                "Collaborated on a summer internship project for the research of integrated modeling of optical systems, using Python to connect Zemax OpticStudio and SolidWorks to decrease time spent on optomechanical design and analysis",
              ],
              tech: [
                "SolidWorks",
                "Zemx OpticStudio",
                "Python",
                "Optical Alignment",
                "Git",
                "Technical Document Writing",
              ],
            },
            {
              title: "Enterprise Systems Division",
              company: "Georgia Tech Research Institute",
              jobTitle: [
                {
                  title: "Student Assistant",
                  timeFrame: "February 2018 - May 2019",
                },
              ],
              details: [
                "Provided written documentation for systems infrastructure applications developed and maintained by the department by updating this information in the department Wiki",
                "Created an architecture diagram for each application in Microsoft Visio and updated this diagram when necessary",
                "Created and documented systems architecture for existing enterprise applications as well as applications in development",
                "Problem-solved solutions for information management to increase efficiency for leadership when viewing workplace data",
                "Significant projects include: Merging Duplicate Users in a Compliance-Management System, Gathering Data from Oracle SQL Databases for Analysis, and Creating an Automated Resource Management Spreadsheet",
              ],
              tech: [
                "Technical Document Writing",
                "Git",
                "Python",
                "Microsoft Visio",
              ],
            },
          ].map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                {work.title}
              </h3>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {work.company}
              </h2>
              {Array.isArray(work.jobTitle) ? (
                <div className="mb-6 space-y-2">
                  {work.jobTitle.map((jt, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <p className="text-gray-600 dark:text-gray-400 italic">
                        {jt.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 italic text-right">
                        {jt.timeFrame}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mb-6">
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {work.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {work.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
