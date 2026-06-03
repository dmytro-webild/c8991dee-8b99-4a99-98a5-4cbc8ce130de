"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users, Check, X } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="Ghoneim AI"
            navItems={[
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "How It Works", id: "how-it-works" },
              { name: "Case Studies", id: "case-studies" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" }
            ]}
            button={{ text: "Book a Strategy Call", href: "#contact" }}
          />
        </div>
        <div id="hero" data-section="hero">
          <HeroSplitDoubleCarousel
            title="Turn Your Real Estate Leads Into Deals — Automatically"
            description="Ghoneim AI builds AI-driven sales systems that instantly respond to new leads, automate follow-ups, and help your team close more deals — without hiring more staff."
            tag="Limited Slots Available"
            tagIcon={Zap}
            tagAnimation="slide-up"
            background={{ variant: "sparkles-gradient" }}
            buttons={[
              { text: "Book My Free Strategy Call", href: "#contact" }
            ]}
            buttonAnimation="slide-up"
            carouselPosition="right"
            leftCarouselItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/mortgage-house-loan-website-login-graphic-concept_53876-134005.jpg", imageAlt: "AI sales dashboard" },
              { imageSrc: "https://img.b2bpic.net/free-vector/blue-technology-circuit-diagram-with-glowing-line-lights_1017-17266.jpg?id=3922435", imageAlt: "Real estate agent using AI tablet" },
              { imageSrc: "https://img.b2bpic.net/premium-photo/man-hands-with-web-30-technology-digital-tech-future-30-technology-global-network-blockchain-crypto-currency-global-futuristic-website-internet-development-data_1137986-1558.jpg?id=145099533", imageAlt: "Futuristic real estate concept" }
            ]}
            rightCarouselItems={[
              { imageSrc: "https://img.b2bpic.net/premium-photo/business-woman-thinking-tablet-with-ideas-plan-deadline-as-project-manager-web-agency-communication-female-person-app-working-tech-connection-as-professional-company_590464-387270.jpg?id=288443928", imageAlt: "Modern real estate office with AI overlay" },
              { imageSrc: "https://img.b2bpic.net/free-photo/engineer-wearing-vr-headset-data-center-installing-software_482257-116005.jpg?id=414767117", imageAlt: "Fast lead response illustration" },
              { imageSrc: "https://img.b2bpic.net/premium-photo/businesswoman-shaking-hands-with-businessman-desk-office_265022-112864.jpg?id=416438581", imageAlt: "Automated follow-up system" }
            ]}
            carouselItemClassName="!aspect-[4/5]"
          />
        </div>
        <div id="problem-solution" data-section="problem-solution">
          <FeatureCardSixteen
            title="Why Your Leads Aren’t Turning Into Sales"
            description="Most real estate companies lose deals because responses are too slow, follow-ups fall through the cracks, and sales processes are manual. The result? Leads go cold and revenue is left on the table. Our AI Sales System Changes That: We build a complete, AI-powered sales workflow: instant lead responses, automatic multi-step follow-ups, and a clear pipeline—all working together to capture and convert leads. No more manual drudgery; just more sales."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            negativeCard={{
              items: [
                "Slow Responses & Missed Opportunities",                "Manual Follow-Ups Fall Through",                "Disorganized Sales Pipeline",                "Lost Revenue & Wasted Leads"
              ]
            }}
            positiveCard={{
              items: [
                "Instant Lead Response 24/7",                "Automated Multi-Channel Follow-Ups",                "Crystal-Clear CRM Pipeline",                "Maximized Conversions & ROI"
              ]
            }}
          />
        </div>
        <div id="how-it-works" data-section="how-it-works">
          <FeatureBento
            title="How It Works"
            description="We follow a proven 4-step process to implement your AI sales system."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "See It in Action – Book a Demo", href: "#contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Your AI Sales System Launch",                description: "Seamless 4-Step Implementation",                bentoComponent: "timeline",                heading: "Implementation Phases",                subheading: "From Audit to Optimization",                items: [
                  { label: "1. Audit", detail: "Analyze current sales process & identify bottlenecks." },
                  { label: "2. Build", detail: "Configure custom automation (CRM, chatbots, follow-ups)." },
                  { label: "3. Launch", detail: "Integrate, train your team, and go live." }
                ],
                completedLabel: "System Live"
              }
            ]}
          />
        </div>
        <div id="services" data-section="services">
          <FeatureCardTwentySix
            title="Our Services"
            description="Choose the level that fits your needs. Prices are starting ranges; final quote customized per client."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "Get a Custom Quote", href: "#contact" }]}
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "Starter (~$1,000–$1,500)",                description: "Great for small agencies starting to automate. Includes: Lead Capture & Response Automation, Basic Follow-Up Email Sequences, CRM Pipeline Setup.",                imageSrc: "https://img.freepik.com/free-photo/starter-package-illustration_23-2151322050.jpg",                imageAlt: "Starter package illustration",                buttonIcon: ArrowUpRight,
                buttonHref: "#contact"
              },
              {
                title: "Growth (~$1,500–$2,500)",                description: "Ideal for growing teams. Includes: Everything in Starter, plus Advanced Multi-Channel Follow-Ups (email/SMS/WhatsApp), Custom Sales Dashboard & Reporting.",                imageSrc: "https://img.freepik.com/free-photo/growth-package-illustration_23-2151322051.jpg",                imageAlt: "Growth package illustration",                buttonIcon: ArrowUpRight,
                buttonHref: "#contact"
              },
              {
                title: "Scale (~$2,500–$4,000)",                description: "For scaling operations. Includes: Everything in Growth, plus Chatbot Lead Qualification, Full Integration with Marketing Tools (Ads, Calendly), Dedicated Account Manager.",                imageSrc: "https://img.freepik.com/free-photo/scale-package-illustration_23-2151322052.jpg",                imageAlt: "Scale package illustration",                buttonIcon: ArrowUpRight,
                buttonHref: "#contact"
              }
            ]}
          />
        </div>
        <div id="case-studies" data-section="case-studies">
          <TestimonialCardFifteen
            testimonial="Ghoneim AI delivered exactly what they promised: more conversions with less manual effort. Our sales team is more efficient, and our revenue has seen a significant boost in just weeks."
            rating={5}
            author="— Real Estate Brokerage CEO"
            avatars={[
              { src: "https://img.freepik.com/free-photo/ceo-avatar-testimonial_23-2151322053.jpg", alt: "Real Estate Brokerage CEO" }
            ]}
            ratingAnimation="slide-up"
            avatarsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="proven-results" data-section="proven-results">
          <FeatureBento
            title="Proven Results & Real-World Impact"
            description="See how Ghoneim AI has transformed sales for real estate teams. Our systems deliver tangible improvements."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Book a Call to See More Results", href: "#contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Client A: 30% More Conversions",                description: "Implemented an AI sales system leading to a significant boost in deal closures for a leading developer.",                bentoComponent: "icon-info-cards",                items: [
                  { icon: TrendingUp, label: "Conversions", value: "+30%" },
                  { icon: Users, label: "Team Efficiency", value: "+25%" }
                ]
              },
              {
                title: "Client B: 2X Faster Lead Response",                description: "Automated instant responses ensuring no lead is ever missed, day or night for a growing brokerage.",                bentoComponent: "icon-info-cards",                items: [
                  { icon: Zap, label: "Response Time", value: "Instant" },
                  { icon: Monitor, label: "Lead Engagement", value: "24/7" }
                ]
              },
              {
                title: "Watch Our AI System in Action",                description: "See a live demo of how our AI sales system works, from inquiry capture to automated follow-up and deal close.",                bentoComponent: "media-stack",                items: [
                  { imageSrc: "https://img.freepik.com/free-photo/loom-demo-placeholder_23-2151322054.jpg?_wi=1", imageAlt: "Loom Demo Video Screenshot" },
                  { imageSrc: "https://img.freepik.com/free-photo/loom-demo-placeholder_23-2151322054.jpg?_wi=2", imageAlt: "Loom Demo Video Screenshot" },
                  { imageSrc: "https://img.freepik.com/free-photo/loom-demo-placeholder_23-2151322054.jpg?_wi=3", imageAlt: "Loom Demo Video Screenshot" }
                ]
              },
              {
                title: "Streamlined Workflow",                description: "Seamlessly integrate our AI tools with your existing CRM and marketing platforms for a unified sales process.",                bentoComponent: "orbiting-icons",                centerIcon: Puzzle,
                items: [
                  { icon: Shield, ring: 1 },
                  { icon: Monitor, ring: 2 },
                  { icon: Zap, ring: 3 },
                  { icon: TrendingUp, ring: 1 }
                ]
              },
              {
                title: "Data-Driven Optimization",                description: "We continuously analyze performance data and refine your sales processes to ensure ongoing improvement and maximum ROI.",                bentoComponent: "line-chart"
              }
            ]}
          />
        </div>
        <div id="pricing" data-section="pricing">
          <MetricCardOne
            title="Transparent Pricing & Guaranteed Results"
            description="Our services start around $1,000, depending on scope. We offer scalable packages to fit your needs, maximizing your ROI without a hefty upfront investment."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            metrics={[
              { id: "guarantee", value: "100%", title: "Satisfaction Guarantee", description: "We optimize until you see results – your success is our success.", icon: Shield },
              { id: "slots", value: "Limited", title: "Slots Available", description: "Ensuring premium, dedicated support for every client each month.", icon: Zap },
              { id: "roi", value: "Increased", title: "Sales Performance", description: "Our systems deliver measurable improvements to your closing rates.", icon: TrendingUp }
            ]}
          />
        </div>
        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="Who We Are"
            title="Ghoneim AI: Automating Real Estate Sales with Intelligence"
            description="Founded by industry experts, Ghoneim AI specializes in building high-performing AI sales systems exclusively for the real estate sector. Our mission is to empower developers, brokerages, and sales teams to close more deals, faster and more efficiently, leveraging cutting-g intelligence."
            useInvertedBackground={false}
            metrics={[
              { value: "100+", title: "Clients Served" },
              { value: "500+", title: "Deals Automated" },
              { value: "3X", title: "Efficiency Boost" }
            ]}
            imageSrc="https://img.freepik.com/premium-photo/futuristic-ai-dashboard-real-estate-office_849788-2983.jpg?_wi=2" 
            imageAlt="Modern real estate office with AI system"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
          />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Common Questions"
            sideDescription="Get clear answers about Ghoneim AI and how our solutions streamline your real estate sales."
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "Is this real AI or just automation?", content: "Ghoneim AI leverages genuine artificial intelligence (including machine learning for lead scoring and natural language processing for dynamic chatbot interactions) deeply integrated into robust automation workflows. This means intelligent decision-making and dynamic responses, not just pre-set sequences." },
              { id: "2", title: "What if my team is small?", content: "Our solutions are designed to scale with your business. Even small teams experience significant gains in efficiency, allowing them to handle more leads and close more deals without expanding headcount. Our Starter plan is perfect for optimizing existing resources." },
              { id: "3", title: "How quickly will I see results?", content: "Clients typically observe immediate improvements in lead response times within days. Measurable impacts on lead qualification rates and sales pipeline efficiency often become apparent within the first 4-6 weeks, with continuous optimization leading to sustained growth." },
              { id: "4", title: "What if I’m not satisfied?", content: "We are committed to your success. Ghoneim AI offers a satisfaction guarantee; if our system does not meet the agreed-upon Key Performance Indicators (KPIs), we will actively work with you to refine and optimize until it does, or explore other solutions, including a refund option." },
              { id: "5", title: "How does Ghoneim AI integrate with my existing CRM?", content: "Our systems are built for seamless integration. We connect with all major real estate CRM platforms and marketing tools (e.g., Salesforce, HubSpot, Follow Up Boss, Mailchimp, Calendly), ensuring a unified and efficient sales ecosystem." }
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Ready to Transform Your Sales?"
            title="Stop Losing Leads. Start Closing More Deals."
            description="Book a free strategy call and discover how Ghoneim AI can build an intelligent sales system tailored for your real estate business. It's time to automate your growth."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Book My Free Call", href: "https://calendly.com/your-ghoneim-ai-link" } // Placeholder for Calendly link
            ]}
            buttonAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <FooterBase
          logoText="Ghoneim AI"
          copyrightText="© 2024 Ghoneim AI. All rights reserved."
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "AI Lead Response", href: "#services" },
                { label: "Automated Follow-Ups", href: "#services" },
                { label: "CRM Integration", href: "#services" },
                { label: "Sales Performance", href: "#services" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
