"use client";

import React from "react";

export default function Resume() {
  const handleDownload = async () => {
    try {
      // Dynamically import to avoid SSR errors
      const { Document, Page, Text, View, StyleSheet, pdf, Image } =
        await import("@react-pdf/renderer");

      const styles = StyleSheet.create({
        page: {
          flexDirection: "column",
          backgroundColor: "#FAFAFA",
          padding: 45,
          fontFamily: "Helvetica",
        },
        header: {
          marginBottom: 35,
        },
        name: {
          fontSize: 36,
          fontWeight: "heavy",
          color: "#0F172A",
          marginBottom: 8,
          letterSpacing: -1,
        },
        role: {
          fontSize: 18,
          color: "#7C3AED",
          fontWeight: "bold",
          marginBottom: 16,
        },
        contactRow: {
          flexDirection: "row",
          gap: 20,
        },
        contactItem: {
          fontSize: 11,
          color: "#475569",
        },
        grid: {
          flexDirection: "row",
          gap: 40,
        },
        leftCol: {
          flex: 1,
        },
        rightCol: {
          width: 185,
        },
        sectionLabel: {
          fontSize: 10,
          fontWeight: "bold",
          color: "#7C3AED",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          marginBottom: 14,
        },
        summaryText: {
          fontSize: 11.5,
          lineHeight: 1.7,
          color: "#64748B",
          marginBottom: 35,
        },
        expContainer: {
          borderLeftWidth: 1.5,
          borderLeftColor: "#E2E8F0",
          paddingLeft: 22,
          marginLeft: 4,
          gap: 30, // Increased spacing between jobs
        },
        expItem: {
          position: "relative",
        },
        expDotPurple: {
          position: "absolute",
          left: -27,
          top: 3,
          width: 9,
          height: 9,
          borderRadius: 4.5,
          backgroundColor: "#7C3AED",
          borderWidth: 2,
          borderColor: "#FAFAFA",
        },
        expDotGray: {
          position: "absolute",
          left: -27,
          top: 3,
          width: 9,
          height: 9,
          borderRadius: 4.5,
          backgroundColor: "#94A3B8",
          borderWidth: 2,
          borderColor: "#FAFAFA",
        },
        expHeaderRow: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 4,
        },
        expTitle: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#1E293B",
        },
        expDate: {
          fontSize: 10,
          color: "#94A3B8",
          fontWeight: "bold",
        },
        expCompany: {
          fontSize: 10.5,
          color: "#7C3AED",
          fontWeight: "bold",
          marginBottom: 10,
        },
        bulletRow: {
          flexDirection: "row",
          marginBottom: 6, // Increased bullet point spacing
        },
        bulletPoint: {
          fontSize: 11,
          color: "#7C3AED",
          marginRight: 8,
          marginTop: -1,
        },
        bulletText: {
          fontSize: 11,
          lineHeight: 1.6,
          color: "#64748B",
          flex: 1,
        },
        skillCategoryTitle: {
          fontSize: 9,
          fontWeight: "bold",
          color: "#64748B",
          textTransform: "uppercase",
          letterSpacing: 1,
          marginBottom: 8,
          marginTop: 18,
        },
        skillsWrapper: {
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: 8,
          rowGap: 8,
        },
        skillBadge: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#F1F5F9",
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 12,
          columnGap: 5,
        },
        skillDotPurple: {
          width: 5,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "#7C3AED",
        },
        skillDotAmber: {
          width: 5,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "#F59E0B",
        },
        skillDotSlate: {
          width: 5,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "#94A3B8",
        },
        skillText: {
          fontSize: 9,
          fontWeight: "bold",
          color: "#334155",
        },
        educationCard: {
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#F1F5F9",
          borderRadius: 12,
          padding: 18,
        },
        eduTitle: {
          fontSize: 12,
          fontWeight: "bold",
          color: "#1E293B",
          marginBottom: 4,
        },
        eduSchool: { fontSize: 10, color: "#64748B", marginBottom: 8 },
        eduDate: {
          fontSize: 9,
          color: "#94A3B8",
          fontWeight: "bold",
          letterSpacing: 1,
        },

        /* Featured Projects Styles */
        projectsSection: {
          marginTop: 45,
        },
        projectsGrid: {
          flexDirection: "row",
          gap: 20,
        },
        projectCard: {
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#F1F5F9",
          borderRadius: 12,
          padding: 18,
          justifyContent: "space-between",
        },
        projectTitle: {
          fontSize: 13,
          fontWeight: "bold",
          color: "#1E293B",
          marginBottom: 6,
        },
        projectDesc: {
          fontSize: 10,
          lineHeight: 1.5,
          color: "#64748B",
          marginBottom: 15,
        },
        projectTagsRow: {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 6,
        },
        projectTag: {
          backgroundColor: "#F8FAFC",
          borderWidth: 1,
          borderColor: "#F1F5F9",
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 12,
          fontSize: 7.5,
          fontWeight: "bold",
          color: "#94A3B8",
          letterSpacing: 1,
        },
        imageCard: {
          flex: 1,
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#0F172A",
        },
        cardImage: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
        },
        imageCardOverlay: {
          padding: 20,
          height: "100%",
          justifyContent: "flex-end",
        },
        imageCardTitle: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginBottom: 4,
        },
        imageCardDesc: {
          fontSize: 10,
          color: "#CBD5E1",
        },
      });

      const doc = (
        <Document>
          <Page size="A4" style={styles.page}>
            {/* Header Section */}
            <View style={styles.header}>
              <Text style={styles.name}>Alex Curator</Text>
              <Text style={styles.role}>Full-Stack Developer</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactItem}>email@curator.dev</Text>
                <Text style={styles.contactItem}>GitHub</Text>
                <Text style={styles.contactItem}>LinkedIn</Text>
              </View>
            </View>

            {/* Main Resume Grid */}
            <View style={styles.grid}>
              {/* Left Column */}
              <View style={styles.leftCol}>
                <Text style={styles.sectionLabel}>Professional Summary</Text>
                <Text style={styles.summaryText}>
                  Passionate software engineer specializing in building
                  high-performance, scalable web applications. Focused on
                  translating complex business problems into elegant technical
                  solutions with a focus on user-centric design and clean code
                  architecture.
                </Text>

                <Text style={styles.sectionLabel}>Experience</Text>
                <View style={styles.expContainer}>
                  {/* TechSphere */}
                  <View style={styles.expItem}>
                    <View style={styles.expDotPurple}></View>
                    <View style={styles.expHeaderRow}>
                      <Text style={styles.expTitle}>
                        Senior Product Engineer
                      </Text>
                      <Text style={styles.expDate}>2021 — Present</Text>
                    </View>
                    <Text style={styles.expCompany}>TechSphere</Text>

                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Architected and deployed a microservices-based analytics
                        engine processing 50k+ events per second.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Reduced infrastructure costs by 40% through aggressive
                        optimization of cloud resource allocation.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Mentored a cross-functional team of 12 engineers,
                        improving sprint velocity by 25%.
                      </Text>
                    </View>
                  </View>

                  {/* Lumina */}
                  <View style={styles.expItem}>
                    <View style={styles.expDotGray}></View>
                    <View style={styles.expHeaderRow}>
                      <Text style={styles.expTitle}>Full-Stack Developer</Text>
                      <Text style={styles.expDate}>2018 — 2021</Text>
                    </View>
                    <Text style={styles.expCompany}>Lumina</Text>

                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Developed a core customer portal using React and
                        Node.js, increasing user engagement by 60%.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Integrated third-party payment gateways and automated
                        subscription billing workflows.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.bulletText}>
                        Optimized database queries for a legacy MongoDB
                        instance, reducing load times from 4s to 400ms.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Right Column */}
              <View style={styles.rightCol}>
                <Text style={styles.sectionLabel}>Technical Arsenal</Text>

                {/* Frontend */}
                <Text style={styles.skillCategoryTitle}>Frontend</Text>
                <View style={styles.skillsWrapper}>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotPurple} />
                    <Text style={styles.skillText}>React</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotPurple} />
                    <Text style={styles.skillText}>Next.js</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotPurple} />
                    <Text style={styles.skillText}>Tailwind</Text>
                  </View>
                </View>

                {/* Backend */}
                <Text style={styles.skillCategoryTitle}>Backend</Text>
                <View style={styles.skillsWrapper}>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotAmber} />
                    <Text style={styles.skillText}>Node.js</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotAmber} />
                    <Text style={styles.skillText}>Express</Text>
                  </View>
                </View>

                {/* Database */}
                <Text style={styles.skillCategoryTitle}>Database</Text>
                <View style={styles.skillsWrapper}>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotPurple} />
                    <Text style={styles.skillText}>MongoDB</Text>
                  </View>
                </View>

                {/* Tools */}
                <Text style={styles.skillCategoryTitle}>Tools</Text>
                <View style={styles.skillsWrapper}>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotSlate} />
                    <Text style={styles.skillText}>Git</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotSlate} />
                    <Text style={styles.skillText}>REST APIs</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotSlate} />
                    <Text style={styles.skillText}>Vercel</Text>
                  </View>
                  <View style={styles.skillBadge}>
                    <View style={styles.skillDotSlate} />
                    <Text style={styles.skillText}>Render</Text>
                  </View>
                </View>

                <View style={{ marginTop: 20 }}>
                  <Text style={styles.sectionLabel}>Education</Text>
                  <View style={styles.educationCard}>
                    <Text style={styles.eduTitle}>
                      B.Sc. in Computer Science
                    </Text>
                    <Text style={styles.eduSchool}>
                      State University of Technology
                    </Text>
                    <Text style={styles.eduDate}>2014 — 2018</Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Alex_Curator_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate PDF", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-violet-200 tracking-tight">
      <div
        id="resume-container"
        className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16"
      >
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-5xl lg:text-[3.25rem] leading-tight font-bold tracking-tight text-slate-900 mb-3">
            Adegboye Daniel
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-violet-600 mb-6">
            Full-Stack Developer
          </p>

          <div className="flex flex-wrap items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600">
            <a
              href="mailto:email@curator.dev"
              className="flex items-center gap-2 hover:text-violet-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              danielite100@gmail.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-violet-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-violet-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              LinkedIn
            </a>
          </div>
        </header>

        {/* Main Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-20 mb-16">
          {/* Left Column */}
          <div className="space-y-14">
            {/* Professional Summary */}
            <section>
              <h2 className="text-xs font-bold tracking-[0.15em] mb-4 text-violet-600 uppercase">
                Professional Summary
              </h2>
              <p className="text-base leading-relaxed text-slate-500 font-medium max-w-[92%]">
                Passionate software engineer specializing in building
                high-performance, scalable web applications. Focused on
                translating complex business problems into elegant technical
                solutions with a focus on user-centric design and clean code
                architecture.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xs font-bold tracking-[0.15em] mb-8 text-violet-600 uppercase">
                Experience
              </h2>

              <div className="border-l-[1.5px] border-slate-200 pl-7 space-y-12 ml-1">
                {/* TechSphere Item */}
                <div className="relative">
                  {/* Purple Dot */}
                  <div className="absolute -left-[34px] top-[7px] w-3 h-3 bg-violet-600 rounded-full ring-[4px] ring-[#FAFAFA]"></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1.5">
                    <h3 className="text-[1.15rem] font-bold text-slate-800 tracking-tight">
                      Senior Product Engineer
                    </h3>
                    <span className="text-sm font-bold text-slate-400 whitespace-nowrap hidden sm:block">
                      2021 — Present
                    </span>
                  </div>

                  <p className="text-[13px] text-violet-600 font-bold mb-4">
                    TechSphere
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Architected and deployed a microservices-based analytics
                        engine processing 50k+ events per second.
                      </span>
                    </li>
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Reduced infrastructure costs by 40% through aggressive
                        optimization of cloud resource allocation.
                      </span>
                    </li>
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Mentored a cross-functional team of 12 engineers,
                        improving sprint velocity by 25%.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Lumina Item */}
                <div className="relative">
                  {/* Gray Dot */}
                  <div className="absolute -left-[34px] top-[7px] w-3 h-3 bg-slate-400 rounded-full ring-[4px] ring-[#FAFAFA]"></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1.5">
                    <h3 className="text-[1.15rem] font-bold text-slate-800 tracking-tight">
                      Full-Stack Developer
                    </h3>
                    <span className="text-sm font-bold text-slate-400 whitespace-nowrap hidden sm:block">
                      2018 — 2021
                    </span>
                  </div>

                  <p className="text-[13px] text-violet-600 font-bold mb-4">
                    Lumina
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Developed a core customer portal using React and
                        Node.js, increasing user engagement by 60%.
                      </span>
                    </li>
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Integrated third-party payment gateways and automated
                        subscription billing workflows.
                      </span>
                    </li>
                    <li className="flex items-start text-slate-500">
                      <span className="text-violet-600 text-[15px] leading-none mr-3 mt-[4px]">
                        •
                      </span>
                      <span className="text-[14.5px] font-medium leading-relaxed">
                        Optimized database queries for a legacy MongoDB
                        instance, reducing load times from 4s to 400ms.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 w-full bg-violet-600 text-white py-3.5 px-6 rounded-full font-semibold hover:bg-violet-700 hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] transition-all text-sm mb-14"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download PDF Resume
            </button>

            {/* Technical Arsenal */}
            <div className="mb-14">
              <h2 className="text-xs font-bold tracking-[0.15em] mb-7 text-violet-600 uppercase">
                Technical Arsenal
              </h2>

              <div className="space-y-7">
                {/* Frontend */}
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 mb-3 uppercase">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                      React
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                      Next.js
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                      Tailwind
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 mb-3 uppercase">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Node.js
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Express
                    </span>
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 mb-3 uppercase">
                    Database
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                      MongoDB
                    </span>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 mb-3 uppercase">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Git
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      REST APIs
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Vercel
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-xs font-bold text-slate-700 tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Render
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.15em] mb-5 text-violet-600 uppercase">
                Education
              </h2>

              <div className="bg-white rounded-[1.25rem] border border-slate-100 p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h3 className="text-[1.05rem] font-bold text-slate-800 tracking-tight mb-1">
                  B.Sc. in Computer Science
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-3">
                  State University of Technology
                </p>
                <p className="text-[11.5px] font-bold tracking-widest text-slate-400">
                  2014 — 2018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <section>
          <h2 className="text-xs font-bold tracking-[0.15em] mb-7 text-violet-600 uppercase">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-[1.25rem] border border-slate-100 p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold tracking-tight text-slate-800 mb-3.5">
                Nexus Analytics
              </h3>
              <p className="text-[13.5px] font-medium text-slate-500 leading-relaxed max-w-[95%] mb-9">
                Real-time data visualization platform designed for high-traffic
                SaaS products.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  NEXT.JS
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  TAILWIND
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  D3.JS
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-[1.25rem] border border-slate-100 p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold tracking-tight text-slate-800 mb-3.5">
                Vortex Dashboard
              </h3>
              <p className="text-[13.5px] font-medium text-slate-500 leading-relaxed max-w-[95%] mb-9">
                Internal enterprise tooling for managing cloud infrastructure
                and service health.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  REACT
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  NODE.JS
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10.5px] font-bold tracking-[0.15em] text-slate-400 uppercase border border-slate-100">
                  REDIS
                </span>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-[1.25rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hidden lg:block group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Code background"
                className="absolute inset-0 w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-7 w-full">
                <h3 className="text-xl font-bold tracking-tight text-white mb-1.5 text-center sm:text-left">
                  Driven by Logic.
                </h3>
                <p className="text-[14.5px] text-slate-300 font-medium text-center sm:text-left">
                  Inspired by Design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
